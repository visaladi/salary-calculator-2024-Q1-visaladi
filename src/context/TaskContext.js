// src/context/TaskContext.js
import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const updateTaskStatus = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: true } : task
    ));
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, updateTaskStatus }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
