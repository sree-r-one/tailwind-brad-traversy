import React from "react";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import image4 from "../assets/image4.jpg";
import image5 from "../assets/image5.jpg";
import image6 from "../assets/image6.jpg";
import bookmark from "../assets/bookmark.svg";

const ImageGallery = () => {
  return (
    <div className="space-y-10 rounded-2xl bg-white p-6 shadow-2xl md:p-40">
      {/* Menu Container */}
      <div className="flex flex-col items-center justify-center space-y-3 md:mb-24 md:flex-row md:justify-end md:space-x-4 md:space-y-0">
        {/* Menu Items */}
        <div className="group">
          <a href="">Vector</a>
          <div className="mx-2 mt-1 border border-b-2 border-blue-600 opacity-0 group-hover:opacity-100"></div>
        </div>
        <div className="group">
          <a href="">Icons</a>
          <div className="mx-2 mt-1 border border-b-2 border-blue-600 opacity-0 group-hover:opacity-100"></div>
        </div>
        <div className="group">
          <a href="">Illustrations</a>
          <div className="mx-2 mt-1 border border-b-2 border-blue-600 opacity-0 group-hover:opacity-100"></div>
        </div>
        <div className="group">
          <a href="">Images</a>
          <div className="mx-2 mt-1 border border-b-2 border-blue-600 opacity-0 group-hover:opacity-100"></div>
        </div>
      </div>

      {/* Search Container */}
      <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
        {/* Input */}
        <div className="flex justify-between border-b pb-1">
          <input
            type="text"
            className="ml-6 border-none placeholder-gray-400 placeholder:font-thin focus:border-transparent focus:outline-none focus:ring-0 md:w-80"
            placeholder="Search"
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="16"
              height="16"
              viewBox="0 0 50 50"
            >
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </button>
        </div>
        {/* Upload Button */}
        <div className="flex flex-col">
          <button className="rounded-md bg-black px-3 py-1 text-white">
            Upload
          </button>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid gap-4 md:grid-cols-3">
        {/* Image 1 */}
        <div className="group relative">
          <img src={image1} />
          {/* Description */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 px-4 text-white opacity-0 group-hover:opacity-90">
            <div className="flex w-full justify-between">
              <div className="font-normal">
                <p className="text-sm">Abstract Painting</p>
                <p className="text-xs">245 likes - 35 shares</p>
              </div>
              <div className="flex items-center">
                <img src={bookmark} alt="bookmark" />
              </div>
            </div>
          </div>
        </div>
        {/* Image 2 */}
        <div className="group relative">
          <img src={image2} />
          {/* Description */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 px-4 text-white opacity-0 group-hover:opacity-90">
            <div className="flex w-full justify-between">
              <div className="font-normal">
                <p className="text-sm">Abstract Painting</p>
                <p className="text-xs">245 likes - 35 shares</p>
              </div>
              <div className="flex items-center">
                <img src={bookmark} alt="bookmark" />
              </div>
            </div>
          </div>
        </div>
        {/* Image 3 */}
        <div className="group relative">
          <img src={image3} />
          {/* Description */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 px-4 text-white opacity-0 group-hover:opacity-90">
            <div className="flex w-full justify-between">
              <div className="font-normal">
                <p className="text-sm">Abstract Painting</p>
                <p className="text-xs">245 likes - 35 shares</p>
              </div>
              <div className="flex items-center">
                <img src={bookmark} alt="bookmark" />
              </div>
            </div>
          </div>
        </div>
        {/* Image 4 */}
        <div className="group relative">
          <img src={image4} />
          {/* Description */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 px-4 text-white opacity-0 group-hover:opacity-90">
            <div className="flex w-full justify-between">
              <div className="font-normal">
                <p className="text-sm">Abstract Painting</p>
                <p className="text-xs">245 likes - 35 shares</p>
              </div>
              <div className="flex items-center">
                <img src={bookmark} alt="bookmark" />
              </div>
            </div>
          </div>
        </div>
        {/* Image 5 */}
        <div className="group relative">
          <img src={image5} />
          {/* Description */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 px-4 text-white opacity-0 group-hover:opacity-90">
            <div className="flex w-full justify-between">
              <div className="font-normal">
                <p className="text-sm">Abstract Painting</p>
                <p className="text-xs">245 likes - 35 shares</p>
              </div>
              <div className="flex items-center">
                <img src={bookmark} alt="bookmark" />
              </div>
            </div>
          </div>
        </div>
        {/* Image 6 */}
        <div className="group relative">
          <img src={image6} />
          {/* Description */}
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 px-4 text-white opacity-0 group-hover:opacity-90">
            <div className="flex w-full justify-between">
              <div className="font-normal">
                <p className="text-sm">Abstract Painting</p>
                <p className="text-xs">245 likes - 35 shares</p>
              </div>
              <div className="flex items-center">
                <img src={bookmark} alt="bookmark" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
