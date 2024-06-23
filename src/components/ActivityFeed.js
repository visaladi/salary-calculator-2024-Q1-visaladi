// src/components/ActivityFeed.js

import React from 'react';

const ActivityFeed = () => {
  // Sample activity data with creator information
  const activities = [
    { 
      id: 1, 
      text: 'Task "Review proposal" completed.', 
      timestamp: '2024-06-23T10:30:00Z',
      creator: {
        name: 'John Doe',
        imageUrl: 'https://via.placeholder.com/40', // Replace with actual image URL
      }
    },
    { 
      id: 2, 
      text: 'Task "Update documentation" started.', 
      timestamp: '2024-06-23T09:15:00Z',
      creator: {
        name: 'Jane Smith',
        imageUrl: 'https://via.placeholder.com/40', // Replace with actual image URL
      }
    },

    { 
      id: 3, 
      text: 'Task "Update react" started.', 
      timestamp: '2024-06-23T09:15:00Z',
      creator: {
        name: 'Jane Smith',
        imageUrl: 'https://via.placeholder.com/40', // Replace with actual image URL
      }
    },
    // Add more activities here as needed
  ];

  return (
    <div className="activity-feed">
      <h2>Activity Feed</h2>
      {activities.map(activity => (
        <div className="activity-item" key={activity.id}>
          <div className="creator-info">
            <img src={activity.creator.imageUrl} alt={activity.creator.name} />
            <p>{activity.creator.name}</p>
          </div>
          <div className="activity-content">
            <p>{activity.text}</p>
          </div>
          <div className="activity-time">
            <p>{new Date(activity.timestamp).toLocaleString()}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
