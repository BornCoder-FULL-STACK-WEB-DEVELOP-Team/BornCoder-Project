import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const STAR = 'Star';

const CardItems = [
  {
    id: 1,
    category: 'delivery',
    avatar: '',
    summary: 'Deliver boxes to storage',
    price: 299,
    rating: 5,
  },
  {
    id: 2,
    category: 'removals',
    avatar: '',
    summary: 'Remove cardboard',
    price: 29,
    rating: 5,
  },
];

const Wrapper = styled.div`
  display: flex;
  opacity: 1;
  transform: translate(0px, 0px);
  transition: all 0.2s ease;
  transform-style: preserve-3d;
`;

const Card = styled.div`
  width: 300px;
  height: 150px;
  background-color: ${(props) => props.theme.color.white};
  margin: ${(props) => props.theme.gutter.xs};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px;
  border-radius: ${(props) => props.theme.borderRadius.card};
  padding: ${(props) => props.theme.gutter.sm};
`;

const Category = styled.h3`
  color: ${(props) => props.theme.color.black};
  font-size: ${(props) => props.theme.gutter.xs};
  text-transform: uppercase;
`;

const Detail = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const Avatar = styled.div`
  border-radius: ${(props) => props.theme.borderRadius.default};
  height: 32px;
  width: 32px;
  background: url(https://unsplash.it/32/32/?random);
`;
const Summary = styled.div`
  width: 160px;
  margin-left: ${(props) => props.theme.gutter.xs};
  color: ${(props) => props.theme.color.black};
  font-size: ${(props) => props.theme.gutter.sm};
`;
const Price = styled.div`
  margin-left: auto;
`;
const Rating = styled.div`
  margin-top: ${(props) => props.theme.gutter.xs};
`;
const Icon = styled.div`
  display: inline-block;
  color: ${(props) => props.theme.color.yellow};
  margin-right: 8px;
  margin-top: 8px;
`;

const Star = styled.h5`
  margin-left: ${(props) => props.theme.gutter.xs};
  color: ${(props) => props.theme.color.black};
`;

const TaskCard = () => (
  <Wrapper>
    {CardItems.map((item) => {
      return (
        <Card>
          <Category>{item.category}</Category>
          <Detail>
            <Avatar></Avatar>
            <Summary>{item.summary}</Summary>
            <Price>
              <FontAwesomeIcon icon={faDollarSign} size="lg" /> {item.price}
            </Price>
          </Detail>
          <Rating>
            <Icon>
              <FontAwesomeIcon icon={faStar} />
            </Icon>
            {item.rating}
            {'  '}
            <span>Star</span>
          </Rating>
        </Card>
      );
    })}
  </Wrapper>
);

export default TaskCard;
