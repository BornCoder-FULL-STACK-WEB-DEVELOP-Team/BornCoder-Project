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
    //console.log(send);

    axios
      .post(
        `http://localhost:8090/replies`,

        sendOffer,

        { headers: headers }
      )
      .then((res) => {
        // console.log(sendOffer);
      });

    setOffer("");
    setSuccess(true);
    setOpen(false);
  };
  //fetch data -- task price

  useEffect(() => {
    axios
      .get(`http://localhost:8090/tasks/` + props.taskId)
      .then((res) => {
        // console.log(res);
        setTask(res.data);
        //console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props]);

  return (
    <div className="price-card">
      <div className="price-padding">
        <div className="budget-header">task budget</div>
        <div className="task-price">${task.price}</div>
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
            <DialogTitle>${task.price}</DialogTitle>
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
