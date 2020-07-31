import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { AiFillStar } from "react-icons/ai";
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import {review_image,review_display,review_header,detail_box,star,review_name,review_text,review_score,list,ul} from '../Styles/SimpleTabs.module.scss';
class SimpleTabs extends React.Component {
  constructor() {
    super();
    this.state = {
      review: [],
      task:[],
      user:[],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8090/reviews`).then((res) => {
      const review = res.data;
      this.setState({ review });
      console.log(review);
      // const test = [{ name: "jingshuai", age: "13" }];
      //console.log(task.title);
      
    });
    axios.get(`http://localhost:8090/reviews`).then((res) => {
      const task = res.data;
      this.setState({ task });
      console.log(task);
      // const test = [{ name: "jingshuai", age: "13" }];
      //console.log(task.title);
      
    });
    axios.get(`http://localhost:8090/users`).then((res) => {
      const user = res.data;
      this.setState({ user });
      console.log(user);
      // const test = [{ name: "jingshuai", age: "13" }];
      //console.log(task.title);
      
    });

  }
  render(){
  return (
    <div className="reviews">
      <div className="title">
      REVIEWS
      </div>
      <div className={review_display}>
      <ul className={ul}>
        {this.state.review.map((review) => (
          <li key={review.replyId} className={list}>
            <div className={review_header}>
              <img
                src="https://image.shutterstock.com/image-photo/portrait-surprised-cat-scottish-straight-600w-499196506.jpg"
                alt="image"
                id={review_image}
              />
              <div className={detail_box}>
                <a className={review_name}>alex</a>
                <div className={star}>
                  <AiFillStar color="rgb(233,165,45)" />
                  <AiFillStar color="rgb(233,165,45)" />
                  <AiFillStar color="rgb(233,165,45)" />
                  <AiFillStar color="rgb(233,165,45)" />
                  <AiFillStar color="rgb(233,165,45)" />
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