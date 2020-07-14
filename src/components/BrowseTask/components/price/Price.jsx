import React, { useState, useEffect } from "react";
import "./Price.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";

function Price(props) {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [offer, setOffer] = useState();
  const [send, setSend] = useState();
  const [task, setTask] = useState([]);
  const wrapper = React.createRef();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSuccessClose = () => {
    setSuccess(false);
    window.location.reload(false);
  };

  const sendOffer = {
    description: offer,
    taskId: props.taskId,
  };

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const handleSendOffer = (e) => {
    e.preventDefault();
    setOpen(false);
    setSend(offer);

    axios.post(`http://localhost:8090/replies`, sendOffer, {
      headers: headers
    }).then((res) => {
      // console.log(sendOffer);
      axios.post(`http://localhost:8090/messages`, {
        action: 'has made an offer on',
        userAvatar: 'https://eu7cmie.cloudimg.io/s/crop/128x128/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/3960175/photo-6dcb921481cf580a8943df2deed10d45.jpg',
        userName: 'Long Z.',
        content: offer,
        taskId: props.taskId,
        userId: '1'
      }).then((res) => {
        
      });
    });

    setOffer("");
    setSuccess(true);
    setOpen(false);
  };

  return (
    <div className="price-card">
      <div className="price-padding">
        <div className="budget-header">task budget</div>
        <div className="task-price">${props.task.price}</div>
        <button className="offer-button" onClick={handleClickOpen}>
          Make an offer
        </button>
        <div id="modal"></div>
      </div>
      <div>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Make An Offer</DialogTitle>
          <DialogContent>
            <DialogContentText>You may earn</DialogContentText>
            <DialogTitle>${props.task.price}</DialogTitle>
            <DialogContentText>
              Why are you the best person for this task?
            </DialogContentText>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              variant="outlined"
              style={{ width: "100%" }}
              value={offer}
              onChange={(event) => {
                const { value } = event.target;
                setOffer(value);
                console.log(offer);
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button ref={wrapper} onClick={handleSendOffer} color="primary">
              Send Offer
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div>
        <Dialog
          open={success}
          onClose={handleSuccessClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle>Send Offer Succssfully</DialogTitle>
          <DialogActions>
            <Button onClick={handleSuccessClose} color="primary">
              OK
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Price;
