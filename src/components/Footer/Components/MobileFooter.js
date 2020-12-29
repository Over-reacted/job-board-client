import React from 'react'
import styled from 'styled-components'

export const MobileFooter = ({ MobileFooterData, DataMobile }) => {
  return (
    <Container>
      {MobileFooterData.map((element) => (
        <AnchorMobile key={element.id}>
          {element.label}
          <br />
        </AnchorMobile>
      ))}

      <br />
      <br />

      <HTotal>{DataMobile.total}</HTotal>
      <Span>{DataMobile.span}</Span>

      <br />
      <br />
      <br />

      <LiMobile>{DataMobile.copy}</LiMobile>
    </Container>
  )
}

const AnchorMobile = styled.a`
  text-align: center;
  cursor: pointer;
  color: #f8f9fa;
  line-height: 3rem;
  font-size: 1.2em;
`

const LiMobile = styled.a`
  color: #fff;
  font-size: 1rem;
`

const Container = styled.div`
  @media (min-width: 768px) {
    display: none;
  }
`

const HTotal = styled.b`
  margin-right: 1rem;
  font-size: 1rem;
  color: #f8f9fa;
`

const Span = styled.b`
  color: #f8f9fa;
  font-size: 1rem;
`
