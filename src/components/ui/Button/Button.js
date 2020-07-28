import styled from 'styled-components';
import { darken } from 'polished';

const Button = styled.button`
  outline: 0;
  border: 0;
  margin: 0 ${(props) => props.theme.gutter.sm};

  background-color: ${(props) => props.theme.color.pink};
  color: ${(props) => props.theme.color.white};
  font-weight: 600;
  font-size: ${(props) => props.theme.gutter.xs};
  border: ${(props) => props.theme.border.button};
  border-radius: ${(props) => props.theme.borderRadius.default};
  text-shadow: 0 1px 1px #9a0137;
  padding: ${(props) => props.theme.gutter.xxs}
    ${(props) => props.theme.gutter.sm};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => darken(0.1, props.theme.color.pink)};
  }
`;

export default Button;
