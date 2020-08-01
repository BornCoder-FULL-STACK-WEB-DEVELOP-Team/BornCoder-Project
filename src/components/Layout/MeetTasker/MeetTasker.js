import React from 'react';
import styled from 'styled-components';
import TaskerCard from './TaskerCard';

const HEADING = 'Meet some Taskers!';
const CONTENT =
  'Discover the story behind the people that are making the Airhandyman community great, how and why they do what they do.';
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heaading = styled.h1`
  color: ${(props) => props.theme.color.black};
`;

const Content = styled.h3`
  color: ${(props) => props.theme.color.black};
  font-weight: 600;
  text-align: center;
  width: 610px;
`;

const MeetTasker = () => (
  <Wrapper>
    <Heaading>{HEADING}</Heaading>
    <Content>{CONTENT}</Content>
    <TaskerCard>card</TaskerCard>
  </Wrapper>
);

export default MeetTasker;
