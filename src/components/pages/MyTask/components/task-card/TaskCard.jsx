import React, { useContext, useState, useEffect } from "react";
import axios from "axios";

import styles from "./TaskCard.module.scss";
import { withRouter, Link } from "react-router-dom";
import AuthContext from "../../../../../context/auth/authContext";
import { useHistory } from "react-router-dom";

function TaskCard(props) {
  const [tasks, setTasks] = useState([]);

  const authContext = useContext(AuthContext);

  const { loadUser } = authContext;

  const history = useHistory();

  const onLoadMyTask = async (taskId) => {
    await loadUser();
    history.push(`/my-task/${taskId}`);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8090/tasks/mytasks/` + props.userId)
      .then((tas) => {
        const tasks = tas.data;
        setTasks(tasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {tasks.map((task) => (
          <li key={task.taskId} className={styles.list}>
            <a
              onClick={() => onLoadMyTask(task.taskId)}
              className={styles.item}
            >
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
                  <div className={styles.locationDateText}>{task.openDate}</div>
                </div>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarImg}
                    alt="user_Photo"
                    src={task.user.userPhoto}
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

export default TaskCard;
