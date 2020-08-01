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
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function Review(props) {
  const [reply, setReply] = useState([]);

  const [open, setOpen] = useState(false);

  const [value, setValue] = useState(0);

  const [input, setInput] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  let review;
  if (props.task.completed === true) {
    review = (
      <button className="accept-button review disabled" disabled="disabled">
        Already Made an Review
      </button>
    );
  } else {
    review = (
      <button className="accept-button review" onClick={handleClickOpen}>
        Make an Review
      </button>
    );
  }
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8090/replies/accept/` + props.task.taskId)
      .then((res) => {
        console.log(res);
        setReply(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.task.taskId]);

  let today = new Date();
  const sendComment = {
    rating: value,
    reviewTaskId: props.task.taskId,
    reviewUserId: 1,
    reviewDate: today,
    type: "tasker",
    description: input,
  };

  const putCompleted = {
    taskId: props.task.taskId,
    replyId: reply.replyId,
    arranged: true,
    completed: true,
  };

  const handleSend = () => {
    axios
      .post(`http://localhost:8090/reviews`, sendComment, {
        headers: headers,
      })
      .then((res) => {});
    console.log(sendComment);
    putTaskCompleted();
    setOpen(false);
    window.location.reload(false);
  };

  const putTaskCompleted = () => {
    axios.put(`http://localhost:8090/tasks`, putCompleted).then((res) => {
      console.log(putCompleted);
    });
  };

  return (
    <div className="repley-display">
      <div className="details-title">Offers Accepted</div>
      <ul className="ul">
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
              <button className="accept-button disabled" disabled="disabled">
                Accepted
              </button>
            </div>
          </div>

          <div className="reply-text">{reply.description}</div>

          <div className="offer-box">{review}</div>
        </li>
      </ul>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Make an Review</DialogTitle>
        <DialogContent>
          <Typography component="legend">Choose an rating</Typography>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <Typography component="legend">Comment</Typography>
          <textarea
            id="comment"
            placeholder="Write something.."
            onChange={(event) => {
              const { value } = event.target;
              setInput(value);
              console.log(value);
            }}
          ></textarea>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={handleSend}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Review;
