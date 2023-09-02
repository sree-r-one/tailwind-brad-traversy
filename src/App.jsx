import React from "react";

const App = () => {
  return (
    <div>
      App
      <a
        href=""
        className="group block max-w-xs rounded-lg bg-white p-6 shadow hover:bg-sky-500"
      >
        <h3 className="group-hover:text-white">Card Title</h3>
        <p>This is the card text</p>
      </a>
      {/* Pseudo Classes */}
      <ul>
        <li className="even:bg-red-200">Item 1</li>
        <li className="even:bg-red-200">Item 2</li>
        <li>Item 3</li>
        <li>Item 4</li>
        <li>Item 5</li>
        <li>Item 6</li>
      </ul>
      <select name="" id="">
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
    </div>
  );
};

export default App;
