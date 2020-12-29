import React from 'react'
import styled from 'styled-components'
import { DesktopFooter } from './Components'
import { MobileFooter } from './Components'

export const Footer = ({ data }) => {
  const ResourcesBannerData = [
    { id: 1, label: 'Top 100 Companies' },
    { id: 2, label: 'All Remote Companies' },
    { id: 3, label: 'WWR FAQ' },
    { id: 4, label: 'Newsletter' },
    { id: 5, label: 'Blog' },
    { id: 6, label: 'Learning Portal' },
    { id: 7, label: 'Forum' },
    { id: 8, label: 'RSS' },
  ]

  const BannerResourcesData = [
    { id: 1, label: 'Copyright © 2020' },
    { id: 2, label: 'Terms' },
    { id: 3, label: 'Privacy' },
    { id: 4, label: 'Guidelines' },
  ]

  const MobileFooterData = [
    { id: 1, label: 'Top 100 Companies' },
    { id: 2, label: 'All Remote Companies' },
    { id: 3, label: 'WWR FAQ' },
    { id: 4, label: 'Newsletter' },
    { id: 5, label: 'Blog' },
    { id: 6, label: 'Learning Portal' },
    { id: 7, label: 'Forum' },
    { id: 8, label: 'RSS' },
    { id: 9, label: 'Terms' },
    { id: 10, label: 'Privacy' },
    { id: 11, label: 'Guidelines' },
  ]

  const footerData = {
    name: 'We work remotely',
    anchor: 'Get in touch',
    number: '19 000',
    job: 'Remote jobs posted',
    button: 'Post a job',
    bottom: 'Back to top ↑',
    text:
      'We strongly encourage employers to embrace diversity, equity, and inclusion as fundamental values when hiring through We Work Remotely.',
  }

  const DataMobile = {
    total: '15,511',
    span: 'Job Posted',
    copy: ' Copyright © 2020 ',
  }

  return (
    <div>
      <FooterContainer>
        <DesktopFooter
          ResourcesBannerData={ResourcesBannerData}
          BannerResourcesData={BannerResourcesData}
          footerData={footerData}
        />

        <MobileFooter
          MobileFooterData={MobileFooterData}
          DataMobile={DataMobile}
        ></MobileFooter>
      </FooterContainer>
    </div>
  )
}

export default Footer

const FooterContainer = styled.div`
  text-size-adjust: 100%;
  color: #9b9b9b;
  background: #212529;
  overflow: hidden;
  width: 100vw;
  flex-direction: column;

  @media (max-width: 600px) {
    text-align: center;
    padding-bottom: 1rem;
  }
`
