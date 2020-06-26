import React from "react";
import { GrLocation } from "react-icons/gr";
import { RiCalendarCheckLine } from "react-icons/ri";
import "./Details.css";
import axios from "axios";

class Details extends React.Component {
  constructor() {
    super();

    //this.buttonStyle = "step-button";

    this.state = {
      task: [],
      assignedStyle: "step-button",
      completedStyle: "step-button",
      imgPath: "sunny",
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8090/tasks/1`).then((res) => {
      const task = res.data;
      this.setState({ task });
      console.log(task);
      // const test = [{ name: "jingshuai", age: "13" }];
      //console.log(task.title);
      if (this.state.task.arranged == true) {
        this.setState({ assignedStyle: "step-button assigned-active" });
      }
      if (this.state.task.completed == true) {
        this.setState({ completedStyle: "step-button completed-active" });
      }

      this.setState({ imgPath: this.state.task.userPhoto });
      console.log("imagepath   " + this.state.imgPath);

      //this.path.concat("../imageFolder/", this.state.imgPath, ".jpg");
    });
  }

  render() {
    //const path = "../imageFolder/" + this.state.imgPath + ".png";
    const path = "./sunny.png";
    console.log(path);

    return (
      <div className="task-header">
        <div className="details-panel">
          <div className="step-bar">
            <span className="step-button button-active">open</span>
            <span className={this.state.assignedStyle}>assigned</span>
            <span className={this.state.completedStyle}>completed</span>
          </div>
          <h1 className="panel-title">{this.state.task.title}</h1>
          <span>{this.state.task.openDate}</span>
          <div className="detail-item">
            <img src={require(`${path}`)} alt="image" id="postman-image" />

            <div className="posted-detail">
              <div className="small-title">posted by</div>
              <a className="user-name">{this.state.task.userName}</a>
            </div>
          </div>

          <div className="detail-item">
            <GrLocation size="2em" color="rgb(180,187,215)" />
            <div className="posted-detail">
              <div className="small-title">location</div>
              <a>{this.state.task.taskLocation}</a>
            </div>
          </div>

          <div className="detail-item">
            <RiCalendarCheckLine color="rgb(180,187,215)" size="2em" />
            <div className="posted-detail">
              <div className="small-title">due date</div>
              <a>{this.state.task.taskDate}</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
