import React, { Component } from 'react';
import { Link } from 'react-router';

// 未完成 -- 勿用

class TabController extends Component {
  constructor(props) {
    this.state = {
      current: 0,
    };
  }

  itemNav = (index) => {
    return index === this.state.current? 'item-tittle active' : 'item-tittle';
  }

  itemCon = (index) => {
    return index === this.state.current? 'con active':'con';
  }

  render() {
    return (
      
    )
  }

}