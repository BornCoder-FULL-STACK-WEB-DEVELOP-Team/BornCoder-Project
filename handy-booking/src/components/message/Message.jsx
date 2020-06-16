import React from "react";
import "./Message.css";

class Message extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <div className="message-title">Ask a question...</div>
        <textarea
          id="message"
          name="message"
          placeholder="Write something.."
        ></textarea>
      </div>
    );
  }
}

export default Message;
