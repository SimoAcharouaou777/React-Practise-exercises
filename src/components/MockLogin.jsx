import React, { useState } from 'react';

export default function MockLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Both fields are required.');
      return;
    }

    setError('');
    setIsLoggedIn(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        {!isLoggedIn ? (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
              Login
            </h2>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

    
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Login
            </button>
          </form>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              Welcome, {username}!
            </h2>
            <button
              onClick={() => setIsLoggedIn(false)}
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
