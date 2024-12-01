import React, { useState } from 'react';

const DynamicStyling = () => {
  const [items, setItems] = useState([
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
  ]);
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleColor = (indexToChange) => {
    setActiveIndex(indexToChange === activeIndex ? null : indexToChange);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Dynamic Styling</h1>
        <ul className="space-y-4">
          {items.map((item, index) => (
            <li
              key={index}
              className={`p-4 rounded-lg cursor-pointer transition-colors duration-300 ${
                activeIndex === index ? 'bg-blue-200' : 'bg-gray-100'
              }`}
            >
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">{item.name}</span>
                <button
                  onClick={() => toggleColor(index)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  {activeIndex === index ? 'Deselect' : 'Select'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DynamicStyling;
