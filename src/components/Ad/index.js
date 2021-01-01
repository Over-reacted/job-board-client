import styled from 'styled-components'
import { Button } from './Components'

export const Ad = () => {
  return (
    <div>
      <Button variant="block">Hello World</Button>
      <Button variant="arrow" arrowDir="left">
        Click here to see more
      </Button>
    </div>
  )
}
