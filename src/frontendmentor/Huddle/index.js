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
      box-shadow: 0 2px 12px rgba(0, 0, 0, 0.3);

      &:hover {
        background-color: hsl(300, 69%, 71%);
        color: white;
        cursor: pointer;
      }
    }
  }

  footer {
    margin: 5rem auto 3rem;
    display: flex;
    justify-content: center;
    gap: 12px;

    i {
      border: 1px solid white;
      height: 32px;
      width: 32px;
      border-radius: 50%;
      line-height: 32px;

      &:hover {
        color: hsl(300, 69%, 71%);
        border-color: hsl(300, 69%, 71%);
        cursor: pointer;
      }
    }
  }

  @media only screen and (min-width: 960px) {
    .box {
      display: flex;

      .right {
        width: 40%;
        padding: 3rem 0 0 2rem;
      }
    }

    footer {
      position: absolute;
      right: 4rem;
      bottom: 0;
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
        <div className="box">
          <div className="hero">
            <img src="/huddle/illustration-mockups.svg" alt="mockup" />
          </div>
          <div className='right'>
            <div className="content">
              <h2>Build The Community Your Fans Will Love</h2>
              <p>
                Huddle re-imagines the way we build communities. You have a voice,
                but so does your audience. Create connections with your users as you
                engage in genuine discussion.
              </p>
              <button>Register</button>
              <footer>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
              </footer>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  )
}

export default Huddle
