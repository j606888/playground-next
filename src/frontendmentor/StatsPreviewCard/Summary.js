import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  h4 {
    margin: 0;
    margin-bottom: 8px;
    color: #fff;
    font-size: 24px;
    font-family: 'Lexend Deca', sans-serif;
  }
  span {
    text-transform: uppercase;
    color: hsla(0, 0%, 100%, 0.6);
    font-family: 'Inter', sans-serif;
  }
`

const Summary = ({ count, name }) => {
  return (
    <Container>
      <h4>{ count }</h4>
      <span>{ name }</span>
    </Container>
  )
}

export default Summary
