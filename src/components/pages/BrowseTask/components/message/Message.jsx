import React from "react";
import axios from "axios";

import styles from "./Message.module.scss";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  handleSendMessage() {
    if (this.state.message.length < 10) {
      alert("The input value should at least 10 characters");
    } else {
      axios
        .post(`http://localhost:8090/messages`, {
          action: "commented on",
          content: this.state.message,
          taskId: this.props.taskId,
          userId: "1",
        })
        .then((res) => {
          // console.log(res);
          this.setState({
            message: "",
          });
          alert("Send messge success!");
          window.location.reload(false);
        });
    }
  }

  handleMessageChange() {
    this.setState({
      message: this.messageValue.value,
    });
  }

  render() {
    return (
      <div>
        <div className={styles.messageTitle}>Ask a question...</div>
        <textarea
          ref={(el) => (this.messageValue = el)}
          className={styles.messageContent}
          placeholder="Write something.."
          value={this.state.message}
          onChange={this.handleMessageChange}
        ></textarea>
        <button
          className={styles.sendBtn}
          onClick={() => this.handleSendMessage()}
        >
          Send
        </button>
      </div>
    );
  }
}

export default Message;
