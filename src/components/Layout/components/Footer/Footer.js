import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
  faStar,
  faFacebook,
  faIdCard,
  faLandmark,
  faThLarge,
} from '@fortawesome/free-solid-svg-icons';

const ITEMS = [
  {
    name: 'discover',
    text: 'Discover',
    list: ['How It works', 'Earn money'],
  },
  {
    name: 'company',
    text: 'Company',
    list: ['About us', 'Contact us', 'Tems & conditions'],
  },
  {
    name: 'existing members',
    text: 'Existing Members',
    list: ['Post a task', 'Browse tasks', 'Login'],
  },
  {
    name: 'popular categories',
    text: 'Popular Categories',
    list: ['Post a task', 'Browse tasks', 'Login'],
  },
];

const Wrapper = styled.div`
  margin-top: 60px;
  background-color: ${(props) => props.theme.color.black};
  padding: ${(props) => props.theme.gutter.lg};
`;

const ItemsContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-grow: 1;
`;
const Card = styled.div``;
const Title = styled.div`
  color: ${(props) => props.theme.color.lightGrey};
  font-weight: 600;
  margin: ${(props) => props.theme.gutter.md} 0;
`;

const Li = styled.a`
  color: ${(props) => props.theme.color.grey};
  font-size: ${(props) => props.theme.gutter.xs};
  font-weight: 500;
  display: block;
  cursor: pointer;
  height: 24px;
  line-height: 24px;
  transition: color 0.1s ease-in, padding 0.5s ease-in, background 0.1s ease-in,
    height 0.5s ease-in-out, border-bottom 0.2s linear;

  &:hover {
    color: ${(props) => props.theme.color.lightGrey};
  }
`;
const FooterLinks = styled.div`
  display: flex;
  padding: 64px 0 32px 0;
`;

const Icon = styled.a`
  width: 50px;
  height: 50px;
  // background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.color.lightGrey};
  }
`;

const Pty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333535;
  color: ${(props) => props.theme.color.lightGrey};
  padding: 20px;
`;

const Footer = () => (
  <Wrapper>
    <ItemsContainer>
      {ITEMS.map((item) => (
        <Content>
          <Card key={item.name}>
            <Title>{item.text}</Title>

            {item.list.map((i) => (
              <Li>{i}</Li>
            ))}
          </Card>
        </Content>
      ))}
    </ItemsContainer>
    <FooterLinks>
      <Icon>
        <FontAwesomeIcon icon={['fab', 'facebook']} size="lg" />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={['fab', 'youtube']} size="lg" />
      </Icon>
      <Icon>
        <FontAwesomeIcon icon={['fab', 'twitter']} size="lg" />
      </Icon>
    </FooterLinks>
    <Pty>AirHandyman Pty. Ltd 2020©, All rights reserved</Pty>
  </Wrapper>
);

export default Footer;
