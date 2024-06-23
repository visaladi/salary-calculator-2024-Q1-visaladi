// src/components/Task.js
import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import bellIcon from '../assets/bell-icon.gif'; // Assume you have a bell icon image in the assets folder

const Task = ({ task }) => {
  const { updateTaskStatus } = useContext(TaskContext);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'HIGH':
        return 'red';
      case 'MEDIUM':
        return 'yellow';
      case 'LOW':
        return 'blue';
      default:
        return 'gray';
    }
  };

  return (
    <div className="task" style={{ borderLeft: `5px solid ${getPriorityColor(task.priority)}` }}>
      <div className="task-content">
        <h3>{task.name}</h3>
        <p>{task.todo}</p>
        <p>Priority: {task.priority}</p>
      </div>
      <div className="task-buttons">
        <button onClick={() => updateTaskStatus(task.id)} style={{ color: task.completed ? 'green' : 'yellow' }}>
          {task.completed ? 'Done' : 'In Progress'}
        </button>
        <button className="notify-button">
          <img src={bellIcon} alt="Notify" />
        </button>
      </div>
    </div>
  );
};

export default Task;
