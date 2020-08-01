import React from "react";
import "./browse.css";
import Details from "./components/details/Details";
import Price from "./components/price/Price";
import Descrip from "./components/descrip/Descrip";
import Offers from "./components/offers/Offers";
import Message from "./components/message/Message";
import Receive from "./components/Receive/Receive";
import TaskCard from "./components/task-card/TaskCard";
import axios from "axios";

class BrowseTask extends React.Component {
  constructor() {
    super();

    this.state = {
      task: [],
      reply: [],
      taskId: 1,
      newId: 1,
      firstBrowse: true,
    };
  }

  componentDidMount() {
    try {
      const paramValue = this.props.match.params.id;
      if (paramValue) {
        this.setState({
          taskId: parseInt(paramValue),
        });
      }
    } catch (error) {
      console.log(error);
    }

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
        });

      this.setState({ newId: this.state.taskId });
    }
  }

  render() {
    console.log(this.state.task);
    return (
      <div className="content-layout">
        <div className="content-left">
          <TaskCard />
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
              <Receive taskId={this.state.taskId} task={this.state.task} />
            </div>

            <div className="offers-layout">
              <Message taskId={this.state.taskId} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BrowseTask;
