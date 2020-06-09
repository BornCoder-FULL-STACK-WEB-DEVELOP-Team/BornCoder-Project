import React from 'react';
import RateTest from './RateTest';
import '../CSS/ReviewTask.css';

class ReviewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // rating: 1,
      ReviewDescription: "Please write comments to your tasker!",
    }
  }

  handleSubmitClick = (event) => {
    event.preventDefault();
    console.log(this.state.clickIndex);
    // 后面需要用Redux/context记录评价状态以调取RateTest.state中的评分。
    alert('Your task is done, we received' + this.rating + 'for your tasker!')
  }

  // handleResetClick = (event) => {
  //   this.setState({
  //     rating: 0,
  //     ReviewDescription: "Please review your tasker!"
  //   })
  //   alert('Reset Successful!');
  // }

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value
    this.setState({
      [name]: value,
    })
  }

  render() {
    return(
      <div className="container">
        <div className="cardName">Review Task</div>
          <div className="reviewBlock">
            <span className="reviewTitle">Rate the tasker : </span>
            <span className="reviewEntity"><RateTest /></span>
          </div>
          <textarea className="reviewDescription" name="ReviewDescription" value={this.state.ReviewDescription} onChange={this.handleInputChange} />
          {/* <input className="reset" type="reset" onClick={this.handleResetClick} value="Reset" /> */}
          <input className="reviewSubmit" type="submit" value="Give Review" />
      </div>
    )
  }
}

export default ReviewTask;