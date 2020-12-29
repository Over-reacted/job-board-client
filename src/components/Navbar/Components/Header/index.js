import React, { useState, useRef } from 'react'
import styled from 'styled-components'

export const Header = ({ isActive, data }) => {
  return (
    <Container>
      <h1>{data[isActive].label}</h1>
      <Description>
        {data[isActive].description} <br />
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
  font-size: 2.8rem;
  color: black;
  padding: 5rem;
  border-bottom: 0.1rem solid #dde0f4;
  text-align: center;
  margin-bottom: 1rem;
`
export const Description = styled.div`
  font-size: 2.4rem;
`
const Button = styled.button`
  margin: 1rem;
  background: #f03e3e;
  color: white;
  height: 2rem;
  width: 10rem;
  border: none;
  border-radius: 0.2rem;
  transition: 0.2s all;
  &:hover {
    box-shadow: 0 0.1rem 0.5rem rgba(10, 10, 10, 0.8);
  }
  &:focus {
    outline: none;
  }
  cursor: pointer;
`
