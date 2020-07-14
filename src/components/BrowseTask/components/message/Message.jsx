import React from "react";
import axios from "axios";

import styles from './Message.module.scss';

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
    }
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  handleSendMessage() {
    // console.log('click');
    // console.log(this.state.message)
    axios.post(`http://localhost:8090/messages`, {
      action: 'commented on',
      userAvatar: 'https://eu7cmie.cloudimg.io/s/crop/128x128/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/3960175/photo-6dcb921481cf580a8943df2deed10d45.jpg',
      userName: 'Long Z.',
      content: this.state.message,
      taskId: this.props.taskId,
      userId: '1'
    }).then((res) => {
        // console.log(res);
        this.setState({
          message: ''
        })
        alert('Send messge success!')
    });
  }

  handleMessageChange() {
    this.setState({
      message: this.messageValue.value
    })
  }

  render() {
    return (
      <div>
        <div className={styles.messageTitle}>Ask a question...</div>
        <textarea
          ref={el=>this.messageValue=el}
          className={styles.messageContent}
          placeholder="Write something.."
          value={this.state.message}
          onChange={this.handleMessageChange}
        ></textarea>
        <button className={styles.sendBtn} onClick={()=>this.handleSendMessage()}>Send</button>
      </div>
    );
  }
}

export default Message;
