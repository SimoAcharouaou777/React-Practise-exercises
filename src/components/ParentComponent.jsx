import React, { useState } from "react";
import Child from "./Child";

const ParentComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="parent flex flex-col items-center p-8 bg-blue-100 rounded-lg shadow-lg max-w-xl mx-auto mt-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Parent Component</h1>
      <p className="text-xl text-gray-700 mb-6">Current Count: {count}</p>

      <div className="space-y-6">
        <Child count={count} increment={increment} decrement={decrement} />
        <Child count={count} increment={increment} decrement={decrement} />
        <Child count={count} increment={increment} decrement={decrement} />
      </div>
    </div>
  );
};

export default ParentComponent;
