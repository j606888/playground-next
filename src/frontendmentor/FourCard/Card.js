import React from 'react'
import styled from 'styled-components'

const COLOR_MAP = {
  red: "hsl(0, 78%, 62%)",
  cyan: "hsl(180, 62%, 55%)",
  orange: "hsl(34, 97%, 64%)",
  blue: "hsl(212, 86%, 64%)",
}

const Container = styled.div`
  font-family: "Poppins", sans-serif;
  max-width: 360px;
  padding: 2rem;
  text-align: left;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
    rgba(0, 0, 0, 0.04) 0px 10px 10px -5px;
  border-top: 5px solid ${(props) => COLOR_MAP[props.color]};

  h2 {
    margin: 0 0 1rem 0;
    font-weight: 600;
    color: hsl(234, 12%, 34%);
  }

  p {
    margin-bottom: 2rem;
    color: hsl(229, 6%, 66%);
    line-height: 180%;
  }

  img {
    display: block;
    margin-left: auto;
    width: 74px;
  }
`

const Card = ({color, children}) => {
  return (
    <Container color={color}>
      {children}
    </Container>
  )
}

export default Card
