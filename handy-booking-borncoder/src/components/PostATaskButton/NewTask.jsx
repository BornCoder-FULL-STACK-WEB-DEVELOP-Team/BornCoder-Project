import React from 'react';
import styles from '../../CSS/newTask.module.css';

class NewTask extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePostTask = (e) => {
    window.location.href="http://localhost:3000/#/PostATask";
  }

  handleReviewTask = (e) => {
    window.location.href="http://localhost:3000/#/ReviewTask";
  }

  render() {
    return (
      <div className={styles.buttonWrapper}>
        <button className={styles.postATask} onClick={this.handlePostTask}>Post a Task</button>
        <button className={styles.postATask} onClick={this.handleReviewTask}>Review Task</button>
      </div>
    )
  }
}

export default NewTask;