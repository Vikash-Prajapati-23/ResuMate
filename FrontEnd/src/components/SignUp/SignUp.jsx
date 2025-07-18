import React, { useState } from "react";
import { Button } from "../ui/button";

const baseUrl = import.meta.env.VITE_BASE_URL

const SignUp = () => {
  const [formData, setformData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        // `${baseUrl}/api/auth/signup`
        "http://localhost:3001/api/auth/signup",
        {
          method: "POST",
        //   credentials: "include",
          body: JSON.stringify(formData),
          headers: { "Content-Type" : "application/json" }
        }
      );
      const data = await response.json();
      if(response.ok) {
        alert(data.message);
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
    <div className="absolute top-[50%] left-[50%] translate-y-[-45%] translate-x-[-45%] z-50 bg-white py-5 px-10 rounded-lg ">
      <div className="relative">
        <button className="absolute top-[-1%] right-[-7%] text-sm text-gray-500 ">
            <i className="fa-solid fa-xmark"></i>
        </button>
        <p className="text-xl font-semibold text-center">
          Create your account.
        </p>
        <p className="text-gray-500 text-sm mb-5 text-center">
          Please fill in the details to get started.
        </p>

        <form onSubmit={handleSignUp}>
          <div className="flex flex-col mb-3">
            <label className="text-sm" htmlFor="">
              Name
            </label>
            <input
              className="rounded p-1 shadow-md border-2 border-gray-300 "
              type="text"
              name="userName"
              value={formData.userName}
              required
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col mb-3">
            <label className="text-sm" htmlFor="">
              Email
            </label>
            <input
              className="rounded p-1 shadow-md border-2 border-gray-300 "
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
            <input
              className="rounded p-1 shadow-md border-2 border-gray-300 "
              type="password"
              name="password"
              value={formData.password}
              required
              onChange={handleChange}
            />
          </div>
          <Button
            type="submit"
            className="text-center text-white w-full bg-blue-500 "
          >
            Sign up
          </Button>
        </form>

        <div className="flex justify-between items-center my-4">
          <div className="h-[1px] w-[100px] bg-blue-500 "></div>
          <div className="text-xs">Or</div>
          <div className="h-[1px] w-[100px] bg-blue-500  "></div>
        </div>

        <div className="flex justify-between gap-5 mb-2">
          <Button
            type="submit"
            className="bg-gray-200 px-12 shadow-md "
            variant="ghost"
          >
            Google
          </Button>
          <Button
            type="submit"
            className="bg-gray-200 px-12 shadow-md "
            variant="ghost"
          >
            Github
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
