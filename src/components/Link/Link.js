import styled, { css } from 'styled-components';

const Link = styled.a`
  color: ${(props) => props.theme.color.grey};
  text-decoration: none;
  padding: ${(props) => props.theme.gutter.xxs};
  font-size: ${(props) => props.theme.gutter.xs};
  border-bottom: ${(props) => props.theme.border.transparent};
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.color.blue};
    border-bottom: ${(props) => props.theme.border.navLink};
  }

  ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.color.blue};
      border-bottom: ${(props) => props.theme.border.navLink};
    `}
`;

export default Link;
