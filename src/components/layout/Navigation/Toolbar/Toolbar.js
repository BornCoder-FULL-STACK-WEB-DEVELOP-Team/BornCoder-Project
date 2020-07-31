import React, { Fragment } from 'react';
import styles from './Toolbar.module.css';
import Navbar from '../navbar/Navbar';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const Toolbar = (props) => {
  return (
    <Fragment>
      <header className={styles.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <nav className={styles.DesktopOnly}>
          <Navbar />
        </nav>
      </header>
    </Fragment>
  );
};

export default Toolbar;
