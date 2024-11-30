import React from 'react'
import { useState } from 'react';

function Exercise3() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([{ name: taskInput, status: false }, ...tasks]);
      setTaskInput("");
    }
  };

  const deleteTask = (indexToDelete) => {
    setTasks(tasks.filter((_, index) => index !== indexToDelete));
  };

  const toggleStatus = (indexToChange) => {
    setTasks(
      tasks.map((task, index) =>
        index === indexToChange
          ? { ...task, status: !task.status }
          : task
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Task Manager
        </h1>

        <div className="mb-4 flex gap-2">
          <input
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            placeholder="Enter a task"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Add Task
          </button>
        </div>

        <ul className="space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow-sm"
            >
              <div>
                <span
                  className={`text-lg font-medium ${
                    task.status ? "line-through text-green-600" : "text-gray-800"
                  }`}
                >
                  {task.name}
                </span>
                <span className="ml-2 text-sm text-gray-500">
                  {task.status ? "✅ Completed" : "❌ Not Completed"}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleStatus(index)}
                  className="bg-yellow-400 text-white px-2 py-1 rounded-lg hover:bg-yellow-500"
                >
                  Change Status
                </button>
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Exercise3