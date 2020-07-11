import React from 'react';
import axios from 'axios';

import AccountMenu from './components/account-menu/AccountMenu';
import styles from './Notifications.module.scss';

class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messagesData: [],
    }
  }
  componentDidMount() {
    axios.get(`http://localhost:8090/messages/user/1`).then((res) => {
      const result = res.data;
      // console.log(result);
      this.setState({
        messagesData: result
      })
    })

  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <AccountMenu />
          </div>
          <div className={styles.rightSide}>
            <div className={styles.notificationWrapper}>
              <div className={styles.messageTitle}>Keep up to date with your tasks</div>
              {
                this.state.messagesData.map((message) => (
                  <div key={message.messageId} className={styles.messageContainer}>
                    <div className={styles.messageInfo}>
                      <img className={styles.userAvatar} src={message.userAvatar} alt="" />
                      <span className={styles.userName}>{message.userName}</span>
                      <span className={styles.userAction}>{message.action}</span>
                      <a href={`/browse-task/${message.task.taskId}`} className={styles.messageTask}>{message.task.title}</a>
                    </div>
                    <span className={styles.messageTime}>{message.messageDate}</span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Notifications;