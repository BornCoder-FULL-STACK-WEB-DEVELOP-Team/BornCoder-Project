import React from "react";
import ReactDOM from "react-dom";
import "./browse.css";
import Details from "./components/details/Details";
import Price from "./components/price/Price";
import Descrip from "./components/descrip/Descrip";
import Offers from "./components/offers/Offers";
import Message from "./components/message/Message";
//import Image from "./components/image/Image";
import TaskCard from "./components/task-card/TaskCard";

class BrowseTask extends React.Component {
  constructor() {
    super();

    this.state = {
      taskId: 1,
    };
  }

  changeTaskId = (item) => {
    console.log(item);
    this.setState({ taskId: item });
    console.log("taskID :  " + this.state.taskId);
  };

  render() {
    return (
      <div className="content-layout">
        <div className="content-left">
          <TaskCard getTaskId={this.changeTaskId} />
        </div>

        <div className="content-right">
          <div className="wrap-right">
            <div className="details-layout">
              <Details taskId={this.state.taskId} />
              <Price taskId={this.state.taskId} />
            </div>

            <Descrip taskId={this.state.taskId} />

            <div className="offers-layout">
              <Offers taskId={this.state.taskId} />
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
