import React from 'react';
import './TaskItem.scss';

const TaskItem = ({ task }) => {
  return (
    <div className="taskItem-container">
      <div className="taskItem-circle">
        <i className={task.iconName}></i>
      </div>
      <div className="taskItem-title">
        <span>{task.title}</span>
      </div>
    </div>
  );
};

export default TaskItem;
