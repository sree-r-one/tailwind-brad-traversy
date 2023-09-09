import React from "react";
import { icon_blacklist, icon_text, icon_preview } from "../assets/images";

const Supercharge = () => {
  return (
    <div className="section-container my-20">
      <h3>Supercharge your workflow</h3>
      <p className="section-content mb-16">
        We've got the tools to boost your productivity.
      </p>

      {/* Items Container */}
      <div className="flex flex-col items-center justify-between space-y-16 md:flex-row md:space-x-12 md:space-y-0">
        <div className="flex flex-col items-center space-y-5">
          <img src={icon_blacklist} alt="" />
          <h5>
            Easily search your snippets by content, category, web address,
            application, and more.
          </h5>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <img src={icon_text} alt="" />
          <h5>
            Easily search your snippets by content, category, web address,
            application, and more.
          </h5>
        </div>
        <div className="flex flex-col items-center space-y-5">
          <img src={icon_preview} alt="icon preview" />
          <h5>
            Quick preview of all snippets on your Clipboard for easy access.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Supercharge;
