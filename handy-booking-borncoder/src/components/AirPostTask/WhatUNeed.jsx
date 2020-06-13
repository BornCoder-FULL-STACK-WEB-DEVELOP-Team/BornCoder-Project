import React from 'react';
import styles from './css/WhatUNeed.module.css';

class WhatUNeed extends React.Component {
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
          <div className={styles.partOne}>
            <div className={styles.titleWrapper}>
              <span className={styles.partOne__Title}>Tell us what you need done?</span>
              <button className={styles.closeButton} type="button">X</button>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.progressContainer}>
                <div className={styles.progressFiller}></div>
              </div>
            </div>
            {/* what do you need done? */}
            <div className={styles.taskTitle}>
              <span className={styles.questionTitle}>What do you need done?</span>
              <div className={styles.questionOne__title}>
                <p className={styles.questionTips}>This'll be the title of your task - e.g. Help move my sofa</p>
              </div>
              <div className={styles.answerOne__wrapper}>
                <input className={styles.taskTitleInput} value={this.state.taskTitle} />
              </div>
            </div>
            {/* what are the details? */}
            <div className={styles.taskDetail}>
              <span className={styles.questionTitle}>What are the details?</span>
              <div className={styles.questionTwo__title}>
                <p className={styles.questionTips}>Be as specific as you can about what needs doing</p>
              </div>
              <div className={styles.answerTwo__wrapper}>
                <textarea className={styles.taskDetailInput} value={this.state.description} />
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

export default WhatUNeed;