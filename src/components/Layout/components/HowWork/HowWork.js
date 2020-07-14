import React from 'react';
import styled from 'styled-components';
import Flex from '../../../Flex';
import StepCard from './StepCard/StepCard';

const HEADING = 'How does Airhandyman work?';

const Wrapper = styled.div``;

const Heading = styled.h1`
  color: ${(props) => props.theme.color.black};
  margin: ${(props) => props.theme.gutter.lg} 0;
  text-align: center;
`;

const HowWork = () => (
  <Wrapper>
    <Heading>{HEADING}</Heading>
    <StepCard></StepCard>
  </Wrapper>
);

export default HowWork;
