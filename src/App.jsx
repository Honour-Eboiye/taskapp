import './App.css';
import { Ongoing } from './components/Ongoing';
import { Completed } from './components/Completed';
import AddTask from './components/AddTask';
import React, { useState, useEffect } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);

  // Load tasks from localStorage on initialization
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, running: true }]);
  };

  const toggleTaskStatus = (index) => {
    const newTasks = [...tasks];
    newTasks[index].running = !newTasks[index].running;
    setTasks(newTasks);
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <AddTask addTask={addTask} />
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4">Ongoing</h1>
        {tasks.filter(task => task.running).map((task) => (
          <Ongoing
            key={task.name}
            task={task}
            index={tasks.findIndex(t => t.name === task.name)}
            toggleTaskStatus={toggleTaskStatus}
          />
        ))}
      </div>
      <div className="mt-8">
        <h1 className="text-2xl font-bold mb-4">Completed</h1>
        {tasks.filter(task => !task.running).map((task) => (
          <Completed
            key={task.name}
            task={task}
            index={tasks.findIndex(t => t.name === task.name)}
            toggleTaskStatus={toggleTaskStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
