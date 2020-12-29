import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons'

export const Socials = () => {
  return (
    <Wrap>
      <SocialsTitle>Or Sign In with your Socials</SocialsTitle>
      <SocialButton facebook>
        <FontAwesomeIcon icon={faFacebook} />
        <BtnText>Facebook</BtnText>
      </SocialButton>
      <SocialButton google>
        <FontAwesomeIcon icon={faGoogle} />
        <BtnText>Google</BtnText>
      </SocialButton>
    </Wrap>
  )
}
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 4rem;
  border-left: 0.1rem solid #e5e5e5;
  margin-left: 4rem;
  @media (max-width: 968px) {
    padding: 2rem 0 0 0;
    margin: 2rem 0 0 0;
    border: none;
    border-top: 0.1rem solid #e5e5e5;
  }
`
const SocialsTitle = styled.div`
  font-size: 1.6rem;
  font-weight: 700;
`
const SocialButton = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  width: 8.5rem;
  padding: 1.2rem 1.2rem 1rem;
  color: white;
  font-weight: 400;
  margin-top: 2rem;
  border: none;
  border-radius: 0.3rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 00.5rem;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 0.1rem 0.5rem rgba(10, 10, 10, 0.8);
  }
  ${(props) =>
    props.facebook &&
    `
  background: #3b5998;

  `}
  ${(props) =>
    props.google &&
    `
  background: #db3236;

  `}
  @media (max-width: 968px) {
    width: 70%;
  }
`
const BtnText = styled.div`
  padding-left: 2.5rem;
`
