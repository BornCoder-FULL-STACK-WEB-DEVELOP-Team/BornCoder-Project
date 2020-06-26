import React from "react";
import axios from "axios";

import "./Descrip.css";
class Descrip extends React.Component {
  constructor() {
    super();

    this.state = {
      task: [],
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:8090/tasks/1`).then((res) => {
      const task = res.data;
      this.setState({ task });
      //console.log(task);
      // const test = [{ name: "jingshuai", age: "13" }];
      //console.log(task.title);
    });
  }

  render() {
    return (
      <div>
        <div className="details-title">Details</div>
        <div className="details-descriptions">
          {this.state.task.description}
        </div>
      </div>
    );
  }
}

export default Descrip;
