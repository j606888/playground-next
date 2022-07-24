/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Content from './Content'
import styled from '@emotion/styled'

const Container = styled.div`
  box-sizing: border-box;
  width: 640px;
  display: flex;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;

  & > div {
    flex: 1;
  }

  .photo {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 640px) {
    flex-direction: column;
    width: 100%;
    margin: 20px;

    .photo {
      height: 280px;
    }
  }
`

const ProductPreviewCard = () => {
  return (
    <Container>
      <div>
        <img src="/product.jpg" alt="product" className='photo'/>
      </div>
      <div>
        <Content />
      </div>
    </Container>
  )
}

export default ProductPreviewCard
