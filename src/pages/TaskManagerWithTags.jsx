import React, { useState } from "react";

const TaskManagerWithTags = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [filterTag, setFilterTag] = useState("");

  const addTask = () => {
    if (taskName.trim()) {
      setTasks([...tasks, { name: taskName, tags }]);
      setTaskName("");
      setTags([]);
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput)) {
      setTags([...tags, tagInput]);
      setTagInput("");
    }
  };

  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((_, index) => index !== deleteIndex));
  };

  const filteredTasks = filterTag
    ? tasks.filter((task) => task.tags.includes(filterTag))
    : tasks;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Task Manager with Tags</h1>

      {/* Input for Task */}
      <div className="flex gap-4 mb-4">
        <input
          value={taskName}
          placeholder="Enter task name"
          onChange={(e) => setTaskName(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm w-72"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
        >
          Add Task
        </button>
      </div>

      {/* Input for Tags */}
      <div className="flex gap-4 mb-6">
        <input
          value={tagInput}
          placeholder="Enter tag"
          onChange={(e) => setTagInput(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm w-72"
        />
        <button
          onClick={addTag}
          className="bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-green-700 transition-all"
        >
          Add Tag
        </button>
      </div>

      {/* Current Tags */}
      {tags.length > 0 && (
        <div className="flex gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Filter by Tags */}
      <div className="mb-4">
        <select
          value={filterTag}
          onChange={(e) => setFilterTag(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm"
        >
          <option value="">All Tags</option>
          {Array.from(new Set(tasks.flatMap((task) => task.tags))).map(
            (tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            )
          )}
        </select>
      </div>

      {/* Task List */}
      <ul className="w-full max-w-lg bg-white rounded-lg shadow-md p-4">
        {filteredTasks.length === 0 ? (
          <li className="text-center text-gray-500">No tasks found.</li>
        ) : (
          filteredTasks.map((task, index) => (
            <li
              key={index}
              className="flex flex-col px-4 py-2 border-b border-gray-200 last:border-b-0"
            >
              <div className="flex justify-between items-center">
                <span className="text-gray-700">{task.name}</span>
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-700 transition-all"
                >
                  Delete
                </button>
              </div>
              <div className="flex gap-2 mt-2">
                {task.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-blue-200 text-blue-700 px-2 py-1 rounded-lg shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskManagerWithTags;
