import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  background-color: #f03e3e;
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 1.6rem 3rem 1.6rem 3rem;
  border-radius: 0.2rem;
  border-color: transparent;
  display: inline-block;
  cursor: pointer;
`

export const Button = ({ children }) => {
  return <Btn>{children}</Btn>
}
