import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../theme';
import Layout from '../layout/Layout';

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout></Layout>
    </ThemeProvider>
  );
};

export default Home;
