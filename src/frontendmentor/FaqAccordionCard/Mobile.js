import React from "react"
import styled from "styled-components"
import FaqAccordionCard from "."

const Container = styled.div`
  background: linear-gradient(hsl(273, 75%, 66%), hsl(240, 73%, 65%));
  min-height: 100vh;
  margin: 0 auto;
  padding: 2rem 1px;
`

const Desktop = () => {
  return (
    <Container>
      <FaqAccordionCard />
    </Container>
  )
}

export default Desktop
