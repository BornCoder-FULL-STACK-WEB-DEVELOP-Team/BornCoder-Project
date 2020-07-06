import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../theme';
import Header from '../components/Layout/components/Header';

const NavBar = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header></Header>
    </ThemeProvider>
  );
};

export default NavBar;
