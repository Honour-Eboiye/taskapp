import React from 'react';

export const Completed = ({ task, index, toggleTaskStatus }) => {
  return (
    <div className="flex items-center p-2 bg-black text-white border-b border-gray-700">
      <input
        type="checkbox"
        checked
        onChange={() => toggleTaskStatus(index)}
        className="mr-2"
      />
      <label className="flex-grow">{task.name}</label>
      <span className="text-gray-400 text-sm">Today</span>
    </div>
  );
};
