import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const Container = styled.div`
  display: inline-flex;
  border-radius: 16px;
  overflow: hidden;
`

const Information = [
  {
    bgColor: "hsl(31, 77%, 52%)",
    brand: "sedans",
    content:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  {
    bgColor: "hsl(184, 100%, 22%)",
    brand: "suvs",
    content:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  {
    bgColor: "hsl(179, 100%, 13%)",
    brand: "luxury",
    content:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  },
]
const ThreeCard = () => {
  return (
    <Container>
      {Information.map((info) => (
        <Card key={info.brand} {...info} />
      ))}
    </Container>
  )
}

export default ThreeCard
