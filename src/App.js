// src/App.js
import React from 'react';
import TaskProvider from './context/TaskContext';
import TaskList from './components/TaskList';
import ActivityFeed from './components/ActivityFeed';
import AppBar from './components/AppBar';
import AppBarV from './components/AppBarV';
import TaskChart from './components/TaskChart';
import './App.css';

const user = {
  name: "John Doe",
  image: "https://via.placeholder.com/40" // Replace with actual user image
};

const App = () => {
  return (
    <TaskProvider>
      <div className="App">
        <AppBar user={user} />
        <div className="main-container">
          <div className="left-section">
            <TaskList />
          </div>
          <div className="right-section">
            <ActivityFeed />
            <div className="chart-container">
              <TaskChart />
            </div>
          </div>
        </div>
      </div>
    </TaskProvider>
  );
};

export default App;
