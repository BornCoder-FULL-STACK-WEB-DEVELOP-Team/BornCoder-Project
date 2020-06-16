import React from "react";

import "./Descrip.css";
class Descrip extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="details-title">Details</div>
        <div className="details-descriptions">
          I need to have my resume re-written to sound professional. Right now
          my resume is very dated.
        </div>
      </div>
    );
  }
}

export default Descrip;
