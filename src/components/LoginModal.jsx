import React from "react";
import imageBackground from "../assets/image.jpg";
import facebook from "../assets/facebook.png";
import google from "../assets/google.png";
const LoginModal = () => {
  return (
    <div className="md:m0 m-6 flex flex-col space-y-10 rounded-2xl bg-white shadow-2xl md:flex-row md:space-y-0">
      {/* Left Side */}
      <div className="p-6 md:p-20">
        {/* Top Content */}
        <h2 className="mb-5 text-4xl font-bold">Log In</h2>
        <p className="mb-12 max-w-sm font-light text-gray-500">
          Login to your Account to Upload or Download Files
        </p>
        <input
          className="mb-5 w-full rounded-md border border-blue-100 p-4 placeholder-gray-400 focus:border-blue-500"
          type="text"
          placeholder="Enter your email address"
        />

        {/* Middle Content */}
        <div className="mt-6 flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          <div className="font-thin text-cyan-700">Forgot Password</div>
          <button className="flex w-full items-center justify-center rounded bg-cyan-700 p-6 font-bold text-white shadow-lg md:w-auto">
            Next
          </button>
        </div>
      </div>

      {/* Right Side */}
      <div className="">
        <img
          src={imageBackground}
          alt="background"
          className="hidden w-[430px] rounded-r-3xl  md:block"
        />
      </div>
    </div>
  );
};

export default LoginModal;
