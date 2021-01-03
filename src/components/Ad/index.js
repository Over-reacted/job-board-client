import styled from 'styled-components'
import { Title, AdPostedDate, Description } from './Components'
import { Card, Button, Tag } from './Components'

import { Flex, FlexItem } from '../../utilities/Flex'
import { Navbar } from '../../components/Navbar'
import { Margin } from '../../utilities/Margin'

const AdWrapper = styled.article`
  max-width: 95rem;
  margin: 0 auto;
`

export const Ad = () => {
  return (
    <AdWrapper>
      <Navbar />
      <Flex justifyBetween>
        <FlexItem>
          <Button variant="arrow" arrowDir="left">
            Back to all jobs
          </Button>
        </FlexItem>
        <FlexItem>
          <Button variant="arrow" arrowDir="right">
            Back to all jobs
          </Button>
        </FlexItem>
      </Flex>
      <Flex>
        <FlexItem basis="65%">
          <Margin top={4}>
            <AdPostedDate>Posted Jan 1</AdPostedDate>
          </Margin>
          <Title>Backend Engineer</Title>
          <Margin top={4}>
            <Tag>Full-Time</Tag>
            <Tag>Programming</Tag>
            <Tag>Back-end</Tag>
            <Tag>USA Only</Tag>
          </Margin>
          <Margin top={5}>
            <Title>Backend Engineer</Title>
            <Margin top={2}>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ducimus, beatae? Amet accusantium nisi quidem cumque sit nihil
                quam facilis, accusamus, quibusdam id cum quasi debitis?
                Voluptatem in neque explicabo impedit. Lorem ipsum dolor sit
                amet consectetur, adipisicing elit. Ipsum voluptate distinctio
                quibusdam dolorum! Vel eaque nesciunt aperiam odit, dicta
                adipisci natus nostrum eius, architecto ut veniam pariatur
                ducimus quidem nobis? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Hic iste aut quisquam architecto non
                voluptate, ipsam exercitationem molestiae repudiandae corrupti.
                Voluptates esse saepe exercitationem corporis, officia nulla
                minus consequatur in! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Labore quisquam adipisci quos possimus
                corrupti esse vel et. Eum veniam expedita asperiores sit, rem
                beatae mollitia dolorem obcaecati quis, rerum animi! Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Placeat nihil
                eius, expedita quisquam iure id necessitatibus quibusdam vitae
                ab dolor dolorem doloremque optio aliquam nulla assumenda
                aliquid, quo quaerat reiciendis?Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Quod distinctio hic veniam non
                dolor illum iure quibusdam iusto incidunt numquam repellendus
                dolore dicta voluptatum, itaque expedita voluptatem a. In, rem!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                reprehenderit maxime id praesentium, maiores eius ipsa veniam
                quidem cumque repellendus. Deserunt quis amet ab dolores debitis
                quaerat nisi, vel vitae.
              </Description>
            </Margin>
          </Margin>
        </FlexItem>
        <FlexItem basis="40%">
          <Card
            logoUrl="https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png"
            title="Company Name"
            location="Phoenix, Arizona"
            websiteUrl="https://google.com/"
            adsPosted={3}
          />
        </FlexItem>
      </Flex>
      <Margin top={5}>
        <Button variant="block">Apply for this Position</Button>
      </Margin>
    </AdWrapper>
  )
}
