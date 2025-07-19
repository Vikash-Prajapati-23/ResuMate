import React, { useState } from "react";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import google_logo from "../../assets/google-logo.png";
import { Input } from "../ui/input";
import { setLogIn } from "@/store/slices/loogedIn/loogedIn";
import { useDispatch } from "react-redux";

const baseUrl = import.meta.env.VITE_BASE_URL;

const LogIn = ({ setIsSignUp, toggelLogInSignUp }) => {
  const [isVisible, setIsVisible] = useState(true);
  const dispatch = useDispatch();
  const [formData, setformData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${baseUrl}/api/auth/signup`,
        // "http://localhost:3001/api/auth/signup",
        {
          method: "POST",
          //   credentials: "include",
          body: JSON.stringify(formData),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        dispatch(setLogIn());
        setIsVisible(false);
        setIsSignUp(false);
      }
    } catch (error) {
      alert("Something went wrong while signing up.!");
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  //
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50`}
    >
      <div
        className={`relative bg-white md:py-5 py-2 md:px-10 px-5 rounded-lg ${
          isVisible ? "block" : "hidden"
        } `}
      >
        <button
          onClick={() => {
            setIsVisible(false), setIsSignUp(false);
          }}
          className="absolute top-[4%] right-[5%] text-sm text-gray-500 "
        >
          <i className="fa-solid fa-xmark"></i>
        </button>
        <p className="md:text-xl text-base font-semibold text-center">
          Welcome, Please Login.
        </p>
        <p className="text-gray-500 md:text-sm text-xs mb-5 text-center">
          Please fill in the details to get started.
        </p>

        <form onSubmit={handleSignUp}>
          <div className="flex flex-col mb-3">
            <label className="text-sm" htmlFor="">
              Email
            </label>
            <Input
              className="text-sm"
              type="text"
              name="email"
              value={formData.email}
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="text-sm" htmlFor="">
              Password
            </label>
            <Input
              className="text-sm"
              type="password"
              name="password"
              value={formData.password}
              required
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            // onClick={}
            className="text-center text-white w-full bg-blue-500 "
          >
            Sign up
          </Button>

          <div className="flex justify-between items-center gap-1 md:my-4 my-2">
            <div className="h-[1px] md:w-[140px] w-[110px] bg-blue-500 "></div>
            <div className="text-xs">Or</div>
            <div className="h-[1px] md:w-[140px] w-[110px] bg-blue-500  "></div>
          </div>

          <div className="flex justify-between md:gap-5 mb-2">
            <Button
              type="button"
              // onClick={}
              className="bg-gray-200 md:px-16 px-12 shadow-md "
              variant="ghost"
            >
              <img src={google_logo} alt="Google" className="md:w-5 w-3 md:h-5 h-3 " />
            </Button>
            <Button
              type="button"
              className="bg-gray-200 md:px-16 px-12 shadow-md "
              variant="ghost"
            >
              <Github className="md:w-5 w-2 md:h-5 h-2 text-black" />
            </Button>
          </div>

          <div onClick={toggelLogInSignUp} className="flex justify-end cursor-pointer">
            <span className="text-blue-500 hover:underline hover:text-blue-600 transition text-xs">Don't have account? SignUp</span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
