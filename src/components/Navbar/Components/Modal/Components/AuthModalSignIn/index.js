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

        <Button signIn onClick={onSubmit}>
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
  margin-bottom: 1rem;
  vertical-align: baseline;
`
export const Label = styled.label``
export const Input = styled.input`
  width: 27rem;
  font-size: 1.6rem;
  padding: 0.4rem;
  border: 0.1rem solid #ccc;
  border-radius: 0.3rem;
  margin-top: 0.3rem;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.password &&
    `
        width: 10rem;
        margin-right: 1rem;
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
  font-size: 1.9rem;
  color: white;
  width: 5rem;
  height: 2rem;
  background: #f03e3e;
  cursor: pointer;
  border-radius: 0.2rem;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 0.1rem 0.5rem rgba(10, 10, 10, 0.8);
  }
  ${(props) =>
    props.signIn &&
    `

    width: 28rem;
    margin-top: 1rem;
  `}
  ${(props) =>
    props.close &&
    `
    width: 2rem;

    font-size: 3rem;
    background: transparent;
    align-self: center;
    border-radius: 50%;
    margin-top: 1rem;
    color: black;
  `}
`
export const Terms = styled.div`
  padding-top: 2rem;
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
  height: 1.5rem;
  width: 1.5rem;
  margin: 0.5rem;
  border: 0.1rem solid #ccc;
  &:hover {
    background: ${(props) => (props.isChecked ? '#d01e1e' : '#ccc')};
  }
`
export const Plain = styled.div`
  display: flex;
  margin-top: 2rem;
  ${(props) =>
    props.text &&
    `
  font-size: 1.3rem;
  text-decoration: underline;
  width: fit-content;
  margin: 1rem;
  &:hover {
    cursor: pointer;
    color: #f03e3e;
  }
  `}
`
