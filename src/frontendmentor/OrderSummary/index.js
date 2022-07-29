import React from 'react'
import styled from 'styled-components'
import Plan from './Plan'

const Container = styled.div`
  * {
    font-family: "Red Hat Display", sans-serif;
    font-size: 16px;
    box-sizing: border-box;
  }

  width: 420px;
  border-radius: 12px;
  overflow: hidden;

  img {
    width: 100%;
    display: block;
  }
`

const Content = styled.div`
  padding: 32px;
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 32px;
    font-weight: 800;
    margin: 12px;s
  }

  p {
    color: #757575;
    font-weight: 500;
    line-height: 160%;
  }

  a {
    font-weight: 800;
    color: #757575;
    text-decoration: none;

    &:hover {
      color: #444;
    }
  }
`

const PaymentButton = styled.button`
  width: 100%;
  color: white;
  background-color: hsl(245, 75%, 52%);
  padding: 12px 0;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  box-shadow: 0 4px 16px hsl(245, 75%, 52%);
  margin: 32px 0;
  transition: all 0.1s ease-in;

  &:hover {
    cursor: pointer;
    background-color: #673ab7;
    box-shadow: 0 4px 16px #673ab7;
  }
`

const OrderSummary = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@500;700;900&display=swap"
        rel="stylesheet"
      />

      <Container>
        <img src="illustration-hero.svg" alt="hero" />
        <Content>
          <h1>Order Summary</h1>
          <p>
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>
          <Plan />
          <PaymentButton>Proceed to Payment</PaymentButton>
          <a href="#">Cancel Order</a>
        </Content>
      </Container>
    </>
  )
}

export default OrderSummary
