import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from '../../../../../../theme';

import Flex from '../../../../../Flex';

import Link from '../../../../../Link';

const ITEMS = [
  {
    name: 'categories',
    text: 'Categories',
    active: false,
    url: '/categories',
  },
  {
    name: 'browse tasks',
    text: 'Browse tasks',
    url: '/browse-tasks',
  },
  {
    name: 'hot it works',
    text: 'How it works',
    active: false,
    url: '/how-it-works',
  },
];

const Wrapper = styled.nav``;

const Navigation = () => (
  <Wrapper>
    <Flex>
      {ITEMS.map((item) => (
        <Link key={item.name} href={item.url} active={item.active}>
          {item.text}
        </Link>
      ))}
    </Flex>
  </Wrapper>
);

export default Navigation;
