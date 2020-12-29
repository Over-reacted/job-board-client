import React from 'react'
import styled from 'styled-components'

import { RequiredIndicator, Container, Label } from '../index'

const Input = styled.input`
  margin: 0 0 0.3rem;
  padding: 1.6rem 1.2rem 1.6rem 1.2rem;
  height: 5.7rem;
  cursor: auto;
  border: 0.3rem solid rgba(144, 146, 148, 0.2);
  outline: 0.2rem none rgba(144, 146, 148, 0.2);
  background-color: #f8f9fa;
`

export const InputGroup = ({
  type,
  title,
  inputText,
  isRequired,
  value,
  onChange,
  name,
}) => {
  return (
    <Container>
      <Label name={title}>
        {title} {isRequired && <RequiredIndicator />}
      </Label>
      <Input
        id={title}
        type={type}
        value={value}
        onChange={onChange}
        name={name}
      />
      <p>{inputText}</p>
    </Container>
  )
}
