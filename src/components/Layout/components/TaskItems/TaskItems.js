import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faHandSparkles,
  faTruck,
  faPeopleCarry,
  faArchive,
  faPaintRoller,
  faPencilRuler,
  faHome,
  faHandsHelping,
} from '@fortawesome/free-solid-svg-icons';
import Flex from '../../../Flex';

const HEADING = 'What do you need?';

const TASKITEMS = [
  {
    name: 'home cleaning',
    text: 'Home Cleaning',
    icon: faHandSparkles,
  },
  {
    name: 'full house removals',
    text: 'Full House Removals',
    icon: faTruck,
  },
  {
    name: 'few items removals',
    text: 'Few Items Removals',
    icon: faPeopleCarry,
  },
  {
    name: 'furniture assembly',
    text: 'Furniture Assembly',
    icon: faArchive,
  },
  {
    name: 'handyman',
    text: 'Handyman',
    icon: faPaintRoller,
  },
  {
    name: 'marketing & design',
    text: 'Marketing & Design',
    icon: faPencilRuler,
  },
  {
    name: 'home & gardening',
    text: 'Home & Gardening',
    icon: faHome,
  },
  {
    name: 'anything',
    text: 'Anything',
    icon: faHandsHelping,
  },
];

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${(props) => props.theme.gutter.md};
`;

const Container = styled.div``;

const Heading = styled.h1`
  color: ${(props) => props.theme.color.black};
`;

const Icon = styled.div`
  color: ${(props) => props.theme.color.white};
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.color.grey};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => props.theme.borderRadius.default};
  margin: ${(props) => props.theme.gutter.sm}
    ${(props) => props.theme.gutter.xs};
  position: relative;
  transition: transform 0.25s ease 0s;
  font-size: ${(props) => props.theme.gutter.md};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color.pink};
    transform: scale(1.05);
  }
`;

const Text = styled.div`
  color: ${(props) => props.theme.color.grey};
  font-size: ${(props) => props.theme.gutter.xs};
  font-weight: 600;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskItems = () => (
  <Wrapper>
    <Container>
      <Heading>{HEADING}</Heading>
      <Flex align-items="center" justify-content="center">
        {TASKITEMS.map((item) => {
          return (
            <Item key={item.name} display="flex" flex-direction="column" just>
              <Icon>
                <FontAwesomeIcon icon={item.icon} />
              </Icon>
              <Text>{item.text}</Text>
            </Item>
          );
        })}
      </Flex>
    </Container>
  </Wrapper>
);

export default TaskItems;
