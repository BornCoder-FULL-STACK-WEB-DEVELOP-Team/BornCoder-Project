import React from "react";
import styles from "./Price.module.css";

function Price(props) {
  const { task } = props;

  return (
    <div className={styles.priceCard}>
      <div className={styles.pricePadding}>
        <div className={styles.budgetHeader}>task budget</div>
        <div className={styles.taskPrice}>${task.price}</div>
      </div>
    </div>
  );
}

export default Price;
