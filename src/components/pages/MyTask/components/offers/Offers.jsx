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

function Offers(props) {
  const [reply, setReply] = useState([]);

  const [open, setOpen] = useState(false);
  const [replyId, setReplyId] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = (replyId) => {
    setOpen(true);
    setReplyId(replyId);
    console.log(replyId);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8090/replies/` + props.taskId)
      .then((res) => {
        // console.log(res);
        setReply(res.data);
        //console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);

  const putArranged = {
    taskId: props.taskId,
    replyId: replyId,
    arranged: true,
    completed: false,
  };

  const putAccepted = {
    replyId: replyId,
    accepted: true,
  };

  const handlePutReply = () => {
    axios
      .put(`http://localhost:8090/replies/accepted`, putAccepted)
      .then((res) => {
        // console.log(putAccepted);
      });
  };

  const handlePutTask = () => {
    axios.put(`http://localhost:8090/tasks`, putArranged).then((res) => {
      // console.log(sendOffer);
    });
  };

  const handlePutData = () => {
    handlePutReply();
    handlePutTask();
    setOpen(false);
    window.location.reload(false);
  };

  let noOffer = null;
  if (reply.length === 0) {
    noOffer = (
      <img
        src="https://www.airtasker.com/images/waiting-for-offers.png"
        alt="no offer"
      />
    );
  }

  return (
    <div className="repley-display">
      <div className="details-title">Offers</div>
      {noOffer}
      <ul className="ul">
        {reply.map((reply) => (
          <li key={reply.replyId} className="list">
            <div className="reply-header">
              <img src={reply.userPhoto} alt="image" id="reply-image" />
              <div className="detail-box">
                <a className="reply-name">{reply.userName}</a>
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
                <button
                  className="accept-button"
                  onClick={() => handleClickOpen(reply.replyId)}
                >
                  Accept
                </button>
              </div>
            </div>
            <div className="reply-text">{reply.description}</div>
          </li>
        ))}
      </ul>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          Do you want to accept the offer?
        </DialogTitle>
        <DialogContent>
          <DialogContentText>You should offer</DialogContentText>
          <DialogTitle>$100</DialogTitle>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handlePutData} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Offers;
