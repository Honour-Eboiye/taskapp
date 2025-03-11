import React from 'react';

export const Ongoing = ({ task, index, toggleTaskStatus }) => {
  return (
    <div className="flex items-center p-2 bg-white text-black border-b border-gray-200">
      <input
        type="checkbox"
        onChange={() => toggleTaskStatus(index)}
        className="mr-2"
      />
      <label className="flex-grow">{task.name}</label>
      <span className="text-gray-500 text-sm">Today</span>
    </div>
  );
};
