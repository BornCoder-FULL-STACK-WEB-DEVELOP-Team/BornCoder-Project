import React from 'react';

import styles from './TaskCard.module.scss';

class TaskCard extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { task } = this.props;
    return (
      <div className={styles.container}>
        <a href={`/tasks/${task.id}`} className={styles.item}>
          <div className={styles.header}>
            <span className={styles.title}>{task.title}</span>
            <div className={styles.price}>
              <span>${task.price}</span>
            </div>
          </div>

          <div className={styles.body}>
            <div className={styles.bodyLeft}>
              <div className={styles.locationDateText}>{task.location}</div>
              <div className={styles.locationDateText}>{task.date}</div>
            </div>
            <div className={styles.avatar}>
              <img className={styles.avatarImg} alt="" src={task.avatar}></img>
            </div>
          </div>

          <div className={styles.footer}>
            <span className={styles.status}>{task.status}</span>
          </div>
        </a>
      </div>
    )
  }
}

export default TaskCard;