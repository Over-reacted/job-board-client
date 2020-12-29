import React from 'react'
import styled from 'styled-components'
import { Post } from './Components'

const mockData = [
  {
    id: 1,
    user: 'RandomUser',
    title: 'Нужда от компютър',
    contact: '0888888888',
    city: 'гр. Пловдив',
    category: 'computer',
    isNew: true,
  },
  {
    id: 2,
    user: 'Sasho Dimitrov',
    title: 'Нужда от телефон',
    contact: '0999999999',
    city: 'гр. София',
    category: 'phone',
    isNew: false,
  },
  {
    id: 3,
    user: 'Petur Raychev',
    title: 'Нужда от таблет',
    contact: '077777777',
    city: 'гр. София',
    category: 'tablet',
    isNew: true,
  },
  {
    id: 4,
    user: 'RandomUser',
    title: 'Нужда от компютър',
    contact: '0888888888',
    city: 'гр. Пловдив',
    category: 'computer',
    isNew: true,
  },
  {
    id: 5,
    user: 'Sasho Dimitrov',
    title: 'Нужда от телефон',
    contact: '0999999999',
    city: 'гр. София',
    category: 'phone',
    isNew: false,
  },
  {
    id: 6,
    user: 'Petur Raychev',
    title: 'Нужда от таблет',
    contact: '077777777',
    city: 'гр. София',
    category: 'tablet',
    isNew: true,
  },
]

export const AdList = () => {
  return (
    <ListContainer>
      <Article>
        <List>
          {mockData.map((adPost) => {
            return <Post adPost={adPost} key={adPost.id}></Post>
          })}
        </List>
      </Article>
    </ListContainer>
  )
}

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

const Article = styled.article`
  clear: both;
  margin-bottom: 5rem;
  text-size-adjust: 100%;
`

const ListContainer = styled.div`
  margin: 0 auto;
  max-width: 95rem;

  @media only screen and (max-device-width: 480px) {
    width: auto;
  }

  @media only screen and (max-device-width: 1024px) {
    max-width: 90rem;
  }

  @media only screen and (max-device-width: 480px) {
    padding: 1rem 3rem;
  }
`
