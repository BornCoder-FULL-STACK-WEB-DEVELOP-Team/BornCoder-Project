import React, { useState, useEffect } from "react";
import "./mytask.css";
import Details from "./components/details/Details";
import Price from "./components/price/Price";
import Descrip from "./components/descrip/Descrip";
import Offers from "./components/offers/Offers";
import TaskCard from "./components/task-card/TaskCard";
import axios from "axios";
import Review from "./components/review/Review";
import Receive from "./components/Receive/Receive";

function MyTaskContent(props) {
  const [task, setTask] = useState([]);

  let Id = 0;
  let detail;
  useEffect(() => {
    if (window.location.pathname.split("/")[2]) {
      Id = window.location.pathname.split("/")[2];
    }
    axios
      .get(`http://localhost:8090/tasks/` + Id)
      .then((res) => {
        setTask(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [window.location.pathname]);

  const review = task.arranged;
  let reply;
  if (review) {
    reply = <Review task={task} />;
  } else {
    reply = <Offers task={task} />;
  }

  if (Id === 0) {
    detail = <div>Click TaskCard to see details</div>;
  } else {
    detail = null;
  }

  return (
    <div className="content-layout">
      <div className="content-left">
        <TaskCard userId={props.userId} />
      </div>

      <div className="content-right">
        {detail}
        <div className="wrap-right">
          <div className="details-layout">
            <Details task={task} />
            <Price task={task} />
          </div>

          <Descrip task={task} />

          <div className="offers-layout">
            <Receive task={task} />
            {reply}
            {/* <Offers taskId={this.state.taskId} task={this.state.task} /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTaskContent;
