import React, { useContext, Fragment, useEffect } from 'react';
import Link from '../../ui/Link';
import Button from '../../ui/Button';
import AuthContext from '../../../context/auth/authContext';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../../theme';

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

const Navbar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
  };

  const authLinks = (
    <Fragment>
      <h3>
        Hello {user && user.userName}
        <Link onClick={onLogout} href="/">
          <i className="fas fa-sign-out-alt">Logout</i>
        </Link>
      </h3>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <Link href="/register">Register</Link>

      <Link href="/login">Login</Link>

      <Button>Become a tasker</Button>
    </Fragment>
  );

  const publicLinks = (
    <Fragment>
      <Link href="/post-a-task">
        <Button> Post a task</Button>
      </Link>

      <Link href="/browse-tasks">Browse tasks</Link>
      <Link href="/how-it-works">How it works</Link>
    </Fragment>
  );
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <MainMenu>
          <MenuLeft>
            <Link href="/">
              <Logo>Logoooo</Logo>
            </Link>
            {publicLinks}
          </MenuLeft>

          <MenuRight>{isAuthenticated ? authLinks : guestLinks}</MenuRight>
        </MainMenu>
      </Wrapper>
    </ThemeProvider>
  );
};

export default Navbar;
