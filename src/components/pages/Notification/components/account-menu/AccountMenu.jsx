import React from "react";

import styles from "./AccountMenu.module.scss";

class AccountMenu extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <div className={styles.menuHeader}>
          <div className={styles.avatarContainer}>
            <img
              className={styles.avatarImg}
              src={this.props.userPhoto}
              alt="user_photo"
            />
          </div>
          <div className={styles.userName}>{this.props.userName}</div>
        </div>
      </div>
    );
  }
}

export default AccountMenu;
