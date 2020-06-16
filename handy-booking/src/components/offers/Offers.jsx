import React from "react";
import "./Offers.css";
import { AiFillStar } from "react-icons/ai";

class Offers extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="repley-display">
        <div className="reply-header">
          <img src={require("./summer.jpg")} alt="image" id="reply-image" />
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
        <div className="reply-text">
          I am an experienced property maintenance company owner. I have been in
          the business nearly 10 years. Have all necessary tools equipment and
          vehicle to get YOUR job completed to YOUR SATISFACTION All my quotes
          include all labour costs and additional fees. No hidden extras
        </div>
      </div>
    );
  }
}

export default Offers;
