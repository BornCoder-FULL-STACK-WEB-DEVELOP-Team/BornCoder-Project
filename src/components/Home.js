import React, { useState, useEffect } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import UserService from '../services/user.service';
import theme from '../theme';
import Layout from '../components/Layout';

const Home = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    UserService.getPublicContent().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Layout></Layout>
    </ThemeProvider>
  );
};

export default Home;
