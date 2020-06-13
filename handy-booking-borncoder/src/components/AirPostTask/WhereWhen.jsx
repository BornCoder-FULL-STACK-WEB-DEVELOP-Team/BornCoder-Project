import React from 'react';
import styles from './css/WhereWhen.module.css';

class WhereWhen extends React.Component {
  constructor(props){
    super(props)
    this.state={
      taskTitle: "",
      description: "",
    }
  }

  render() {
    return(
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.partTwo}>
            <div className={styles.titleWrapper}>
              <span className={styles.partTwo__Title}>Say Where &amp; When?</span>
              <button className={styles.closeButton} type="button">X</button>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progressContainer}>
                <div className={styles.progressFiller}></div>
              </div>
            </div>
            {/* what do you need done? */}
            <div className={styles.taskTitle}>
              <span className={styles.questionTitle}>Where do you need it?</span>
            </div>
            <div className={styles.inPersonOp}>
              <div className={styles.optionLabel}>
                <input type="radio" />
              </div>
            </div>
            <div className={styles.onlineOp}>
              <div className={styles.optionLabel}>
                <input type="radio" />
              </div>
            </div>
            <div className={styles.partOneButton}>
              <button className={styles.nextButton} type="button">Next</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default WhereWhen;