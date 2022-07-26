import React from 'react'
import styled from 'styled-components'
import FaqAccordionCard from '.'

const Container = styled.div`
  background: linear-gradient(hsl(273, 75%, 66%), hsl(240, 73%, 65%));
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Desktop = () => {
  return (
    <Container>
      <FaqAccordionCard />
    </Container>
  )
}

export default Desktop
