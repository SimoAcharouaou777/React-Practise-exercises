import React, { useState } from 'react';

const Exercise2Page = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editedTaskIndex, setEditedTaskIndex] = useState(null);

    const AddTask = () => {
        setTasks([...tasks, task]);
        setTask("");
    };

    const DeleteTask = (deletIndex) => {
        setTasks(tasks.filter((_, index) => index !== deletIndex ));
    };
    const editeTask = (editedTaskInd) => {
        setIsEditing(true);
        setTask(tasks[editedTaskInd]);
        setEditedTaskIndex(editedTaskInd);
    };
    const UpdateTask = () => {
        let updatedTask = tasks.slice();
        if(editedTaskIndex !== null){
           updatedTask[editedTaskIndex] = task;
        }
        
        setTasks(updatedTask);
        setTask("");
        setIsEditing(false);
        setEditedTaskIndex(null);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-8">
            {/* Header */}
            <h1 className="text-4xl font-bold text-blue-600 mb-6">Task Manager</h1>

            {/* Input and Button */}
            <div className="flex gap-4 mb-6">
                <input
                    value={task}
                    placeholder="Enter your task name"
                    onChange={(e) => setTask(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent w-72"
                />
                {isEditing ? (
                    <button
                    onClick={UpdateTask}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
                >
                    Update Task
                </button>
                ) : (
                    <button
                    onClick={AddTask}
                    className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
                >
                    Add Task
                </button>
                )}
                
            </div>

            {/* Task List */}
            <ul className="w-full max-w-lg bg-white rounded-lg shadow-md p-4">
                {tasks.length === 0 ? (
                    <li className="text-center text-gray-500">No tasks added yet.</li>
                ) : (
                    tasks.map((task, index) => (
                        <li
                            key={index}
                            className="flex justify-between items-center px-4 py-2 border-b border-gray-200 last:border-b-0"
                        >
                            <span className="text-gray-700">{task}</span>
                            <button onClick={() => DeleteTask(index)} className='bg-red-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all'> delete</button>
                            <button onClick={() => editeTask(index)} className='bg-green-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition-all'> edite</button>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default Exercise2Page;
