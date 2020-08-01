import React, { useContext, Fragment, useEffect } from "react";
import LinkStyle from "../../ui/Link";
import styles from "./navbar.module.css";
import Button from "../../ui/Button";
import AuthContext from "../../../context/auth/authContext";
import styled, { ThemeProvider } from "styled-components";
import theme from "../../../theme";
import { withRouter, Link } from "react-router-dom";

const Wrapper = styled.nav`
  border-bottom: ${(props) => props.theme.border.default};
  font-weight: 600;
  color: ${(props) => props.theme.color.grey};
  background-color: ${(props) => props.theme.color.white};
  display: flex;
  justify-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 58px;
  z-index: 100;
`;

const MainMenu = styled.div`
  height: 100%;
  width: 72%;

  display: flex;

  align-items: center;
`;

const MenuLeft = styled.div`
  display: flex;
`;

const MenuRight = styled.div`
  margin-left: auto;

  display: flex;
`;

const Logo = styled.div`
  padding: 0 ${(props) => props.theme.gutter.md};
  border-right: ${(props) => props.theme.border.default};
  display: flex;

  align-items: center;
`;

const Navbar = (props) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
  };

  const onLoadUser = async () => {
    await loadUser();
    props.history.push("/my-task");
  };

  const onLoadProfile = async () => {
    await loadUser();
    props.history.push("/profile");
  };

  const onLoadNotification = async () => {
    await loadUser();
    props.history.push("/notification");
  };

  const authLinks = (
    <Fragment>
      <h3>
        Hello {user && user.userName}
        {"  "}
        <button onClick={onLoadUser}>My tasks</button>
        <button onClick={onLoadProfile}>My Profile</button>
        <button onClick={onLoadNotification}>Notification</button>
        <LinkStyle onClick={onLogout} href="/">
          <i className="fas fa-sign-out-alt">Logout</i>
        </LinkStyle>
      </h3>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link className={styles.linkStyle} to="/register">
        Register
      </Link>

      <Link className={styles.linkStyle} to="/login">
        Login
      </Link>

      <Link to="/register">
        <Button>Become a tasker</Button>
      </Link>
    </Fragment>
  );

  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <MainMenu>
          <MenuLeft>
            <Link to="/">
              <Logo>Handy-Booking</Logo>
            </Link>
            <Link to="/post-a-task">
              <Button> Post a task</Button>
            </Link>

            <Link className={styles.linkStyle} to="/browse-tasks">
              Browse tasks
            </Link>

            <Link className={styles.linkStyle} to="/how-it-works">
              How it works
            </Link>
          </MenuLeft>

          <MenuRight>{isAuthenticated ? authLinks : guestLinks}</MenuRight>
        </MainMenu>
      </Wrapper>
    </ThemeProvider>
  );
};

export default withRouter(Navbar);
