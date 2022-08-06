/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const ResetStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-family: 'Open Sans', sans-serif;
    color: white;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background: url("/huddle/bg-mobile.svg") no-repeat hsl(257, 40%, 49%);
  background-size: 100%;
`
const Container = styled.div`
  padding: 2rem;

  .logo {
    height: 2rem;
    margin-bottom: 3rem;

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  .hero {
    margin-bottom: 3rem;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .content {
    text-align: center;

    h2 {
      font-size: 1.6rem;
      margin-bottom: 1.5rem;
    }

    p {
      font-weight: 400;
      line-height: 150%;
      margin-bottom: 1.5rem;
    }

    button {
      color: hsl(257, 40%, 49%);
      padding: 0.7rem 5rem;
      border-radius: 24px;
      border: none;
      background-color: white;
      box-shadow: 0 2px 12px rgba(0,0,0,0.3);
    }
  }
`

const Huddle = () => {
  return (
    <Wrapper>
      <ResetStyle />
      <Container>
        <div className="logo">
          <img src="/huddle/logo.svg" alt="logo" />
        </div>
        <div className="hero">
          <img src="/huddle/illustration-mockups.svg" alt="mockup" />
        </div>
        <div className="content">
          <h2>Build The Community Your Fans Will Love</h2>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button>Register</button>
          <footer>
            f
            <img src="huddle/facebook-f-brands.svg" alt="facebook" />
            f
          </footer>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Huddle
