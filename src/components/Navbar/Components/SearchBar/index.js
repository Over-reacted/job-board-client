import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { useClickOutside } from '../../../../hooks'

export const SearchBar = ({ showSearch, showSearchBar }) => {
  // const searchContainerRef = useRef(null)
  // useClickOutside(searchContainerRef, () => showSearchBar(false))

  // if (showSearch) {
  return <Search showSearch={showSearch} placeholder="Search Here" />
  // } else return <></>
}

export const Search = styled.input`
  display: ${(props) => (props.showSearch ? 'block' : 'none')};
  position: relative;
  width: 100%;
  font-size: 1.5rem;
  margin: 0px 0px 1rem 6rem;
  height: auto;
  border: none;
  box-shadow: 0 0.1rem 0.5rem rgba(10, 10, 10, 0.3);
  float: left;
  &:active {
    border: none;
  }
  &:focus {
    outline: none;
  }
  ::placeholder {
    color: #ddd;
  }

  ${(props) =>
    props.isMobile &&
    `
    box-shadow: none;
    display: block;
  font-size: 1.6rem;
  width: 93%;
  margin: 1rem;
  padding: .4rem;

  `}
`
