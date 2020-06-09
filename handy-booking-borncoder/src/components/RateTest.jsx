import React from 'react';

class RateTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickIndex: 0,
      hoverIndex: 0,
    }
  }

  handleClick = (index) => {
    this.setState({
      clickIndex: index,
    })
  }

  handleOnMouseEnter = (index) => {
    this.setState({
      hoverIndex: index,
    })
  }

  handleOnMouseOut = () => {
    this.setState({
      hoverIndex: 0,
    })
  }

 

  getStar = () => {
    let num = this.state.hoverIndex === 0 ? this.state.clickIndex : this.state.hoverIndex;
    let starContainer = [];
    const arr = [1, 2, 3, 4, 5];
    arr.map((ele, index) => {
      starContainer.push(
        <span
          onClick={this.handleClick.bind(this, ele)}
          onMouseEnter={this.handleOnMouseEnter.bind(this, ele)}
          onMouseOut={this.handleOnMouseOut.bind(this)}
        >
          {ele > num ? "☆" : "★"}
        </span>
      )
    });
    return starContainer;
  }

  render() {
    let starItems = this.getStar();
    return (
        <div>
          {starItems}
        </div>
    )
  }
} 

export default RateTest;