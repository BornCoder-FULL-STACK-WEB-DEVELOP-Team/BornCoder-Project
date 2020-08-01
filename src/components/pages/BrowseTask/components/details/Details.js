import React from "react";
import { GrLocation } from "react-icons/gr";
import { RiCalendarCheckLine } from "react-icons/ri";
import "./Details.css";
import axios from "axios";

class Details extends React.Component {
  constructor() {
    super();

    //this.buttonStyle = "step-button";
  }

  render() {
    const { task } = this.props;
    let assignedStyle = "step-button";
    let completedStyle = "step-button";
    if (task.arranged === true) {
      assignedStyle = "step-button assigned-active";
    }
    if (task.completed === true) {
      completedStyle = "step-button completed-active";
    }

    return (
      <div className="task-header">
        <div className="details-panel">
          <div className="step-bar">
            <span className="step-button button-active">open</span>
            <span className={assignedStyle}>assigned</span>
            <span className={completedStyle}>completed</span>
          </div>
          <h1 className="panel-title">{task.title}</h1>
          <span>{task.openDate}</span>
          <div className="detail-item">
            <img src={task.userPhoto} alt="image" id="postman-image" />

            <div className="posted-detail">
              <div className="small-title">posted by</div>
              <a className="user-name">{task.userName}</a>
            </div>
          </div>

          <div className="detail-item">
            <GrLocation size="2em" color="rgb(180,187,215)" />
            <div className="posted-detail">
              <div className="small-title">location</div>
              <a>{task.taskLocation}</a>
            </div>
          </div>

          <div className="detail-item">
            <RiCalendarCheckLine color="rgb(180,187,215)" size="2em" />
            <div className="posted-detail">
              <div className="small-title">due date</div>
              <a>{task.taskDate}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
