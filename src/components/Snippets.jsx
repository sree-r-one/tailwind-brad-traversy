import React from "react";
import { image_computer } from "../assets/images";

const Snippets = () => {
  return (
    <div className="section-container space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-darkGrayishBlue mb-5 text-5xl font-bold">
          Keep track of your snippets
        </h1>
        <p className="text-grayishBlue mx-auto max-w-xl p-4 text-center text-xl">
          Clipboard instantly stores any item you copy in the cloud, meaning you
          can access your snippets immediately on all your devices. Our Mac and
          iOS apps will help you organize everything.
        </p>
      </div>

      {/* Image and Text */}
      <div className="flex flex-col items-center justify-center p-4 md:flex-row md:space-x-20">
        <img src={image_computer} alt="image computer" className="md:w-1/2" />
        <div className="mt-10 flex flex-col space-y-8 md:mt-0 md:text-left">
          <div className="">
            <h2 className="text-darkGrayishBlue text-xl font-bold">
              Quick Search
            </h2>
            <p className="text-grayishBlue max-w-sm">
              Easily search your snippets by content, category, web address,
              application, and more.
            </p>
          </div>
          <div className="">
            <h2 className="text-darkGrayishBlue text-xl font-bold">
              iCloud Sync
            </h2>
            <p className="text-grayishBlue max-w-sm">
              Instantly saves and syncs snippets across all your devices.
            </p>
          </div>
          <div className="">
            <h2 className="text-darkGrayishBlue text-xl font-bold">
              Complete History
            </h2>
            <p className="text-grayishBlue max-w-sm">
              Retrieve any snippets from the first moment you started using the
              app.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snippets;
