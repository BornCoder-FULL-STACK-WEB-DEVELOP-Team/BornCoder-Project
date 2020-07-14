import React from "react";
import "./mytask.css";
import Details from "./components/details/Details";
import Price from "./components/price/Price";
import Descrip from "./components/descrip/Descrip";
import Offers from "./components/offers/Offers";
import TaskCard from "./components/task-card/TaskCard";
import axios from "axios";
import Review from "./components/review/Review";

class MyTask extends React.Component {
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
    const review = this.state.task.arranged;
    let reply;
    if (review) {
      reply = <Review taskId={this.state.taskId} task={this.state.task} />;
    } else {
      reply = <Offers taskId={this.state.taskId} task={this.state.task} />;
    }

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
              {reply}
              {/* <Offers taskId={this.state.taskId} task={this.state.task} /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyTask;
