import React, { useState, useEffect } from 'react';

const FetchDateComponent = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError('Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Fetch and Display Data
      </h1>

      {/* Show loading state */}
      {loading && <p className="text-blue-500 text-lg">Loading...</p>}

      {/* Show error message if any */}
      {error && <p className="text-red-500 text-lg">{error}</p>}

      {/* Show data when available */}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
          {data.slice(0, 15).map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.body}</p>
            </div>
          ))}
        </div>
      )}

      {/* Refresh button */}
      <button
        onClick={handleRefresh}
        className="mt-8 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
      >
        Refresh Data
      </button>
    </div>
  );
};

export default FetchDateComponent;
