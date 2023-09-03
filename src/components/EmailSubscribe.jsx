import React from "react";
import imgEmailSubscribe from "../assets/email-subscribe-2.jpg";

const EmailSubscribe = () => {
  return (
    // Card
    <div className="mx-6 rounded-2xl bg-zinc-800 p-2">
      {/* Flex Container */}
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <img
          src={imgEmailSubscribe}
          alt=""
          className="object-fit h-80 transform rounded-xl transition duration-200 ease-in-out hover:scale-105 md:h-64 md:rounded-l-xl md:rounded-r-none"
        />
        {/* Content */}
        <div className="p-6 text-white md:p-12">
          <h2 className="text-center font-medium  md:text-left">
            Get diet and fitness tip in your inbox
          </h2>
          <p className="my-4 max-w-xs text-center text-xs leading-10 tracking-wide md:text-left">
            Eat and Diet Better. Sign Up for the Newsletter Now!
          </p>

          {/* Input */}
          <div className="flex flex-col space-y-4 md:flex-row md:space-x-2 md:space-y-0">
            <input
              type="text"
              placeholder="Enter Your email address"
              className="border-color-zinc-500 rounded-md border p-2 px-4 placeholder:text-center placeholder:text-xs md:placeholder:text-left"
            />
            <button className="mt-4 rounded-md bg-zinc-500 px-4 py-2 text-white md:mt-0">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSubscribe;
