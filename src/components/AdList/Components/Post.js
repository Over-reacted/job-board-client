import React from 'react'
import styled from 'styled-components'

export const Post = ({ adPost }) => {
  return (
    <ListEnt>
      {adPost.isNew ? (
        <>
          <New>New</New>
          <Highlight />
        </>
      ) : (
        <></>
      )}
      <Tooltip>
        <Img />
      </Tooltip>
      <PostUrl>
        <Span>{adPost.user}</Span>
        <br />
        <Title>{adPost.title}</Title>
        <br />
        <Span>{adPost.city}</Span>
      </PostUrl>
    </ListEnt>
  )
}

const ListEnt = styled.li`
  display: list-item;
  margin-bottom: 0.8rem;
  position: relative;
  padding: 1.8rem 1rem 1.8rem 1rem;
  border: none;
  background-color: rgba(0, 170, 255, 0.2);

  @media only screen and (max-device-width: 480px) {
    padding: 3rem 1rem;
  }
`

const Tooltip = styled.div`
  position: absolute;
  display: inline-block;

  @media only screen and (max-device-width: 1024px) {
    display: none;
  }

  @media only screen and (max-device-width: 480px) {
    display: none;
  }
`
const Img = styled.div`
  background: white
    url('https://we-work-remotely.imgix.net/logos/0017/0021/logo.gif?ixlib=rails-4.0.0&w=50&h=50&dpr=2&fit=fill&auto=compress')
    center center/contain no-repeat;
  border: 0.1rem solid black;
  position: absolute;
  left: -3.5rem;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  margin-top: 1.5rem;
  display: inline-block;
`
const PostUrl = styled.a`
  text-decoration: none;
  border-bottom-style: none;
`

const Span = styled.span`
  cursor: pointer;
  font-size: 1rem;
  margin-left: 2.5rem;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  max-width: calc(100% - 2.5rem);
  text-decoration: none;
  color: black;
`

const Title = styled.span`
  cursor: pointer;
  margin: 0.8rem 1rem 0.8rem 2.5rem;
  vertical-align: middle;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: inline-block;
  max-width: calc(100% - 2.5rem);
  text-decoration: none;
  color: black;
  font-weight: bold;
`
const New = styled.span`
  padding: 0.6rem 0.8rem 0.3rem 0.8rem;
  margin: 0;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: black;
  background-color: rgb(0, 170, 255);
  top: 4rem;
  left: 84.2rem;
  position: absolute;
  float: right;
  border-radius: 0.3rem;

  @media only screen and (max-width: 480px) {
    font-size: 1rem;
    left: calc(100% - 25%) !important;
    margin-top: 1.2rem;
  }

  @media only screen and (max-width: 1175px) {
    left: calc(100% - 10%);
  }
`

const Highlight = styled.span`
  border-radius: 0.4rem;
  top: 0.8rem;
  left: 93rem;
  float: right;
  position: absolute;
  height: 8.8rem;
  border-left: 0.4rem solid rgb(0, 170, 255);

  @media only screen and (max-width: 1175px) {
    left: calc(100% - 1%);
  }

  @media only screen and (max-width: 480px) {
    left: calc(100% - 5%);
    height: 11.2rem;
  }
`
