import React from 'react'
import styled from 'styled-components'

export const DesktopFooter = ({
  footerData,
  ResourcesBannerData,
  BannerResourcesData,
}) => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterLeft>
          <Work>{footerData.name}</Work>

          <br />
          <br />

          <Text>
            {footerData.text}
            <Anchor>{footerData.anchor}</Anchor>
          </Text>
        </FooterLeft>

        <FooterRight>
          <Number>{footerData.number}</Number>

          <Job>{footerData.job}</Job>

          <br />

          <Button>{footerData.button}</Button>

          <br />
          <br />

          <Bottom>
            {footerData.bottom}
            <br />
          </Bottom>
        </FooterRight>
      </FooterTop>

      <ResourcesBanner>
        <Resources>
          <Ul>
            <Li>
              <Anchor1>
                {ResourcesBannerData.map((element) => (
                  <span key={element.id}>
                    {element.label}
                    <Span>•</Span>
                  </span>
                ))}
              </Anchor1>
            </Li>
          </Ul>
        </Resources>
      </ResourcesBanner>

      <BannerResources>
        <Banner>
          <Ul1>
            <Li1>
              <Anchor2>
                {BannerResourcesData.map((element) => (
                  <span key={element.id}>
                    {element.label}
                    <Span2>•</Span2>
                  </span>
                ))}
              </Anchor2>
            </Li1>
          </Ul1>
        </Banner>
      </BannerResources>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  text-size-adjust: 100%;
  color: #9b9b9b;
  background: #212529;
  overflow: hidden;
  width: 100vw;
  flex-direction: column;

  @media (max-width: 600px) {
    text-align: center;
  }
`

const FooterLeft = styled.div`
  padding-top: 25px;
  flex-basis: 50%;
`

const FooterTop = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 600px) {
    text-align: center;
    flex-direction: column;
  }
`

const Work = styled.h1`
  font-size: 25px;
  color: rgba(255, 255, 255, 0.8);
`

const Text = styled.p`
  font-size: 20px;
  color: rgba(255, 255, 255, 0.8);
`

const Anchor = styled.div`
  cursor: pointer;
  color: #f03e3e;
  margin-top: 4px;
  line-height: 2.5;
  font-size: 16px;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    text-align: center;
    padding-right: 40px;
  }
`

const FooterRight = styled.div`
  color: #9b9b9b;
  display: block;
  float: right;
  padding-top: 25px;
  font-family: 'Neufile Grotesk Regular', sans-serif;
`

const Number = styled.div`
  text-align: right;
  font: 500 2rem 'Neufile Grotesk Semi Bold', sans-serif;
  color: #f8f9fa;

  @media (max-width: 600px) {
    display: none;
  }
`

const Job = styled.div`
  text-align: right;
  color: #f8f9fa;
  letter-spacing: 1px;
  font-size: 1.1em;

  @media (max-width: 600px) {
    display: none;
  }
`

const Button = styled.button`
  background-color: #f03e3e;
  color: #ffffff;
  border: none;
  padding: 15px 32px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  outline: none;
  text-align: center;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

const Bottom = styled.h1`
  text-align: right;
  cursor: pointer;
  color: #ffffff;
  font-size: 15px;

  @media (max-width: 600px) {
    display: none;
  }
`

const Li = styled.li`
  list-style-type: disc;
  display: flex;
  color: #fffafa; ;
`

const ResourcesBanner = styled.div`
  text-decoration: none;
  font-size: 30px;
  display: block;
  text-size-adjust: 100%;
  margin-top: 41px;
  box-shadow: 0px 0px 2px;
  top: 234px;
  background: #4d5154;
`

const Resources = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  background: #696969;

  @media (max-width: 600px) {
    display: none;
  }
`

const Ul = styled.ul`
  font-size: 15px;
  display: inline-flex;
`

const Span = styled.span`
  font-family: 'Neufile Grotesk Regular', sans-serif;
  color: #f8f9fa;
  padding: 10px;

  @media (max-width: 600px) {
    display: none;
  }
`

const Anchor1 = styled.div`
  cursor: pointer;
  color: #fffafa;

  &:hover {
    opacity: 0.7;
  }
`

const BannerResources = styled.div`
  font-family: 30px 'Neufile Grotesk Regular', sans-serif;
  display: block;
  background: #fffafa;
  top: 235px;
  padding-right: 10px;
  width: 110%;

  @media (max-width: 600px) {
    display: none;
  }
`

const Banner = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    display: none;
  }
`

const Ul1 = styled.ul`
  font-size: 10px;
  padding-right: 100px;
  display: flex;
  justify-content: center;
  color: #000000;
`

const Li1 = styled.li`
  text-size-adjust: 100%;
  display: flex;
  color: #000000;
`

const Anchor2 = styled.div`
  cursor: pointer;
  font-size: 10px;
  color: #000000;

  &:hover {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    display: none;
  }
`

const Span2 = styled.span`
  color: #000000;
  padding: 0 24px 0 24px;
`
