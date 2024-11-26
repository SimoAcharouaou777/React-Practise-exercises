import React , { useState} from 'react';

const Exercise1Page = () => {
    const [number , setNumber] = useState(0);

    const increment = () => {
        setNumber(number + 1);
    };

    const decrement = () => {
        setNumber(number -1);
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
          <h1 className="text-4xl font-bold text-blue-500 mb-8">Exercise 1: Counter</h1>
          <div className="text-6xl font-bold mb-8">{number}</div>
          <div className="flex space-x-4">
            <button
              onClick={decrement}
              className="bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition"
            >
              -
            </button>
    
            <button
              onClick={increment}
              className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition"
            >
              +
            </button>
          </div>
        </div>
      );
};

export default Exercise1Page;
