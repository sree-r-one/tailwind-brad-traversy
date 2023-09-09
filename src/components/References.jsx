import React from "react";
import {
  logo_google,
  logo_hp,
  logo_ibm,
  logo_microsoft,
  logo_vector_graphics,
} from "../assets/images";

const References = () => {
  return (
    <div className="flex flex-col items-center justify-between space-y-12 px-10 md:flex-row md:space-y-0">
      <img src={logo_hp} alt="hp" className="w-32" />
      <img src={logo_microsoft} alt="ms" className="w-32" />
      <img src={logo_ibm} alt="ibm" className="w-32" />
      <img
        src={logo_google}
        className="w-32 items-center justify-center"
        alt="google"
      />
      <img src={logo_vector_graphics} alt="vector" className="w-32" />
    </div>
  );
};

export default References;
