import React, { useState } from 'react'
import styled from 'styled-components'
import { Flex, Plain, Button } from '../AuthModalSignIn'

export const Footer = ({ handleClose, activeForm, setLogIn, setSignIn }) => {
  const activeFormData = {
    SignIn: (
      <>
        Already a member?
        <SwitchForm onClick={setLogIn}>Log In</SwitchForm>
      </>
    ),
    LogIn: (
      <>
        Dont have an account yet?
        <SwitchForm onClick={setSignIn}>Sign In</SwitchForm>
      </>
    ),
  }
  return (
    <>
      <Flex column>
        <Plain>{activeFormData[activeForm]}</Plain>
        <Button close onClick={handleClose}>
          ×
        </Button>
      </Flex>
    </>
  )
}

const SwitchForm = styled.div`
  margin-left: 0.5rem;
  text-decoration: underline;
  cursor: pointer;
  &:hover {
    color: #f03e3e;
  }
`
