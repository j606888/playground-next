import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const greyColor = "hsl(228, 12%, 48%)"
const greenColor = "hsl(158, 36%, 37%)"
const CardContainer = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 32px;

  h5 {
    letter-spacing: 3px;
    color: ${greyColor};
    font-weight: 300;
  }
  h2 {
    font-family: "Fraunces", serif;
    font-size: 32px;
  }
  p {
    color: ${greyColor};
    line-height: 160%;
    font-size: 14px;
  }
`

const Button = styled.button`
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #fff;
  background-color: ${greenColor};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  gap: 12px;
  cursor: pointer;

  &:hover {
    background-color: hsl(212, 21%, 14%);
  }
`

const Pricing = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  .current-price {
    color: ${greenColor};
    font-family: "Fraunces", serif;
    font-size: 36px;
    margin-right: 20px;
  }
  .original-price {
    color: hsl(228, 12%, 48%);
    text-decoration: line-through;
  }
`

const Card = () => {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Montserrat:wght@500;700&display=swap" rel="stylesheet" />
      <CardContainer>
        <h5>PERFUME</h5>
        <h2>Gabrielle Essence Eau De Parfum</h2>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <Pricing>
          <span className="current-price">$149.99</span>
          <span className="original-price">$169.99</span>
        </Pricing>
        <Button>
          <Image src="/icon-cart.svg" alt="icon-card" width={16} height={16} />
          Add to Cart
        </Button>
      </CardContainer>
    </>
  )
}

export default Card
