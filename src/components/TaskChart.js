// src/components/TaskChart.js
import React, { useContext } from 'react';
import { Pie } from 'react-chartjs-2';
import { TaskContext } from '../context/TaskContext';
import Chart from 'chart.js/auto';

const TaskChart = () => {
  const { tasks } = useContext(TaskContext);

  const getTaskCountsByPriority = () => {
    const counts = { HIGH: 0, MEDIUM: 0, LOW: 0 };
    tasks.forEach(task => {
      counts[task.priority] += 1;
    });
    return counts;
  };

  const data = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [{
      label: 'Tasks by Priority',
      data: Object.values(getTaskCountsByPriority()),
      backgroundColor: ['#FF6384', '#FFCE56', '#36A2EB'],
      hoverBackgroundColor: ['#FF6384', '#FFCE56', '#36A2EB']
    }]
  };

  const options = {
    plugins: {
      legend: {
        position: 'left',
        labels: {
          usePointStyle: true,
        }
      }
    }
  };

  return (
    <div className="chart-container">
      <h2>Tasks by Priorities</h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default TaskChart;
