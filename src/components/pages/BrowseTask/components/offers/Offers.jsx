import React from "react";
import "./Offers.css";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";

class Offers extends React.Component {
  constructor() {
    super();
    this.state = {
      reply: [],
      newId: 1,
      user: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8090/replies/` + this.props.taskId)
      .then((res) => {
        const reply = res.data;
        this.setState({ reply });
        console.log(reply);
      });
  }

  componentDidUpdate() {
    if (this.props.taskId != this.state.newId) {
      axios
        .get(`http://localhost:8090/replies/` + this.props.taskId)
        .then((res) => {
          const reply = res.data;
          this.setState({ reply });
          console.log(reply);
        });

      this.setState({ newId: this.props.taskId });
    }
  }

  render() {
    let noOffer = null;
    if (this.state.reply.length === 0) {
      noOffer = (
        <img
          src="https://www.airtasker.com/images/waiting-for-offers.png"
          alt="no offer"
        />
      );
    }

    return (
      <div className="repley-display">
        <div className="details-title">Offers</div>
        {noOffer}
        <ul className="ul">
          {this.state.reply.map((reply) => (
            <li key={reply.replyId} className="list">
              <div className="reply-header">
                <img src={reply.userPhoto} alt="image" id="reply-image" />
                <div className="detail-box">
                  <a className="reply-name">{reply.userName}</a>
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
