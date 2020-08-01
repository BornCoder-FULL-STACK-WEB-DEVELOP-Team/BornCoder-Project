import React, { useState, useEffect } from "react";
import styles from "./css/WhatUNeed.module.css";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";

function HowMuch(props) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
  };

  const handlePrevious = (e) => {
    e.preventDefault();
    props.preStep();
  };

  const handlePost = (e) => {
    e.preventDefault();
    props.handlePost();
  };

  return (
    <div className={styles.background}>
      <Dialog
        open={open}
        aria-labelledby="form-dialog-title"
        disableBackdropClick
      >
        <div className={styles.container}>
          <div className={styles.partOne}>
            <div className={styles.titleWrapper}>
              <span className={styles.partOne__Title}>Suggest how much</span>
              <button
                className={styles.closeButton}
                type="button"
                onClick={handleClose}
              >
                X
              </button>
            </div>
            <div className={styles.progressBar}>
              <div className={styles.lastprogressContainer}>
                <div className={styles.lastprogressFiller}></div>
              </div>
            </div>
            {/* what do you need done? */}
            <div className={styles.taskTitle}>
              <span className={styles.questionTitle}>What is your budget?</span>

              <div className={styles.questionOne__title}>
                <p className={styles.questionTips}>
                  Please enter the price you're comfortable to pay to get your
                  task done.
                </p>
              </div>
              <div className={styles.howanswerOne__wrapper}>
                <TextField
                  id="outlined-number"
                  label="$"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  size="medium"
                  variant="outlined"
                  value={props.values.price}
                  onChange={props.handleChange("price")}
                />
              </div>
            </div>
            {/* what are the details? */}
            <div className={styles.howtaskDetail}>
              <div>
                <span className={styles.howquestionTitle}>
                  ESTIMATED BUDGET
                </span>
                <div className={styles.questionTwo__title}>
                  <p className={styles.howquestionTips}>
                    Final payment will be agreed later
                  </p>
                </div>
              </div>
              <div className={styles.priceTag}>${props.values.price}</div>
              <div className={styles.answerTwo__wrapper}></div>
            </div>
            <div className={styles.buttonWrapper}>
              <div className={styles.partOneButton}>
                <button
                  className={styles.backButton}
                  type="button"
                  onClick={handlePrevious}
                >
                  Back
                </button>
              </div>
              <div className={styles.partOneButton}>
                <button
                  className={styles.howNextButton}
                  type="button"
                  onClick={handlePost}
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default HowMuch;
