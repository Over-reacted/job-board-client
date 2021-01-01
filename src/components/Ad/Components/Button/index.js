import React from 'react'
import styled from 'styled-components'

const Btn = styled.a`
  font-size: 1.44rem;
  background-color: #f03e3e;
  color: white;
  text-decoration: none;
  padding: 1.4rem 2rem 1.4rem 2rem;
  border-radius: 0.2rem;
  display: inline-block;
  margin-top: 1.4rem;
  font-family: 'Neufile Grotesk Semi Bold', sans-serif;
  margin-bottom: 1.6rem;
`

const BtnArrow = styled.a`
  display: inline-block;
  color: #f03e3e;
  margin: 1rem 0;
  font-size: 1.6rem;

  ${(props) =>
    props.arrowDir === 'left' &&
    `
    &::before {
    content: '←';
    display: inline-block;
    color: #fff;
    background: #f03e3e;
    border-radius: .2rem;
    padding: 0 .1rem 0 .1rem;
    margin-right: 1rem;
    width: 1.5rem;
    }
  `}

  ${(props) =>
    props.arrowDir === 'right' &&
    `
    &::after {
    content: '→';
    display: inline-block;
    color: #fff;
    background: #f03e3e;
    border-radius: .2rem;
    padding: 0 .1rem 0 .1rem;
    margin-left: 1rem;
    width: 1.5rem;
    }
  `}
`

export const Button = ({ variant, arrowDir, children }) => {
  switch (variant) {
    case 'block':
      return <Btn>{children}</Btn>
    case 'arrow':
    default:
      return <BtnArrow arrowDir={arrowDir}>{children}</BtnArrow>
  }
}
