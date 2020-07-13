import React from 'react';
import styled from 'styled-components';
import Afterpay from '../../../../assets/img/afterpay.png';

const Wrapper = styled.div`
  width: 100%;

  height: 300px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  width: 80%;
  height: 180px;
  background-image: url(${Afterpay});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

const AfterPay = () => (
  <Wrapper>
    <Content></Content>
  </Wrapper>
);

export default AfterPay;
