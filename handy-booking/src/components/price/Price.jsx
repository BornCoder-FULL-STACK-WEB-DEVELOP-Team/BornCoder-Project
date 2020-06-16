import React, { useState } from "react";
import "./Price.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { width } from "@material-ui/system";

function Price() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="price-card">
      <div className="price-padding">
        <div className="budget-header">task budget</div>
        <div className="task-price">$100</div>
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
            <DialogTitle>$100</DialogTitle>
            <DialogContentText>
              Why are you the best person for this task?
            </DialogContentText>
            <TextField
              id="outlined-multiline-static"
              multiline
              rows={4}
              variant="outlined"
              style={{ width: "100%" }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Send Offer
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default Price;
