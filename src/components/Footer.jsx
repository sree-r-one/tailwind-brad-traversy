import React from "react";
import { logo } from "../assets/images";

const Footer = () => {
  return (
    <div className="bg-gray-200">
      <div className="section-container mt-32 flex flex-col items-center justify-between space-y-12   py-5 md:flex-row md:space-x-12 md:space-y-0">
        <img src={logo} alt="logo" className="w-16 " />
        <a href="#">About Us</a>
        <a href="#">Privacy</a>
        <a href="#">Contact Us</a>
        <a href="#">Install Guide</a>
      </div>
    </div>
  );
};

export default Footer;
