import React from "react";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import {
  review_image,
  review_display,
  review_header,
  detail_box,
  star,
  review_name,
  review_text,
  review_score,
  list,
  ul,
} from "../Styles/SimpleTabs.module.scss";
class SimpleTabs extends React.Component {
  constructor(props) {
    super();
    this.state = {
      review: [],
      task: [],
      user: [],
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:8090/reviews/` + this.props.userId)
      .then((res) => {
        const review = res.data;
        this.setState({ review });
        console.log(review);
      });
  }

  handleStar = (count) => {
    let star = <AiFillStar color="rgb(233,165,45)" />;
    let rateStar = [];
    for (let i = 0; i < count; i++) {
      rateStar.push(star);
    }
    return rateStar;
  };

  render() {
    return (
      <div className="reviews">
        <div className="title">REVIEWS</div>
        <div className={review_display}>
          <ul className={ul}>
            {this.state.review.map((review) => (
              <li key={review.reviewId} className={list}>
                <div className={review_header}>
                  <img src={review.userPhoto} alt="image" id={review_image} />
                  <div className={detail_box}>
                    <a className={review_name}>{review.username}</a>
                    <div className={star}>
                      {this.handleStar(review.rating)}
                      <div className={review_score}>{review.rating}</div>
                    </div>
                  </div>
                </div>
                <div className={review_text}>{review.description}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default SimpleTabs;
