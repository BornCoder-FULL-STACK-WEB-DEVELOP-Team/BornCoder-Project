import React from "react";
import axios from "axios";

import styles from "./TaskCard.module.scss";

class TaskCard extends React.Component {
  constructor() {
    super();
    this.state = {
      tasks: [],
      id: null,
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8090/tasks`).then((tas) => {
      const tasks = tas.data;
      this.setState({
        tasks,
      });
    });
  }

  handleClick = (taskId) => {
    const id = taskId;
    this.setState({ id });
    console.log(id);
  };

  render() {
    return (
      <div className={styles.container}>
        <ul className={styles.ul}>
          {this.state.tasks.map((task) => (
            <li key={task.taskId} className={styles.list}>
              <a href={`/browse-tasks/${task.taskId}`} className={styles.item}>
                <div className={styles.header}>
                  <span className={styles.title}>{task.title}</span>
                  <div className={styles.price}>
                    <span>${task.price}</span>
                  </div>
                </div>

                <div className={styles.body}>
                  <div className={styles.bodyLeft}>
                    <div className={styles.locationDateText}>
                      {task.taskLocation}
                    </div>
                    <div className={styles.locationDateText}>
                      {task.openDate}
                    </div>
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
                  <span className={styles.status}>open</span>
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
