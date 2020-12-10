import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  font-weight: 900;
  color: #212529;
  font-size: 1.1rem;
  display: block;
  margin-bottom: 6px;
`

export const ListingTitle = ({ name, children }) => {
  return <Label htmlFor={name}>{children}</Label>
}
