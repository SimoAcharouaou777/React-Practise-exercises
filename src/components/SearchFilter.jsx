import React from "react";
import { useState } from "react";

const SearchFilter = () => {

    const [items, setItems] = useState([
        { name: "Apple" },
        { name: "Banana" },
        { name: "Cherry" },
        { name: "Date" },
        { name: "Elderberry" },
      ]);
    
      const [isSearching, setIsSearching] = useState(false);
      const [searchItem, setSearchItem] = useState("");
      const [filteredItems, setFilteredItems] = useState([]);
    
      const search = () => {
        setIsSearching(true);
        setFilteredItems(
          items.filter((item) =>
            item.name.toLowerCase().includes(searchItem.toLowerCase())
          )
        );
      };
    
      return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Fruit Search App
          </h1>
          <div className="flex flex-col md:flex-row gap-4 items-center w-full max-w-md">
            <input
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
              placeholder="Type to search..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={search}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Search
            </button>
          </div>
          <div className="mt-6 w-full max-w-md">
            {isSearching ? (
              <ul className="bg-white shadow-md rounded-lg p-4">
                {filteredItems.length > 0 ? (
                  filteredItems.map((item, index) => (
                    <li
                      key={index}
                      className="py-2 px-3 border-b last:border-none text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      {item.name}
                    </li>
                  ))
                ) : (
                  <p className="text-center text-gray-500">No items found</p>
                )}
              </ul>
            ) : (
              <ul className="bg-white shadow-md rounded-lg p-4">
                {items.map((item, index) => (
                  <li
                    key={index}
                    className="py-2 px-3 border-b last:border-none text-gray-700 hover:bg-gray-100 rounded-md"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      );
}




export default SearchFilter;