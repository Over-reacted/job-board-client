import React from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <Wrap>
      <Title>Join OverReacted for Free</Title>
      <Description>
        Access thousands of products or offer one yourself!
      </Description>
    </Wrap>
  )
}

const Wrap = styled.div`
  margin-bottom: 4rem;
`
const Title = styled.h1`
  font-size: 2rem;
  margin: 0 0 0.5rem;
`
const Description = styled.div`
  font-size: 1.7rem;
  opacity: 0.8;
`
