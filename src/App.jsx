import React from "react";

const App = () => {
  return (
    <div>
      {/* Flex and Alignment  */}

      {/* <div className="flex h-72 w-full items-center justify-between bg-gray-300">
        <div className="border border-blue-400 bg-blue-100 p-10">01</div>
        <div className="border border-blue-400 bg-blue-100 p-10">02</div>
        <div className="border border-blue-400 bg-blue-100 p-10">03</div>
        <div className="border border-blue-400 bg-blue-100 p-10">04</div>
      </div> */}

      <div className="flex w-full gap-4 bg-gray-300">
        <div className="w-64 flex-initial border border-blue-400 bg-blue-100 p-10">
          01
        </div>
        <div className="w-64 flex-none border border-blue-400 bg-blue-100 p-10">
          02
        </div>
        <div className="w-64 flex-auto border border-blue-400 bg-blue-100  p-10">
          03
        </div>
        <div className="w-64 border border-blue-400 bg-blue-100 p-10">04</div>
        <div className="w-64 border border-blue-400 bg-blue-100 p-10">05</div>
        <div className="w-64 border border-blue-400 bg-blue-100 p-10">06</div>
        <div className="w-64 border border-blue-400 bg-blue-100 p-10">07</div>
      </div>
    </div>
  );
};

export default App;
