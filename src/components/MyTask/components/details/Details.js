import React from "react";
import { GrLocation } from "react-icons/gr";
import { RiCalendarCheckLine } from "react-icons/ri";
import "./Details.css";

class Details extends React.Component {
  constructor() {
    super();

    this.state = {
      assignedStyle: "step-button",
      completedStyle: "step-button",
      imgPath: "sunny",
    };
  }

  render() {
    const { task } = this.props;
    const path = "./sunny.png";

    return (
      <div className="task-header">
        <div className="details-panel">
          <div className="step-bar">
            <span className="step-button button-active">open</span>
            <span className={this.state.assignedStyle}>assigned</span>
            <span className={this.state.completedStyle}>completed</span>
          </div>
          <h1 className="panel-title">{task.title}</h1>
          <span>{task.openDate}</span>
          <div className="detail-item">
            <img src={require(`${path}`)} alt="image" id="postman-image" />

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
