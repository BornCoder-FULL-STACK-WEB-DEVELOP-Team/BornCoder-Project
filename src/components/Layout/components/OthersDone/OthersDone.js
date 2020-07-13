import React from 'react';
import styled from 'styled-components';
import TaskCard from './TaskCard';

const HEADING = 'See what others are getting done';

const Wrapper = styled.div``;

const Heading = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.color.black};
  margin: ${(props) => props.theme.gutter.md} 0;
`;
const OthersDone = () => (
  <Wrapper>
    <Heading>{HEADING}</Heading>
    <TaskCard></TaskCard>
  </Wrapper>
);
export default OthersDone;
