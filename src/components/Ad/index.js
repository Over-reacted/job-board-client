import styled from 'styled-components'
import { Card } from './Components'

export const Ad = () => {
  return (
    <div>
      <Card
        logoUrl="https://crhscountyline.com/wp-content/uploads/2020/03/Capture.png"
        title="Job Title"
        location="Berlin"
        websiteUrl="https://google.com/"
        adsPosted={55}
      />
    </div>
  )
}
