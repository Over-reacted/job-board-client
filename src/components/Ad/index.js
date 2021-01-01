import styled from 'styled-components'
import { Title, AdPostedDate } from './Components'
import { Card } from './Components'

const AdWrapper = styled.article`
  padding: 5rem 15rem;
`

export const Ad = () => {
  return (
    <AdWrapper>
      <AdPostedDate>Posted Dec 29</AdPostedDate>
      <Title>Marketing Director</Title>
    </AdWrapper>
  )
}
