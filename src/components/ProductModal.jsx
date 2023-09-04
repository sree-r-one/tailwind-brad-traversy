import React from "react";
import imgWeight from "../assets/weight.png";
import imgHeart from "../assets/heart.png";
import imgHeadPhone from "../assets/headphone.png";

const ProductModal = () => {
  return (
    <div className="m-3 flex flex-col rounded-xl bg-white p-12 shadow-xl md:flex-row">
      {/* Image Div */}
      <div className="p-6">
        <img
          src={imgHeadPhone}
          className=" mx-auto w-60 rounded-xl shadow duration-300 ease-in-out hover:scale-105"
        />
      </div>

      {/* Content Div */}
      <div className="flex flex-col space-y-6">
        {/* Label Description Container */}
        <div className="flex flex-col text-center md:text-left">
          <div>
            <div className="inline-block rounded-full bg-gray-900 px-3 py-1 text-white">
              Free Shipping
            </div>
          </div>
        </div>

        {/* Title */}
        <h1 className="max-w-sm text-3xl font-medium">
          Razer Kraken Kitty Edition Gaming Headset Quartz
        </h1>

        {/* Price */}
        <div className="mb-4 flex flex-col space-y-3">
          <p className="line-through">$799</p>
          <p className="text-5xl font-bold ">$599</p>
          <p className="text-sm font-light text-slate-400">
            The Offer is valid until April 3 or as long as the stock lasts
          </p>
        </div>

        {/* Add to Cart */}
        <div className="flex flex-row">
          <button className="w-full rounded-lg bg-blue-700 px-3 py-1 text-white duration-200 ease-in-out hover:scale-105">
            Add to Cart
          </button>
        </div>

        {/* Stock */}
        <div className="group flex items-center space-x-3">
          <div className="h-4 w-4 rounded-full bg-green-500  group-hover:animate-ping"></div>
          <div className="">50 Items in Stock</div>
        </div>

        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0">
          <button className="flex items-center justify-center space-x-4 rounded-xl border-2 px-5 py-3 shadow-sm">
            <img src={imgWeight} alt="" className="w-8" />
            <span>Add to Cart</span>
          </button>
          <button className="flex items-center justify-center space-x-4 rounded-xl border-2 px-5 py-3 shadow-sm">
            <img src={imgHeart} alt="" className="w-8" />
            <span>Add to Favourite</span>
          </button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
