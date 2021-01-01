import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faMapMarkerAlt,
  faGlobeAmericas,
  faFlag,
} from '@fortawesome/free-solid-svg-icons'
import { Flex, FlexItem } from '../../../../utilities/Flex'
import { Button } from '../index'

const CardWrapper = styled.div`
  background: #f8f9fa;
  padding: 2.8rem 3.6rem 0 3.6rem;
  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.15);
  margin: 2rem -2.5rem 0 0;
  border-radius: 0.2rem;
  max-width: 30rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: sans-serif;
`

const Logo = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  background-image: ${(props) => `url(${props.url})`};
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 2.56rem;
  margin: 1rem 0;
`

const Location = styled.h3`
  color: #4d5154;
  font-size: 1.6rem;
  margin-bottom: 0.6rem;

  & svg {
    margin-right: 0.5rem;
  }
`

const Website = styled.a`
  color: #4d5154;
  font-size: 1.6rem;
  font-weight: bold;
  text-decoration: none;
  margin-bottom: 0.6rem;

  & svg {
    margin-right: 0.5rem;
  }

  & a {
    text-decoration: none;
  }
`

const AdsPosted = styled.h4`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: #4d5154;
  margin-bottom: 4rem;
  letter-spacing: 0.1rem;
`

export const Card = ({ logoUrl, title, location, websiteUrl, adsPosted }) => {
  return (
    <CardWrapper>
      <Logo url={logoUrl} />
      <Title>{title}</Title>
      <Location>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <span>{location}</span>
      </Location>
      <Website href={websiteUrl} target="_blank">
        <FontAwesomeIcon icon={faGlobeAmericas} />
        <span>View website</span>
      </Website>
      <AdsPosted>Jobs Posted: {adsPosted}</AdsPosted>
      <Button variant="block">Apply for this Position</Button>
      <hr />
      <Button variant="arrow" arrowDir="right">
        View all jobs
      </Button>
    </CardWrapper>
  )
}
