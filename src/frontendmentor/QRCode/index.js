/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'



const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: hsl(212, 45%, 89%);
  width: 100%;
  min-height: 100vh;

  * {
    margin: 0;
    padding: 0;
    font-family: "Outfit", sans-serif;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: white;
  padding: 1rem;
  border-radius: 12px;
  max-width: 20rem;
  text-align: center;

  img {
    border-radius: 12px;
    width: 100%;
  }

  .content {
    padding: 1.5rem;
  }

  h2 {
    color: hsl(218, 44%, 22%);
    margin-bottom: 1.5rem;
    line-height: 150%;
  }

  p {
    color: hsl(220, 15%, 55%);
    line-height: 150%;
  }
`

const QRCode = () => {
  return (
    <Container>
      <Card>
        <img src="/qr-code/image-qr-code.png" alt="qr-code" />
        <div className='content'>
          <h2>Improve your front-end skills by building projects</h2>
          <p>
            Scan the QR code to visit Frontend Mentor and take your coding skills
            to the next level
          </p>
        </div>
      </Card>
    </Container>
  )
}

export default QRCode
