import React from "react";
import "./Offers.css";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";

class Offers extends React.Component {
  constructor() {
    super();
    this.state = {
      reply: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8090/replies`).then((res) => {
      const reply = res.data;
      this.setState({ reply });
      console.log(reply);
      // const test = [{ name: "jingshuai", age: "13" }];
      //console.log(task.title);
    });
  }

  render() {
    return (
      <div className="repley-display">
        <ul className="ul">
          {this.state.reply.map((reply) => (
            <li key={reply.replyId} className="list">
              <div className="reply-header">
                <img
                  src={require("./summer.jpg")}
                  alt="image"
                  id="reply-image"
                />
                <div className="detail-box">
                  <a className="reply-name">Anthony H</a>
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
              <div className="reply-text">{reply.description}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Offers;
