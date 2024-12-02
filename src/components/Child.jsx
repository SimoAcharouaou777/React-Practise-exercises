import React from "react";

const Child = ({ count, increment, decrement }) => {
  return (
    <div className="child bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
      <h2 className="text-2xl font-semibold text-blue-500 mb-4">Child Component</h2>
      <p className="text-xl text-gray-700 mb-4">Current Count: {count}</p>

      <div className="flex justify-around">
        <button
          onClick={increment}
          className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="btn btn-danger bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Child;
