import React from "react";
import axios from "axios";

import "./Descrip.css";
class Descrip extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { task } = this.props;
    return (
      <div>
        <div className="details-title">Details</div>
        <div className="details-descriptions">{task.description}</div>
      </div>
    );
  }
}

export default Descrip;
