import "./PostButton.css";
import React, { Component } from "react";

export class PostButton extends Component {
  render() {
    return (
      <div>
        <button className="btn btn-danger post-button">Post a task</button>
      </div>
    );
  }
}

export default PostButton;
