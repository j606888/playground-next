import React from 'react'
import OrderSummary from '../src/frontendmentor/OrderSummary'
import styled from 'styled-components'

const Container = styled.div`
  background-image: url("/pattern-background-mobile.svg");
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Demo = () => {
  return <Container><OrderSummary /></Container>
}

export default Demo
