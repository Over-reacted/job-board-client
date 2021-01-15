import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { useClickOutside } from '../../../../hooks'
import { Search } from '../SearchBar'
import { Button } from '../DesktopNav'

export const MobileNav = ({ setSignIn, isLoggedIn }) => {
  const [expand, setExpand] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  const expandedContainerRef = useRef(null)

  useClickOutside(expandedContainerRef, () => setExpand(false))

  return (
    <>
      <Logo
        onClick={() => setIsVisible(!isVisible)}
        isMobile
        alt="Logo"
        src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_469226.png&f=1&nofb=1"
      />
      {isVisible && (
        <>
          <Container isActive={isVisible}>
            <Search isMobile placeholder="Search Here..." />
            <Item ref={expandedContainerRef} >
              <MobileNavItem onClick={() => setExpand(!expand)}>
                Categories
                <FontAwesomeIcon icon={faPlus} />
              </MobileNavItem>
            </Item>
            <CategoriesExpand isActive={expand}>
              <Item >
                <MobileNavItem isExtended>Mobiles</MobileNavItem>
              </Item>
              <Item >
                <MobileNavItem isExtended>PC</MobileNavItem>
              </Item>
              <Item >
                <MobileNavItem isExtended>Laptops</MobileNavItem>
              </Item>
            </CategoriesExpand>

            <Item >
              <MobileNavItem>
                How to post an ad
                <FontAwesomeIcon icon={faAngleRight} />
              </MobileNavItem>
            </Item>

            <Item >
              <MobileNavItem>
                About us
                <FontAwesomeIcon icon={faAngleRight} />
              </MobileNavItem>
            </Item>
            <Item >
              <MobileNavItem>
                Community
                <FontAwesomeIcon icon={faAngleRight} />
              </MobileNavItem>
            </Item>
            {!isLoggedIn && <Button onClick={setSignIn} isMobile>Sign Up</Button>}
            {isLoggedIn && <ProfilePic></ProfilePic>}
          </Container>
        </>
      )}
    </>
  )
}

export const Container = styled.div`
  display: block;
  @media (min-width: 968px) {
    display: none;
  }
`
export const Logo = styled.img`
  &:hover {
    cursor: pointer;
  }
  padding: 10px;
  height: 50px;
  width: 50px;
  margin-right: auto;
  float: left;
  @media (min-width: 968px) {
    display: none;
  }
`

export const MobileNavig = styled.div`
  display: ${(props) => (props.isActive ? 'block' : 'none')};
  background: white;
  width: 100%;
`

export const MobileNavItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: 0.2s all;
  background: inherit;
  &:hover {
    box-shadow: 0 1px 5px rgba(10, 10, 10, 0.8);
    color: red;
  }
  width: 100%;
  height: 3.5rem;
  border: none;
  &:focus {
    outline: none;
  }
  margin: 0 5px;
  padding: 5px 15px 5px 5px;

  border-top: 1px solid #ccc;
  ${(props) =>
    props.isExtended &&
    `
    height: 3rem;
    width: 97%;
    margin: auto;

  `}
`
export const ProfilePic = styled.div`
width: 50px;
height: 50px;
margin-left: 1rem;
border-radius: 50%;
  content:url(https://i.pinimg.com/originals/83/46/bc/8346bcb80380e7f21ba1d7ab8b570d85.png);
`

// Need to add expand containers for all the menu items
export const CategoriesExpand = styled.div`
  display: ${(props) => (props.isActive == 1 ? 'block' : 'none')};
  background: inherit;
  padding: 10px 0;
`

export const Item = styled.li`
  padding: 0px;
  list-style: none;
`

