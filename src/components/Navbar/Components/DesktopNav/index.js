import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useClickOutside } from '../../../../hooks'

export const DesktopNav = ({
  showSearchBar,
  data,
  setSignIn,
  isLoggedIn,
  setIsLoggedIn
}) => {
  const profileDropDownRef = useRef(null)
  useClickOutside(profileDropDownRef, () => setShowProfileDropDown(false))

  const [showDropdown, setShowDropdown] = useState(false)
  const [showProfileDropDown, setShowProfileDropDown] = useState (false)

  const DropdownData = [
    { id: 1, label: 'PC', href: './pc' },
    { id: 2, label: 'Laptops', href: './laptops' },
    { id: 3, label: 'Consoles', href: './consoles' },
    { id: 4, label: 'Mobiles', href: './mobiles' },
  ]
  const ProfileDropDownData =[
    { id: 1, label: 'My Profile', href: './profile' },
    { id: 2, label: 'My Jobs', href: './posted-jobs' },
    { id: 3, label: 'Applications', href: './applications' },
    { id: 'line', label: '-------------------------' },
    { id: 'logout', label: 'Log Out', click: () => {setIsLoggedIn(false); setSignIn(false)} },
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
                <Dropdown isLoggedIn={isLoggedIn} isActive={showDropdown}>
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
        {!isLoggedIn && <Button isRegular onClick={() => setSignIn(true)}>
          <strong>Sign In</strong>
        </Button>}
        {isLoggedIn &&
        <div onMouseLeave={() => setShowProfileDropDown(false)}>
          <ProfilePic onMouseEnter={() => setShowProfileDropDown(true)}></ProfilePic>
          <ProfileDropDown isActive={showProfileDropDown} >
          {ProfileDropDownData.map((dropItem) => {
                    return (
                      <Item key={dropItem.id} Dropdown>
                        <NavigationItem
                        id={dropItem.id}
                        onClick={dropItem.click}
                        Dropdown>
                          {dropItem.label}
                        </NavigationItem>
                      </Item>
                    )
                  })}
          </ProfileDropDown>
        </div>}
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
  height: 80px;
  width: 80px;
  margin-right: auto;

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
  cursor:${props => props.id != 'line' ? 'pointer' : 'default' } ;
  padding: ${props => props.id != 'line' ? '14px 16px' : '0px 5px' } ;;
  font-size: 17px;
  &:hover {
    color: ${(props) => (props.Dropdown  ? 'black' : 'red')};
    font-weight: ${(props) => (props.Dropdown && (props.id != 'line') ? 600 : 'normal')};
  }
  overflow: hidden;
  ${(props) =>
    props.Dropdown &&
    `
    text-align: left;
    width: fit-content;
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
  ${props => props.isMobile &&`
    font-size: 0.8rem;
    padding: 0 5px;
  `}
`
export const ProfilePic = styled.div`
width: 40px;
height: 40px;
margin-top: 13px;
border-radius: 50%;
cursor:pointer;
  content:url(https://i.pinimg.com/originals/83/46/bc/8346bcb80380e7f21ba1d7ab8b570d85.png);
`

export const Dropdown = styled.div`
  z-index: 999999;
  background: white;
  width: 110px;
  position: fixed;
  right:${props => props.isLoggedIn ? "375px": "445px"};
  top: 60px;
  display: ${(props) => (props.isActive ? 'block' : 'none')};

  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
`
export const ProfileDropDown = styled.div`
  z-index: 999999;
  background: white;
  position: fixed;
  width: 130px;
  right:90px;
  top: 70px;
  display: ${(props) => (props.isActive ? 'block' : 'none')};

  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
`
