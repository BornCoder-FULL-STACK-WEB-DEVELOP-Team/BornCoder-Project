import React from 'react';
import styled from 'styled-components';
import Flex from '../../../../../Flex';
import Link from '../../../../../Link';

const SIGNS = [
  {
    name: 'sign up',
    text: 'Sign up',
    url: '/register',
  },
  {
    name: 'log in',
    text: 'Log in',
    url: '/login',
  },
];
const Wrapper = styled.nav``;

const Sign = () => (
  <Wrapper>
    <Flex>
      {SIGNS.map((item) => (
        <Link key={item.name} href={item.url}>
          {item.text}
        </Link>
      ))}
    </Flex>
  </Wrapper>
);
export default Sign;
