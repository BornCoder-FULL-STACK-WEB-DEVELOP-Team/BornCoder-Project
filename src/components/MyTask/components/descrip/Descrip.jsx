import React from "react";
import axios from "axios";

import "./Descrip.css";
class Descrip extends React.Component {
  constructor() {
    super();

    this.state = {
      task: [],
      newId: 1,
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

  componentDidUpdate() {
    if (this.props.taskId != this.state.newId) {
      axios
        .get(`http://localhost:8090/tasks/` + this.props.taskId)
        .then((res) => {
          const task = res.data;
          this.setState({ task });
          // console.log(task);
        });

      this.setState({ newId: this.props.taskId });
    }
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
