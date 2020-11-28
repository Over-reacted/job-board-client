import React from 'react'
import styled from 'styled-components'

import { RequiredCircle } from '../index'

const Container = styled.div`
  margin-top: 20px;
`

const Input = styled.input`
  max-width: 890px;
  width: 890px;
  margin: 5px 0 3px;
  font-size: 0.95rem;
  padding: 16px 12px 16px 12px;
  cursor: auto;
  border-color: rgba(144, 146, 148, 0.2);
  border-style: solid;
  border-radius: 3px;
  font-family: 'Neufile Grotesk Regular', sans-serif;
  margin: 0 0 5px 0;
  background-color: #f8f9fa;
  outline-width: 2px;
  outline-color: rgba(144, 146, 148, 0.2);
`

export const InputField = ({ type, title, inputText, isRequired }) => {
  return (
    <Container>
      <h3>
        {title} {isRequired && <RequiredCircle />}
      </h3>
      <Input type={type} />
      <p>{inputText}</p>
    </Container>
  )
}
