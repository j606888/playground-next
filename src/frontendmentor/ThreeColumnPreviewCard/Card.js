/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  background-color: ${(props) => props.bgColor};
  min-width: 200px;
  max-width: 320px;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  font-size: 15px;

  h2 {
    color: white;
    font-family: "Big Shoulders Display";
    font-weight: 700;
    font-size: 40px;
    text-transform: uppercase;
  }

  p {
    display: inline-block;
    line-height: 200%;
    font-family: "Lexend Deca";
    color: hsla(0, 0%, 100%, 0.75);
    margin-bottom: 5rem;
    min-height: 10rem;
  }

  @media only screen and (max-width: 960px) {
    max-width: 360px;
    min-width: 280px;
    padding: 2rem;
    
    h2 {
      margin: 2rem 0;
    }

    p {
      min-height: 0;
      margin: 0 0 2rem 0;
    }
  }
`
const Button = styled.button`
  background-color: white;
  padding: 1rem 2.5rem;
  font-size: 18px;
  color: ${(props) => props.color};
  border: 2px solid ${(props) => props.color};
  border-radius: 32px;

  &:hover {
    border: 2px solid white;
    background-color: ${props => props.color};
    color: white;
    cursor: pointer;
  }
`

const Card = ({ bgColor, brand, content }) => {
  return (
    <Container bgColor={bgColor}>
      <img src={`/icon-${brand}.svg`} alt={brand} width={64} />
      <h2>{brand}</h2>
      <p>{content}</p>
      <div>
        <Button color={bgColor}>Learn More</Button>
      </div>
    </Container>
  )
}

export default Card
