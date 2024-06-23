// src/components/ActivityItem.js
import React from 'react';

const ActivityItem = ({ activity }) => {
  return (
    <div className="activity-item">
      <div className="creator-info">
        <img src={activity.creator.imageUrl} alt={activity.creator.name} />
        <div className="activity-details">
          <p>{activity.creator.name}</p>
          <p>{`Task "${activity.task}" completed.`}</p>
          <p>{`${new Date(activity.timestamp).toLocaleDateString()}, ${new Date(activity.timestamp).toLocaleTimeString()}`}</p>
        </div>
      </div>
      <div className="activity-content">
        <p>{activity.description}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
