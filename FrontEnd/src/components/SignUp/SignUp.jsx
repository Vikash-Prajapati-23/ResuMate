import React, { useState } from "react";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import google_logo from "../../assets/google-logo.png";
import { Input } from "../ui/input";

const baseUrl = import.meta.env.VITE_BASE_URL;

const SignUp = () => {
  const [isVisible, setIsVisible] = useState(true);
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
        setIsVisible(false)
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

  return (
    <div className={` ${isVisible ? "block" : "hidden"} `}>
      <p className="text-xl font-semibold text-center">Create your account.</p>
      <p className="text-gray-500 text-sm mb-5 text-center">
        Please fill in the details to get started.
      </p>

      <form onSubmit={handleSignUp}>
        <div className="flex flex-col mb-3">
          <label className="text-sm" htmlFor="">
            Name
          </label>
          <Input
            className="rounded p-1 shadow-md border-2 border-gray-300 text-sm "
            type="text"
            name="userName"
            value={formData.userName.trimStart()}
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col mb-3">
          <label className="text-sm" htmlFor="">
            Email
          </label>
          <Input
            className="rounded p-1 shadow-md border-2 border-gray-300 text-sm "
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
            className="rounded p-1 shadow-md border-2 border-gray-300 text-sm "
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

        <div className="flex justify-between items-center my-4">
          <div className="h-[1px] w-[100px] bg-blue-500 "></div>
          <div className="text-xs">Or</div>
          <div className="h-[1px] w-[100px] bg-blue-500  "></div>
        </div>

        <div className="flex justify-between gap-5 mb-2">
          <Button
            type="button"
            // onClick={}
            className="bg-gray-200 px-16 shadow-md "
            variant="ghost"
          >
            <img src={google_logo} alt="Google" className="w-4 h-4 " />
          </Button>
          <Button
            type="button"
            className="bg-gray-200 px-16 shadow-md "
            variant="ghost"
          >
            <Github className="w-5 h-5 text-black" />
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
