import React from 'react'
import styled, { keyframes } from 'styled-components'

const Container = styled.div`
  display: flex;
  gap: 5rem;
  padding: 3rem;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg)
  }
`

const bob = keyframes`
  0% {
    transform: translate(0);
  }
  25% {
    transform: translateY(-2rem);
  }
  50% {
    transform: translate(0rem);
  }
  75% {
    transform: translateY(2rem);
  }
  100% {
    transform: translate(0);
  }
`

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: red;
`

const RotateBox = styled(Box)`
  animation: ${rotate} 3s linear infinite;
`

const BobBox = styled(Box)`
  background-color: blue;
  animation: ${bob} 3s linear infinite;
`

const Animations = () => {
  return (
    <Container>
      <RotateBox />
      <BobBox />
    </Container>
  )
}

export default Animations
