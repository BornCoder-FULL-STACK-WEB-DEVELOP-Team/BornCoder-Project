import React, { useState, useEffect } from "react";
import "./Offers.css";
import { AiFillStar } from "react-icons/ai";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function Review(props) {
  const [reply, setReply] = useState([]);

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8090/replies/accept/` + props.taskId)
      .then((res) => {
        // console.log(res);
        setReply(res.data);
        //console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);

  const handleAccept = () => {};

  return (
    <div className="repley-display">
      <ul className="ul">
        <li key={reply.replyId} className="list">
          <div className="reply-header">
            <img src={require("./summer.jpg")} alt="image" id="reply-image" />
            <div className="detail-box">
              <a className="reply-name">Anthony H</a>
              <div className="star">
                <AiFillStar color="rgb(233,165,45)" />
                <AiFillStar color="rgb(233,165,45)" />
                <AiFillStar color="rgb(233,165,45)" />
                <AiFillStar color="rgb(233,165,45)" />
                <AiFillStar color="rgb(233,165,45)" />
                <div className="reply-score">4.9</div>
              </div>
              <div className="complete-rate">100% completed rate</div>
            </div>

            <div className="offer-box">
              <button className="accept-button disabled" disabled="disabled">
                Accepted
              </button>
            </div>
          </div>

          <div className="reply-text">{reply.description}</div>

          <div className="offer-box">
            <button className="accept-button review" onClick={handleClickOpen}>
              Make an Review
            </button>
          </div>
        </li>
      </ul>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Choose an rating</DialogTitle>
        <DialogContent>
          <DialogContentText>You should offer</DialogContentText>
          <DialogTitle>$100</DialogTitle>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary">Confirm</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Review;
