import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

import Exercise1Page from './pages/Exercise1Page';
import Exercise2Page from './pages/Exercise2Page';
import Exercise3Page from './pages/TaskManagerWithTags'

const App = () => {
  const exercises = [
    { id: 1, name: 'Exercise 1' },
    { id: 2, name: 'Exercise 2' },
    { id: 3, name: 'Exercise 3'}
  ];

  return (
    <Router>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
        <h1 className="text-4xl font-bold text-blue-500 mb-8">My React Exercises</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-4/5 max-w-5xl">
          {exercises.map((exercise) => (
            <div
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-2 cursor-pointer"
              key={exercise.id}
            >
              <Link
                to={`/exercise${exercise.id}`}
                className="block p-8 text-center text-gray-800"
              >
                <div className="text-6xl font-extrabold text-blue-500">
                  {exercise.id}
                </div>
                <div className="mt-4 text-2xl font-semibold">{exercise.name}</div>
              </Link>
            </div>
          ))}
        </div>

        <Routes>
          <Route path="/exercise1" element={<Exercise1Page />} />
          <Route path="/exercise2" element={<Exercise2Page />} />
          <Route path="/exercise3" element={<Exercise3Page />} />
          <Route
            path="/"
            element={
              <div className="mt-12">
                <h2 className="text-2xl text-gray-700">
                  Welcome! Choose an exercise to view.
                </h2>
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
