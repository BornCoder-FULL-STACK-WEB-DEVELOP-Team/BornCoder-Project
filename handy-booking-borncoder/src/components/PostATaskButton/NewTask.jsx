import React from 'react';
import styles from '../../CSS/newTask.module.css';

class NewTask extends React.Component {
  constructor(props) {
    super(props);
  }

  handlePostTask = (e) => {
    window.location.href="http://localhost:3000/#/PostATask";
  }

  render() {
    return (
      <div className={styles.buttonWrapper}>
        <button className={styles.postATask} onClick={this.handlePostTask}>Post a Task</button>
      </div>
    )
  }
}

export default NewTask;