import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faIdCard,
  faLandmark,
} from '@fortawesome/free-solid-svg-icons';
import Link from '../../../../Link';

const TASKERS = [
  {
    id: 1,
    name: 'Samantha',
    specialities: ['assembly', 'pet care', 'gardening'],
    description:
      'Returning to the workforce as a single mum, Sam had to find something that could be flexible and cover the cost of childcare.',
    rating: 5,
    review: 'Very nice',
    badges: ['digital id', 'police check'],
  },
  {
    id: 2,
    name: 'Emily',
    specialities: ['delivery', 'cleaning', 'packing'],
    description:
      'In-between jobs, Emily was looking for a way to earn some extra cash... Maybe even using her clown school skills!',
    rating: 5,
    review: 'She was an absolute lifesaver',
    badges: ['digital id', 'police check'],
  },
  {
    id: 3,
    name: 'Brendan',
    specialities: ['handyman', 'electrician', 'delivery'],
    description: `A sparky by trade, Brendon jumped onboard when he went back to studying. Here's how Airtasker fit in with his busy lifestyle...`,
    rating: 5,
    review: 'Nice work',
    badges: ['digital id', 'police check'],
  },
];
const Wrapper = styled.div``;

const NameTag = styled.div`
  margin: ${(props) => props.theme.gutter.lg};
  text-align: center;
`;

const NameTagLink = styled.a`
  position: relative;
  color: ${(props) => props.theme.color.black};
  text-decoration: none;
  padding: ${(props) => props.theme.gutter.xxs};
  font-weight: 500;
  font-size: ${(props) => props.theme.gutter.lg};
  border-bottom: ${(props) => props.theme.border.transparent};
  cursor: pointer;
  transition: color 0.25s;

  &:hover {
    color: ${(props) => props.theme.color.blue};
    border-bottom: ${(props) => props.theme.border.navLink};
  }
  &:after {
    content: '';
    position: absolute;
    transition: all 0.15s cubic-bezier(0.615, 0.19, 0.305, 0.91);
    transform: translateY(-4px);
    opacity: 0;
  }

  ${(props) =>
    props.active &&
    css`
      color: ${(props) => props.theme.color.blue};
      border-bottom: ${(props) => props.theme.border.navLink};
    `}
`;

const Card = styled.div`
  width: 960px;
  height: 550px;
  display: flex;
  margin-top: ${(props) => props.theme.gutter.lg};
`;

const Image = styled.div`
  width: 300px;
  height: 100%;
  background-color: ${(props) => props.theme.color.blue};
`;

const Content = styled.div`
  margin: ${(props) => props.theme.gutter.xs};

  width: 660px;
  height: 100%;
`;

const Profile = styled.div`
  height: 129px;
  padding: ${(props) => props.theme.gutter.xs};
`;

const Name = styled.h2`
  color: ${(props) => props.theme.color.black};
  margin: 0;
`;
const Specialities = styled.p`
  font-weight: 400;
  font-style: italic;
  color: ${(props) => props.theme.color.grey};
  margin-top: ${(props) => props.theme.gutter.xxs};
`;
const Description = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.color.grey};
`;

const More = styled.div`
  display: flex;
  flex-grow: 1;

  padding: ${(props) => props.theme.gutter.xs};
`;
const Rating = styled.div`
  width: 50%;
  display: block;
`;

const Title = styled.div`
  font-size: ${(props) => props.theme.gutter.sm};
  font-weight: 500;
  color: ${(props) => props.theme.color.black};
  margin: ${(props) => props.theme.gutter.md} 0;
`;

const Icon = styled.div`
  display: inline-block;
  color: ${(props) => props.theme.color.yellow};
  margin: 8px 0;
`;

const Details = styled.div`
  font-size: ${(props) => props.theme.gutter.sm};
  font-weight: 500;
  color: ${(props) => props.theme.color.grey};
  margin-top: ${(props) => props.theme.gutter.xs};
`;
const Badges = styled.div``;
const Badge = styled.div`
  margin: ${(props) => props.theme.gutter.xxs};
  display: flex;

  align-items: center;
`;
const BadgeContent = styled.div`
  font-size: ${(props) => props.theme.gutter.sm};
  font-weight: 500;
  margin-left: 8px;
  color: ${(props) => props.theme.color.grey};
`;

const TaskerCard = () => (
  <Wrapper>
    <NameTag>
      <NameTagLink fontSize="30px">Samantha</NameTagLink>
    </NameTag>
    <Card>
      <Image>Image</Image>

      <Content>
        <Profile>
          <Name>Samantha</Name>
          <Specialities>Specialities : </Specialities>
          <Description>
            Returning to the workforce as a single mum, Sam had to find
            something that could be flexible and cover the cost of childcare.
          </Description>
        </Profile>
        <More>
          <Rating>
            <Title>TRUST</Title>
            <Icon>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </Icon>
            <Details>4.9 stars from 185 reviews</Details>
            <Title>WHAT THE REVIEWS SAY</Title>
            <Details>
              Very nice and caring in trying circumstances! Thanks again
            </Details>
          </Rating>
          <Badges>
            <Title>Badges</Title>
            <Badge>
              <Icon>
                <FontAwesomeIcon icon={faIdCard} />
              </Icon>
              <BadgeContent>Digital iD</BadgeContent>
            </Badge>
            <Badge>
              <Icon>
                <FontAwesomeIcon icon={faLandmark} />
              </Icon>
              <BadgeContent>Police Check</BadgeContent>
            </Badge>
          </Badges>
        </More>
      </Content>
    </Card>
  </Wrapper>
);

export default TaskerCard;
