import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  text-align: center;
  font-family: "Kumbh Sans", sans-serif;
  font-weight: 400;
  font-size: 18px;
  width: 120px;

  h3 {
    font-weight: 700;
    font-size: 24px;
    margin: 0 0 8px;
  }

  span {
    color: hsl(0, 0%, 59%);
    letter-spacing: 1px;
  }
`

const Detail = ({ title, count }) => {
  return (
    <Container>
      <h3>{ count }</h3>
      <span>{ title }</span>
    </Container>
  )
}

export default Detail
