import React from "react"
import Card from "../../src/frontendmentor/ProductPreviewCard"
import styled from "styled-components"

const Container = styled.div`
  min-height: 100vh;
  background-color: hsl(30, 38%, 92%);
  display: flex;
  align-items: center;
  justify-content: center;
`

const ProductReviewCard = () => {
  return (
    <Container>
      <Card />
    </Container>
  )
}

export default ProductReviewCard
