import React, { useState } from "react";

export default function ItemNavigator() {
  const items = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-64 text-center">
        <h1 className="text-2xl font-semibold mb-4">Item Navigator</h1>

        {/* Display current item */}
        <div className="text-lg font-medium mb-6">
          Current Item: <span className="text-blue-500">{items[currentIndex]}</span>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-4 py-2 rounded-md ${
              currentIndex === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === items.length - 1}
            className={`px-4 py-2 rounded-md ${
              currentIndex === items.length - 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
