import React from "react";
import TaskItem from "./TaskItem";
import "./TaskItem.scss";

const TaskList = () => {
  const tasks = [
    { iconName: "fas fa-snowflake fa-2x", title: "Home Cleaning" },
    { iconName: "fas fa-home fa-2x", title: "Furniture Assembly" },
    { iconName: "fas fa-home fa-2x", title: "Gardening" },
    { iconName: "fas fa-gavel fa-2x", title: "Handyman" },
    { iconName: "fas fa-truck fa-2x", title: "Removals" },
    { iconName: "fas fa-dolly fa-2x", title: "Removals" },
  ];
  const taskList = tasks.map((task) => <TaskItem task={task}></TaskItem>);

  return <div className="taskList-container">{taskList}</div>;
};

export default TaskList;
