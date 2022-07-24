import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Overpass", sans-serif;
  }

  display: flex;
  width: 345px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 18px;
  background: linear-gradient(hsl(213, 19%, 18%), hsl(216, 12%, 8%));
  border-radius: 12px;
  padding: 48px 28px;
  font-size: 15px;

  h1 {
    color: #fff;
    font-weight: 400;
  }

  p {
    color: hsl(216, 12%, 54%);
    line-height: 150%;
  }

  img {
    margin-bottom: 12px;
  }

  span {
    color: hsl(25, 97%, 53%);
    background-color: hsl(213, 19%, 20%);
    border-radius: 16px;
    padding: 6px 18px;
    margin-bottom: 12px;
  }
`
const Thankyou = ({score}) => {
  return (
    <Container className="center">
      <link
        href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <img src="/illustration-thank-you.svg" alt="thankyou" width="160" />
      <span>You selected {score} out of 5</span>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </Container>
  )
}

export default Thankyou
