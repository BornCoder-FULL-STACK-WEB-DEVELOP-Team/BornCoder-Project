import React from 'react';
import styled from 'styled-components';
import BaseHeader from '../Layout/components/Header';
import Landing from '../Layout/components/Landing';
import Footer from '../Layout/components/Footer';
import TaskItems from '../Layout/components/TaskItems';
import Flex from '../Flex';
import Button from '../Button';
import Afterpay from './components/Afterpay';
import OthersDone from './components/OthersDone';
import HowWork from './components/HowWork';
import MeetTasker from './components/MeetTasker';

const Wrapper = styled.div`
  display: block;
`;

const Logo = styled.div`
  padding: 0 ${(props) => props.theme.gutter.md};
  border-right: ${(props) => props.theme.border.default};
  display: flex;

  align-items: center;
`;

const Content = styled.div`
  margin-top: 58px;
`;

const Layout = ({ children, fontSize }) => {
  return (
    <Wrapper>
      {/* <Header logo={<Logo>Logoooo</Logo>} /> */}
      <Content>
        <Landing />
        <TaskItems />
        <Afterpay />
        <OthersDone />
        <Flex align-items="center" justify-content="center">
          <Button>Get started now</Button>
        </Flex>

        <HowWork />
        <Afterpay />
        <MeetTasker></MeetTasker>
        {children}
        <Footer />
      </Content>
    </Wrapper>
  );
};

export default Layout;
