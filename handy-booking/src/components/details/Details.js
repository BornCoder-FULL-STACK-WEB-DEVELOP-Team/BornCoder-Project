import React from "react";
import { GrLocation } from "react-icons/gr";
import { RiCalendarCheckLine } from "react-icons/ri";
import Modal from "react-modal";
import "./Details.css";

class Details extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="task-header">
        <div className="details-panel">
          <div className="step-bar">
            <span className="step-button button-active">open</span>
            <span className="step-button">assigned</span>
            <span className="step-button">completed</span>
          </div>
          <h1 className="panel-title">Resume writing</h1>
          <span>2 hours ago</span>
          <div className="detail-item">
            <img src={require("./sunny.png")} alt="image" id="postman-image" />

            <div className="posted-detail">
              <div className="small-title">posted by</div>
              <a className="user-name">Dee-arana</a>
            </div>
          </div>

          <div className="detail-item">
            <GrLocation size="2em" color="rgb(180,187,215)" />
            <div className="posted-detail">
              <div className="small-title">location</div>
              <a>remote</a>
            </div>
          </div>

          <div className="detail-item">
            <RiCalendarCheckLine color="rgb(180,187,215)" size="2em" />
            <div className="posted-detail">
              <div className="small-title">due date</div>
              <a>Thursday, 25th Jun 2020</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
