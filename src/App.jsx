import React from "react";

const App = () => {
  return (
    <div>
      <h1>React App</h1>

      <div className="relative h-12 w-1/2 bg-red-300">
        hello
        <p>parent element</p>
        <div className="absolute bottom-0 right-0 bg-red-500">
          <p>absolute</p>
        </div>
      </div>
    </div>
  );
};

export default App;
