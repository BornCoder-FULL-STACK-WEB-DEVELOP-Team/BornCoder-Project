import React from 'react';
import styled from 'styled-components';
import Landing from '../layout/Landing';
import TaskItems from '../layout/TaskItems';
import Afterpay from './Afterpay/Afterpay';
import OthersDone from './OthersDone';
import Flex from '../ui/Flex';
import Button from '../ui/Button';
import HowWork from './HowWork';
import MeetTasker from './MeetTasker';
import Footer from './Footer';

const Wrapper = styled.div`
  display: block;
`;

const Content = styled.div`
  margin-top: 58px;
`;
const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Content>
        <Landing />
        <TaskItems />
        <Afterpay />
        <OthersDone />
        <HowWork />
        <Afterpay />
        <MeetTasker />
        {children}
        <Footer />
      </Content>
    </Wrapper>
  );
};

export default Layout;
