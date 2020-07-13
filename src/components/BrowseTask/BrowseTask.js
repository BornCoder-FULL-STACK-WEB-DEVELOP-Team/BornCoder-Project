import React from "react";
import ReactDOM from "react-dom";
import "./browse.css";
import Details from "./components/details/Details";
import Price from "./components/price/Price";
import Descrip from "./components/descrip/Descrip";
import Offers from "./components/offers/Offers";
import Message from "./components/message/Message";
import TaskCard from "./components/task-card/TaskCard";
import axios from "axios";

class BrowseTask extends React.Component {
  constructor() {
    super();

    this.state = {
      task: [],
      taskId: 1,
      newId: 1,
    };
  }

  changeTaskId = (item) => {
    console.log(item);
    this.setState({ taskId: item });
    console.log("taskID :  " + this.state.taskId);
  };

  componentDidMount() {
    axios
      .get(`http://localhost:8090/tasks/` + this.state.taskId)
      .then((res) => {
        const task = res.data;
        this.setState({ task });
        console.log(task);
      });
  }

  componentDidUpdate() {
    if (this.state.taskId != this.state.newId) {
      axios
        .get(`http://localhost:8090/tasks/` + this.state.taskId)
        .then((res) => {
          const task = res.data;
          this.setState({ task });
          console.log(task);
        });

      this.setState({ newId: this.state.taskId });
    }
  }

  render() {
    return (
      <div className="content-layout">
        <div className="content-left">
          <TaskCard getTaskId={this.changeTaskId} />
        </div>

        <div className="content-right">
          <div className="wrap-right">
            <div className="details-layout">
              <Details taskId={this.state.taskId} task={this.state.task} />
              <Price taskId={this.state.taskId} task={this.state.task} />
            </div>

            <Descrip taskId={this.state.taskId} task={this.state.task} />

            <div className="offers-layout">
              <Offers taskId={this.state.taskId} task={this.state.task} />
            </div>

            <div className="offers-layout">
              <Message />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BrowseTask;
