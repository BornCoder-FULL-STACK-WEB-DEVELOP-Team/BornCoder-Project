import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { IoIosCheckmarkCircle } from "react-icons/io";
import style from "./css/success.module.css";

function PostSuccess() {
  const [success, setSuccess] = useState(true);

  const handleSuccessClose = () => {
    setSuccess(false);
  };

  return (
    <div>
      <Dialog
        open={success}
        onClose={handleSuccessClose}
        aria-labelledby="form-dialog-title"
        disableBackdropClick
      >
        <DialogTitle>Post Task Succssfully</DialogTitle>
        <div className={style.iconStyle}>
          <IoIosCheckmarkCircle size="5em" color="rgb(125, 179, 67)" />
        </div>
        <DialogActions>
          <a
            onClick={handleSuccessClose}
            color="primary"
            href={`/browse-tasks`}
            className={style.okStyle}
          >
            OK
          </a>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default PostSuccess;
