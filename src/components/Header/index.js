import React, { useState, useRef } from 'react'
import styled from 'styled-components'

export const Header = () => {
  return (
    <Container>
      <h1>Home</h1>
      <Description>
        Welcome to Overreacted <br />
        <Button>
          <strong>Post an Ad</strong>
        </Button>
      </Description>
    </Container>
  )
}

export const Container = styled.div`
  background-image: url('https://weworkremotely.com/assets/Header@3x-c754140b276c02588dd4a43b70212d3668a75a54970c4baac325aeb60cb92f66.svg');
  background-position: bottom;
  font-size: 28px;
  color: black;
  padding: 50px;
  border-bottom: 1px solid #dde0f4;
  text-align: center;
  margin-bottom: 1rem;
`
export const Description = styled.div`
  font-size: 24px;
`
const Button = styled.button`
  margin: 1rem;
  background: #f03e3e;
  color: white;
  height: 2rem;
  width: 10rem;
  border: none;
  border-radius: 2px;
  transition: 0.2s all;
  &:hover {
    box-shadow: 0 1px 5px rgba(10, 10, 10, 0.8);
  }
  &:focus {
    outline: none;
  }
  cursor: pointer;
`
