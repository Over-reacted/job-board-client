import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useClickOutside } from '../../../../hooks'

export const DesktopNav = ({
  showSearchBar,
  setActiveHeader,
  data,
  setSignIn,
}) => {
  // const searchContainerRef = useRef(null)
  // useClickOutside(searchContainerRef, () => showSearchBar(false))

  const [showDropdown, setShowDropdown] = useState(false)

  const DropdownData = [
    { id: 1, label: 'PC', href: './pc' },
    { id: 2, label: 'Laptops', href: './laptops' },
    { id: 3, label: 'Consoles', href: './consoles' },
    { id: 4, label: 'Mobiles', href: './mobiles' },
  ]
  return (
    <>
      <Container>
        <Logo
          alt="Logo"
          src="https://avatars1.githubusercontent.com/u/72261383?s=200&v=4"
        />
        {data.map((item) => {
          if (item.label === 'Categories') {
            return (
              <div key={item.id} onMouseLeave={() => setShowDropdown(false)}>
                <Item>
                  <NavigationItem onMouseEnter={() => setShowDropdown(true)}>
                    {item.label}
                  </NavigationItem>
                </Item>
                <Dropdown isActive={showDropdown}>
                  {DropdownData.map((dropItem) => {
                    return (
                      <Item key={dropItem.id} Dropdown>
                        <NavigationItem Dropdown>
                          {dropItem.label}
                        </NavigationItem>
                      </Item>
                    )
                  })}
                </Dropdown>
              </div>
            )
          }
          return (
            <Item key={item.id}>
              <NavigationItem onClick={() => setActiveHeader(item.id)}>
                {data[item.id].label}
              </NavigationItem>
            </Item>
          )
        })}
        <Item>
          <NavigationItem>
            <Searching onClick={() => showSearchBar(true)}>
              <FontAwesomeIcon icon={faSearch} />
            </Searching>
          </NavigationItem>
        </Item>
        <Button isRegular onClick={() => setSignIn(true)}>
          <strong>Sign In</strong>
        </Button>
      </Container>
    </>
  )
}

export const Container = styled.div`
  display: flex;
  list-style: none;
  justify-content: flex-end;
  font-size: 22px;
  margin: 0;
  padding: 10px 175px 2px 175px;
  @media (max-width: 968px) {
    display: none;
  }
`
export const Logo = styled.img`
  padding: 10px;
  height: 50px;
  width: 50px;
  margin-right: auto;
  float: left;
`

export const Item = styled.li`
  padding: 10px 3px;
  list-style: none;
  ${(props) =>
    props.Dropdown &&
    `
  padding: 0;
  margin: 0;
  `}
`
export const NavigationItem = styled.button`
  background-color: inherit;
  color: #000;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  font-size: 17px;
  &:hover {
    color: ${(props) => (props.Dropdown ? 'black' : 'red')};
    font-weight: ${(props) => (props.Dropdown ? 600 : 'normal')};
  }
  overflow: hidden;
  ${(props) =>
    props.Dropdown &&
    `
    text-align: left;
    width: 100px;
    font-size: 14px;
  `}
`
export const Searching = styled(NavigationItem)`
  display: block;
  padding: 0;
  color: black;
  &:hover {
    color: red;
  }
`
export const Button = styled.button`
  margin: 1rem;
  background: #f03e3e;
  color: white;
  height: 2rem;
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
  ${(props) =>
    props.isFullWidth &&
    `
  width: 10rem;
  `}
  ${(props) =>
    props.isRegular &&
    `
  width: 5rem;
  `}
`

export const Dropdown = styled.div`
  z-index: 999999;
  background: white;
  position: fixed;
  right: 280px;
  top: 60px;
  display: ${(props) => (props.isActive ? 'block' : 'none')};

  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
`
