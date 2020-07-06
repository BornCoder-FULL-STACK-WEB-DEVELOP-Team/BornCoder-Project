import React from 'react';
import styled from 'styled-components';
import Background from '../../../../assets/img/Handyman.png';
import Flex from '../../../Flex';
import Button from '../../../Button';

const SLOGANS =
  'Getting the job done wherever, however, no matter how big or small';

const CONTENT = 'Find the people with the skills you need on AirHandyman';

const Wrapper = styled.div`
  background-image: url(${Background});
  background-size: cover;
  width: 100%;
  height: 100vh;
  background-position: center center;
  display: flex;

  justify-content: center;
  align-items: center;
  // align-content: center;
`;

const Container = styled.div``;

const Heading = styled.h1`
  max-width: 880px;

  color: ${(props) => props.theme.color.white};
  font-family: 'Passion One', cursive;
  font-size: 60px;
  margin: 0;
`;

const Content = styled.h3`
  max-width: 880px;
  text-align: left;
  color: ${(props) => props.theme.color.white};
  font-size: 28px;
`;

const StartButton = styled(Button)`
  margin-left: 0;
  font-size: 18px;
  padding: ${(props) => props.theme.gutter.sm}
    ${(props) => props.theme.gutter.md};
`;

const Landing = ({ fontSize }) => (
  <Wrapper>
    <Container>
      <Heading>{SLOGANS}</Heading>
      <Content>{CONTENT}</Content>
      <StartButton fontSize={fontSize}>Get started now</StartButton>
    </Container>
  </Wrapper>
);

export default Landing;
