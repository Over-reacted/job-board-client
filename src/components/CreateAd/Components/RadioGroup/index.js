import React from 'react'
import styled from 'styled-components'

import { Container, RequiredIndicator, Label } from '../index'

const RadioButton = styled.input.attrs({
  type: 'radio',
})`
  margin-right: 0.3rem;
`

const RadioGroupWrapper = styled.div`
  display: flex;
  font-size: 1.76rem;
  margin-top: 1.4rem;

  & div {
    display: flex;
    align-items: center;

    &:not(:last-child) {
      padding-right: 3rem;
    }
  }
`

export const RadioGroup = ({
  title,
  isRequired,
  choices,
  value,
  name,
  onChange,
  inputText,
}) => {
  return (
    <Container>
      <Label>Job Type {isRequired && <RequiredIndicator />}</Label>
      <RadioGroupWrapper name={name}>
        {choices.map((choice, key) => (
          <div key={key}>
            <RadioButton
              id={choice}
              name={name}
              value={choice}
              checked={value === choice}
              onChange={onChange}
            />
            <label htmlFor={choice}>{choice}</label>
          </div>
        ))}
      </RadioGroupWrapper>
      <p>{inputText}</p>
    </Container>
  )
}
