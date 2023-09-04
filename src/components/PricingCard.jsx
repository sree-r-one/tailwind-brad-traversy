import React from "react";

const PricingCard = () => {
  return (
    <div className="my-6 flex flex-col items-center space-y-6 text-white md:my-0 md:flex-row md:space-x-6 md:space-y-0">
      {/* Card 1 */}
      <div className="rounded-xl bg-slate-600">
        {/* Upper Container */}
        <div className="mx-3 mt-3  rounded-t-xl bg-slate-800 p-8">
          <p className="text-center uppercase">Basic</p>
          <h1 className="mt-10 text-center text-5xl">100GB</h1>
          <p className="mt-2 text-center">$1.99/month</p>

          <div className="flex justify-center">
            <a
              href="#"
              className="my-6 inline-block rounded-lg border border-violet-600 px-10 py-3 transition duration-300 ease-in-out hover:border-violet-800 hover:bg-violet-600 hover:text-white"
            >
              Purchase
            </a>
          </div>
        </div>
        {/* Border*/}
        <div className=" mx-3 border-t border-slate-500"></div>
        {/* Lower Container */}
        <div className="mx-3 mb-3 rounded-b-xl bg-slate-800 p-8">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-center">
              <svg
                className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 50 50"
              >
                <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
              </svg>
              <span className="ml-1 text-sm">100 GB of Storage</span>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 50 50"
              >
                <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
              </svg>
              <span className="ml-1 text-sm">Option To Add Extra Members</span>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 50 50"
              >
                <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
              </svg>
              <span className="ml-1 text-sm">Extra Member Benefits</span>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-slate-600">
        {/* Upper Container */}
        <div className="mx-3 mt-3  rounded-t-xl bg-slate-800 p-8">
          <p className="text-center uppercase">Basic</p>
          <h1 className="mt-10 text-center text-5xl">200GB</h1>
          <p className="mt-2 text-center">$1.99/month</p>

          <div className="flex justify-center">
            <a
              href="#"
              className="my-6 inline-block rounded-lg border border-violet-600 px-10 py-3 transition duration-300 ease-in-out hover:border-violet-800 hover:bg-violet-600 hover:text-white"
            >
              Purchase
            </a>
          </div>
        </div>
        {/* Border*/}
        <div className=" mx-3 border-t border-slate-500"></div>
        {/* Lower Container */}
        <div className="mx-3 mb-3 rounded-b-xl bg-slate-800 p-8">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-center">
              <svg
                className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 50 50"
              >
                <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
              </svg>
              <span className="ml-1 text-sm">100 GB of Storage</span>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 50 50"
              >
                <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
              </svg>
              <span className="ml-1 text-sm">Option To Add Extra Members</span>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 50 50"
              >
                <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
              </svg>
              <span className="ml-1 text-sm">Extra Member Benefits</span>
            </div>
          </div>
        </div>
      </div>
      <div className="rounded-xl bg-slate-600">
        {/* Upper Container */}
        <div className="mx-3 mt-3  rounded-t-xl bg-slate-800 p-8">
          <p className="text-center uppercase">Basic</p>
          <h1 className="mt-10 text-center text-5xl">700GB</h1>
          <p className="mt-2 text-center">$1.99/month</p>

          <div className="flex justify-center">
            <a
              href="#"
              className="my-6 inline-block rounded-lg border border-violet-600 px-10 py-3 transition duration-300 ease-in-out hover:border-violet-800 hover:bg-violet-600 hover:text-white"
            >
              Purchase
            </a>
          </div>
        </div>
        {/* Border*/}
        <div className=" mx-3 border-t border-slate-500"></div>
        {/* Lower Container */}
        <div className="mx-3 mb-3 rounded-b-xl bg-slate-800 p-8">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center justify-center">
              <svg
                className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 50 50"
              >
                <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
              </svg>
              <span className="ml-1 text-sm">100 GB of Storage</span>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 50 50"
              >
                <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
              </svg>
              <span className="ml-1 text-sm">Option To Add Extra Members</span>
            </div>
            <div className="flex items-center justify-center">
              <svg
                className="fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="16"
                height="16"
                viewBox="0 0 50 50"
              >
                <path d="M 41.9375 8.625 C 41.273438 8.648438 40.664063 9 40.3125 9.5625 L 21.5 38.34375 L 9.3125 27.8125 C 8.789063 27.269531 8.003906 27.066406 7.28125 27.292969 C 6.5625 27.515625 6.027344 28.125 5.902344 28.867188 C 5.777344 29.613281 6.078125 30.363281 6.6875 30.8125 L 20.625 42.875 C 21.0625 43.246094 21.640625 43.410156 22.207031 43.328125 C 22.777344 43.242188 23.28125 42.917969 23.59375 42.4375 L 43.6875 11.75 C 44.117188 11.121094 44.152344 10.308594 43.78125 9.644531 C 43.410156 8.984375 42.695313 8.589844 41.9375 8.625 Z"></path>
              </svg>
              <span className="ml-1 text-sm">Extra Member Benefits</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
