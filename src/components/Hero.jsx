import React from "react";
import { logo } from "../assets/images";
const Hero = () => {
  return (
    <div className="mx-auto mb-40 max-w-6xl items-center px-10 pt-16 text-center">
      <img src={logo} alt="logo" className="mx-auto my-16" />

      {/* Description */}
      <h3 className="text-darkGrayishBlue mb-8 text-4xl font-bold md:text-5xl">
        A history of everything you copy
      </h3>
      <p className="text-grayishBlue mx-auto mb-10 max-w-xl">
        Clipboard allows you to track and organize everything you copy.
        Instantly access your clipboard on all your devices.
      </p>

      {/* Buttons */}
      <div className="flex w-full flex-col space-y-6 text-white md:flex-row md:space-x-4 md:space-y-0">
        <a className="bg-strongCyan rounded-full p-4 px-8 duration-150 hover:opacity-80">
          Downlod for iOS
        </a>
      </div>
    </div>
  );
};

export default Hero;
