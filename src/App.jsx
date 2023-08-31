import React from "react";
import warningImage from "./assets/warning.svg";

const App = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-red-300">Hello world!</h1>

      <div className="mx-auto flex  max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
        <img src={warningImage} alt="" className="h-12 w-12" />
        <div className="">
          <h3 className="text-xl font-medium text-black">Are You Sure?</h3>
          <p className="text-slate-400">You are about to delete a post</p>
        </div>
      </div>
      <input
        className="accent-purple-400"
        type="checkbox"
        name=""
        id=""
        checked
      />
    </div>
  );
};

export default App;
