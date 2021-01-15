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
  padding-left: 40px;
  border-left: 1px solid #e5e5e5;
  margin-left: 40px;
  @media (max-width: 968px) {
    padding: 20px 0 0 0;
    margin: 20px 0 0 0;
    border: none;
    border-top: 1px solid #e5e5e5;
  }
`
const SocialsTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
`
const SocialButton = styled.div`
  cursor: pointer;
  display: flex;
  position: relative;
  width: 8.5rem;
  padding: 12px 12px 10px;
  color: white;
  font-weight: 400;
  margin-top: 20px;
  border: none;
  border-radius: 3px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s;
  &:hover {
    box-shadow: 0 1px 5px rgba(10, 10, 10, 0.8);
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
  padding-left: 2rem;
`
