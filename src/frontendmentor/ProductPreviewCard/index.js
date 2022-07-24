/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Card from './Card'
import styled from '@emotion/styled'

const Container = styled.div`
  width: 560px;
  display: flex;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;

  & > div {
    flex: 1;
  }

  & img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

const ProductPreviewCard = () => {
  return (
    <Container>
      <div>
        <img src="/product.jpg" alt="product" />
      </div>
      <div>
        <Card />
      </div>
    </Container>
  )
}

export default ProductPreviewCard
