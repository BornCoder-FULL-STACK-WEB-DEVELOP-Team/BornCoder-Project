import React, { useState } from "react";
import "./Price.css";
import Modal from "react-modal";

Modal.setAppElement("#root");
function Price() {
  const [offerIsOpen, setofferIsOpen] = useState(false);
  return (
    <div className="price-card">
      <div className="price-padding">
        <div className="budget-header">task budget</div>
        <div className="task-price">$100</div>
        <button className="offer-button" onClick={() => setofferIsOpen(true)}>
          Make an offer
        </button>
      </div>
      <Modal
        isOpen={offerIsOpen}
        onRequestClose={() => setofferIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "#ccc",
          },
          content: {},
        }}
      >
        <h2>Model title</h2>
        <p>Model body</p>
        <div>
          <button onClick={() => setofferIsOpen(false)}>Close</button>
        </div>
      </Modal>
    </div>
  );
}

export default Price;
