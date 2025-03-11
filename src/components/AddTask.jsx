import React, { useRef } from 'react';

const AddTask = ({ addTask }) => {
  const taskinputRef = useRef();

  const EventHandling = () => {
    let taskInput = taskinputRef.current.value.trim();
    if (taskInput) {
      addTask(taskInput);
      taskinputRef.current.value = '';
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        id="tsk"
        ref={taskinputRef}
        className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 sm:mb-0 sm:mr-2"
        placeholder="Add a new task"
      />
      <button
        onClick={EventHandling}
        id="add-btn"
        className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
