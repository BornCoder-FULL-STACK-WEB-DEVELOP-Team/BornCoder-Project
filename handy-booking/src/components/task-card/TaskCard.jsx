import React from "react";
import axios from "axios";

import styles from "./TaskCard.module.scss";

class TaskCard extends React.Component {
  constructor() {
    super();
    this.state = {
      task: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8090/tasks`).then((tas) => {
      const task = tas.data;
      this.setState({ task });
      console.log(task);
      // const test = [{ name: "jingshuai", age: "13" }];
      //console.log(task.title);
    });
  }

  render() {
    return (
      <div className={styles.container}>
        <ul className={styles.ul}>
          {this.state.task.map((task) => (
            <li key={task.taskId} className={styles.list}>
              <a href="" className={styles.item}>
                <div className={styles.header}>
                  <span className={styles.title}>title</span>
                  <div className={styles.price}>
                    <span>price</span>
                  </div>
                </div>

                <div className={styles.body}>
                  <div className={styles.bodyLeft}>
                    <div className={styles.locationDateText}>location</div>
                    <div className={styles.locationDateText}>date</div>
                  </div>
                  <div className={styles.avatar}>
                    <img
                      className={styles.avatarImg}
                      alt=""
                      src={require("./sunny.png")}
                    ></img>
                  </div>
                </div>

                <div className={styles.footer}>
                  <span className={styles.status}>status</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TaskCard;
