import React from 'react';
import styled from 'styled-components';

const STEPS = [
  {
    name: 'post your task',
    img: 'https://unsplash.it/100/100/?random',
    title: 'Post your Task',
    description: `Tell us what you need. It's FREE to post`,
  },
  {
    ame: 'review offers',
    img: 'https://unsplash.it/100/100/?random',
    title: 'Review offers',
    description: `Get offers from trusted Taskers and view profiles.`,
  },
  {
    ame: 'get it done',
    img: 'https://unsplash.it/100/100/?random',
    title: 'Get it done',
    description: `Choose the right person for your task and get it done.`,
  },
];
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Step = styled.div`
  width: 310px;
  height: 100px;

  margin: 50px 20px;
  display: flex;
  padding: 0 ${(props) => props.theme.gutter.xs};
`;

const Img = styled.div`
  border-radius: ${(props) => props.theme.borderRadius.default};
  width: 100px;
  height: 100px;
  background: url('https://unsplash.it/32/32/?random');
`;

const Content = styled.div`
  width: 200px;
  margin-left: ${(props) => props.theme.gutter.xs};
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.gutter.sm};
  color: ${(props) => props.theme.color.black};
  font-weight: 600;
`;

const Description = styled.div`
  font-size: ${(props) => props.theme.gutter.sm};
  color: ${(props) => props.theme.color.black};
  font-weight: 400;
  margin-top: ${(props) => props.theme.gutter.xxs};
`;

const StepCard = () => (
  <Wrapper>
    {STEPS.map((item) => (
      <Step key={item.name}>
        <Img></Img>
        <Content>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </Content>
      </Step>
    ))}
  </Wrapper>
);

export default StepCard;
