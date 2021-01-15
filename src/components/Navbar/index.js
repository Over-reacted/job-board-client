import React, { useState, useRef } from 'react'
import { MobileNav, SearchBar, DesktopNav } from './Components'
import { Modal } from './Components/Modal/'
import { useClickOutside } from '../../hooks'

export const Navbar = () => {
  const navig = [
    {
      id: 0,
      label: 'Home',
      description: 'Welcome to OverReacted',
      href: '/home',
    },
    {
      id: 1,
      label: 'Categories',
      description: 'Choose a category',
      href: '/categories',
    },
    {
      id: 2,
      label: 'Contacts',
      description: 'How to reach us',
      href: '/contact',
    },
  ]


  const [searchBar, setSearchBar] = useState(false)
  const [signIn, setSignIn] = useState(false)
  const[isLoggedIn, setIsLoggedIn] = useState(true)

  const searchContainerRef = useRef(null)
  useClickOutside(searchContainerRef, () => setSearchBar(false))

  return (
    <>
      {signIn && <Modal handleClose={() => setSignIn(false)} />}

      <MobileNav isLoggedIn={isLoggedIn} setSignIn={() => setSignIn(true)} />
      <div ref={searchContainerRef}>
        <DesktopNav
          showSearchBar={setSearchBar}
          data={navig}
          isLoggedIn={isLoggedIn}
          signIn={signIn}
          setSignIn={setSignIn}
        />
        <SearchBar showSearch={searchBar} />
      </div>

    </>
  )
}
