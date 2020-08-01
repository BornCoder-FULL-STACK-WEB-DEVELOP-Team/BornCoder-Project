import React from "react";
import "./Offers.css";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";

class Receives extends React.Component {
  constructor() {
    super();
    this.state = {
      reply: [],
      newId: 1,
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8090/messages/task/1`).then((res) => {
      const reply = res.data;
      this.setState({ reply });
      console.log(reply);
      // const test = [{ name: "jingshuai", age: "13" }];
      //console.log(task.title);
    });
  }

  componentDidUpdate() {
    if (this.props.task.taskId != this.state.newId) {
      axios
        .get(`http://localhost:8090/messages/task/` + this.props.task.taskId)
        .then((res) => {
          const reply = res.data;
          this.setState({ reply });
          // console.log(task);
        });

      this.setState({ newId: this.props.task.taskId });
    }
  }

  render() {
    console.log(this.props.task.taskId);
    let noMessage = null;
    if (this.state.reply.length === 0) {
      noMessage = (
        <p className="noMessage">
          Currently, there is no message for this task.
        </p>
      );
    }
    return (
      <div className="repley-display">
        <div className="details-title">Messages</div>
        {noMessage}
        <ul className="ul">
          {this.state.reply.map((reply) => (
            <li key={reply.messageId} className="list">
              <div className="reply-header">
                <img src={reply.user.userPhoto} alt="image" id="reply-image" />
                <div className="detail-box">
                  <a className="reply-name">{reply.user.userName}</a>
                  <div className="star">
                    <AiFillStar color="rgb(233,165,45)" />
                    <AiFillStar color="rgb(233,165,45)" />
                    <AiFillStar color="rgb(233,165,45)" />
                    <AiFillStar color="rgb(233,165,45)" />
                    <AiFillStar color="rgb(233,165,45)" />
                    <div className="reply-score">4.9</div>
                  </div>
                  <div className="complete-rate">100% completed rate</div>
                </div>
              </div>
              <div className="reply-text">{reply.content}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Receives;
