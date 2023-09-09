import React from "react";
import { image_computer, image_devices } from "../assets/images";

const Snippets = () => {
  return (
    <div className="section-container space-y-6">
      {/* Header */}
      <div className="text-center">
        <h1 className="mb-5 text-5xl font-bold text-darkGrayishBlue">
          Keep track of your snippets
        </h1>
        <p className="mx-auto max-w-xl p-4 text-center text-xl text-grayishBlue">
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
            <h2 className="text-xl font-bold text-darkGrayishBlue">
              Quick Search
            </h2>
            <h5 className="max-w-sm text-grayishBlue">
              Easily search your snippets by content, category, web address,
              application, and more.
            </h5>
          </div>
          <div className="">
            <h2 className="text-xl font-bold text-darkGrayishBlue">
              iCloud Sync
            </h2>
            <h5>Instantly saves and syncs snippets across all your devices.</h5>
          </div>
          <div className="">
            <h2 className="text-xl font-bold text-darkGrayishBlue">
              Complete History
            </h2>
            <h5>
              Retrieve any snippets from the first moment you started using the
              app.
            </h5>
          </div>
        </div>
      </div>

      {/* Access */}
      <div className="section-container my-20">
        <h3>Access Clipboard Anywhere</h3>
        <p className="section-content mb-4">
          Whether you’re on the go, or at your computer, you can access all your
          Clipboard snippets in a few simple clicks.
        </p>
        <img src={image_devices} alt="image devices" className="mx-auto" />
      </div>
    </div>
  );
};

export default Snippets;
