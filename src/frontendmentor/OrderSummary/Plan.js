import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  * {
    font-family: "Red Hat Display", sans-serif;
    font-size: 16px;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  background: none;
  background-color: hsl(225, 100%, 98%);
  border-radius: 18px;
  padding: 32px;
  display: flex;
  gap: 28px;
  align-items: center;

  a {
    flex: 1;
    text-align: right;

    &:hover {
      color: #673ab7;
      text-decoration: none;
    }
  }
`
const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(224, 23%, 55%);
  border-radius: 50%;
  width: 36px;
  height: 36px;
`

const Description = styled.div`
  h4 {
    margin-bottom: 6px;
  }

  p {
    color: #999;
  }
`
const Plan = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap"
        rel="stylesheet"
      />
      <Container>
        <Icon>
          <img src="/icon-music.svg" alt="icon-music" />
        </Icon>
        <Description>
          {/* Ask what p should I use */}
          <h4>Annual Plan</h4>
          <p>$59.99/year</p>
        </Description>
        <a href="#">Change</a>
      </Container>
    </>
  )
}

export default Plan
