import React from "react";
import { logo } from "../assets/images";
const Hero = () => {
  return (
    <div className="section-container mb-40  items-center px-10 pt-16 ">
      <img src={logo} alt="logo" className="mx-auto my-16" />

      {/* Description */}
      <h3>A history of everything you copy</h3>
      <p className="text-grayishBlue mx-auto mb-10 max-w-xl">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>

      {/* Buttons */}
      <div className="button-container">
        <a className="bg-strongCyan rounded-full p-4 px-8 duration-150 hover:opacity-80">
          Downlod for iOS
        </a>
        <a className="bg-lightBlue rounded-full p-4 px-8 duration-150 hover:opacity-80">
          Downlod for Android
        </a>
      </div>
    </div>
  );
};

export default Hero;
