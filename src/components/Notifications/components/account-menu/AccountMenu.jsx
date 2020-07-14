import React from 'react';

import styles from './AccountMenu.module.scss';

class AccountMenu extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.menuHeader}>
          <div className={styles.avatarContainer}>
            <img className={styles.avatarImg} src="https://eu7cmie.cloudimg.io/s/crop/128x128/https://assets-airtasker-com.s3.amazonaws.com/uploads/user/avatar/3960175/photo-6dcb921481cf580a8943df2deed10d45.jpg" alt="" />
          </div>
          <div className={styles.userName}>
            Long Zhao
          </div>
        </div>
        <div className={styles.menuContainer}>
          <a className={styles.menuBtn} href="/">Dashboard</a>
          <a  className={styles.menuBtn} href="/notifications">Notification</a>
        </div>
      </div>
    )
  }
}

export default AccountMenu;