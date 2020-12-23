import React, { useState } from 'react'
import styled from 'styled-components'
import { useForm } from '../../../../../../hooks/useForm'

export const AuthModalSignIn = ({ isChecked, setIsChecked }) => {
  const { formState, handleChange, onSubmit } = useForm({
    email: '',
    password: '',
    confirmPassword: '',
  })

  return (
    <>
      <Form>
        <Credentials>
          <FormGroup>
            <Label>Email Address</Label>
            <br />
            <Input
              type="e-mail"
              name="email"
              value={formState.email}
              onChange={handleChange}
            ></Input>
          </FormGroup>

          <FormGroup>
            <Label>Password</Label>
            <br />
            <Input
              type="password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            ></Input>
          </FormGroup>
          <FormGroup>
            <Label>Confirm Password</Label>
            <br />

            <Input
              type="password"
              name="confirmPassword"
              value={formState.confirmPassword}
              onChange={handleChange}
            ></Input>
          </FormGroup>
        </Credentials>

        <Button signIn isActive={isChecked} onClick={onSubmit}>
          Sign In
        </Button>
        <Terms>
          <Customcheckbox
            isChecked={isChecked}
            onClick={() => setIsChecked(!isChecked)}
          ></Customcheckbox>
          I Agree with the terms and conditions
        </Terms>
      </Form>
    </>
  )
}

export const Form = styled.div`
  display: flex;

  flex-direction: column;
`
export const Credentials = styled.div`
  float: left;
`

export const FormGroup = styled.div`
  dislay: flex;
  flex-direction: column;
  margin-bottom: 10px;
  vertical-align: baseline;
`
export const Label = styled.label``
export const Input = styled.input`
  width: 270px;
  font-size: 16px;
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-top: 3px;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.password &&
    `
        width: 100px;
        margin-right: 10px;
    `}
`
export const Flex = styled.div`
  display: flex;
  ${(props) =>
    props.column &&
    `
  flex-direction: column;
  align-items: center;
  `}
  ${(props) =>
    props.left &&
    `
  flex-direction: column;
  align-items: left;
  `}
`
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  color: white;
  width: 5rem;
  height: 2rem;
  background: #f03e3e;
  cursor: pointer;
  border-radius: 2px;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 1px 5px rgba(10, 10, 10, 0.8);
  }
  ${(props) =>
    !props.isActive &&
    `
    pointer-events:none;
    cursor: not-allowed;
    opacity: 0.5;
  `}
  ${(props) =>
    props.signIn &&
    `

    width: 280px;
    margin-top: 10px;
  `}
  ${(props) =>
    props.close &&
    `
    width: 2rem;
    pointer-events:auto;
    cursor: pointer;
    opacity: 1;
    font-size: 30px;
    background: transparent;
    align-self: center;
    border-radius: 50%;
    margin-top: 10px;
    color: black;
  `}

  cursor:${props => props.isActive ? 'pointer' : 'not-allowed'};
  pointer-events: ${props => props.isActive ? 'auto' : 'none'};
  opacity: ${props => props.isActive ? '1' : '0.7'}


`
export const Terms = styled.div`
  padding-top: 20px;
  display: flex;
  align-items: center;
`
export const Customcheckbox = styled.div`
  transition: all 0.3s;
  position: inherit;
  cursor: pointer;
  top: 0;
  left: 0;
  background: #eee;
  ${(props) =>
    props.isChecked &&
    `
    background: #f03e3e;
    transform: rotate(45deg);
  `}
  height: 15px;
  width: 15px;
  margin: 5px;
  border: 1px solid #ccc;
  &:hover {
    background: ${(props) => (props.isChecked ? '#d01e1e' : '#ccc')};
  }
`
export const Plain = styled.div`
  display: flex;
  margin-top: 20px;
  ${(props) =>
    props.text &&
    `
  font-size: 13px;
  text-decoration: underline;
  width: fit-content;
  margin: 10px;
  &:hover {
    cursor: pointer;
    color: #f03e3e;
  }
  `}
`
