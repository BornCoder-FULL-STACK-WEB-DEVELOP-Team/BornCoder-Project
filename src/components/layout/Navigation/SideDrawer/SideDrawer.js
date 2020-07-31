import React, { Fragment, useContext } from 'react';
import styles from './SideDrawer.module.css';
import AuthContext from '../../../../context/auth/authContext';
import Navbar from '../navbar/Navbar';
import Backdrop from '../../../ui/Backdrop/Backdrop';

const SideDrawer = (props) => {
  let attachedClasses = [styles.SideDrawer, styles.Close];

  if (props.open) {
    attachedClasses = [styles.SideDrawer, styles.Open];
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(' ')}>
        <nav style={{ display: 'block' }}>
          <Navbar />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
