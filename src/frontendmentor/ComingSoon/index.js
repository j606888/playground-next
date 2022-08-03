/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled, { createGlobalStyle } from "styled-components"

const ResetStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
  }
`
const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
`

const Container = styled.div`
  background: linear-gradient(135deg, hsl(0, 0%, 100%), hsl(0, 100%, 98%));
  width: 100%;
  display: flex;
  flex-direction: column;

  .logo {
    margin: 1rem;

    img {
      height: 24px;
    }
  }

  .hero-image {
    height: 240px;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      vertical-align: middle;
    }
  }

  .content {
    text-align: center;
    padding: 1.2rem;

    h1 {
      font-size: 2.5rem;
      text-transform: uppercase;
      font-weight: 600;
      margin: 2rem 0 1rem;
      line-height: 110%;
      letter-spacing: 12px;
      color: hsl(0, 6%, 24%);

      span {
        font-size: 2.5rem;
        font-weight: 300;
        color: hsl(0, 36%, 70%);
      }
    }

    p {
      color: hsl(0, 36%, 70%);
      line-height: 150%;
      font-weight: 400;
      margin-bottom: 2rem;
    }

    form {
      position: relative;
    }
  }

  .hero-image-desktop {
    display: none;
  }

  @media only screen and (min-width: 960px) {
    flex-direction: row;

    .content-wrapper {
      padding: 3rem 6rem;
    }
    .content {
      margin-top: 3rem;
      text-align: left;
      width: 70%;
    }

    .hero-image {
      display: none;
    }

    .hero-image-desktop {
      display: block;
      height: 100%;
      width: 44%;
    }
  }
`

const InputWrapper = styled.div`
  &::before {
    content: url(/coming-soon/icon-error.svg);
    width: 20px;
    height: 20px;
    position: absolute;
    right: 6rem;
    top: 50%;
    transform: translateY(-50%);
    display: ${(props) => (!props.isValid && props.isFocus ? "block" : "none")};
  }

  &::after {
    content: "Please provide a valid email";
    position: absolute;
    bottom: -1.5rem;
    left: 1.5rem;
    font-size: 12px;
    color: red;
    display: ${(props) =>
      !props.isValid && props.isFocus ? "block" : "none"};
  }
`
const InputContainer = styled.input`
  width: 100%;
  border: 1px solid
    ${(props) => !props.isValid && props.isFocus ? "red" : "hsl(0, 20%, 80%)"};
  border-radius: 24px;
  height: 48px;
  line-height: 48px;
  padding-left: 1.5rem;
  color: hsl(0, 6%, 24%);
  background-color: inherit;
  display: relative;

  outline: none;
  &::placeholder {
    color: hsl(0, 20%, 80%);
  }
`

const EmailInput = () => {
  const [isValid, setIsValid] = React.useState(false)
  const [isFocus, setIsFocus] = React.useState(false)
  const [email, setEmail] = React.useState(null)

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email)
  }

  function handleChange(event) {
    setEmail(event.target.value)
  }

  React.useEffect(() => {
    setIsValid(isValidEmail(email))
  }, [email])

  return (
    <InputWrapper isValid={isValid} isFocus={isFocus}>
      <InputContainer
        placeholder="Email Address"
        type="email"
        required
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        isValid={isValid}
        isFocus={isFocus}
        onChange={handleChange}
      ></InputContainer>
    </InputWrapper>
  )
}
const Button = styled.button`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  height: 48px;
  padding: 0 2rem;
  border: none;
  border-radius: 24px;
  background: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  &:hover {
    cursor: pointer;
    background: linear-gradient(135deg, hsl(0, 40%, 90%), hsl(0, 80%, 86%));
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  }
`


const ComingSoon = () => {
  return (
    <Wrapper>
      <ResetStyle />
      <Container>
        <div className='content-wrapper'>
          <div className="logo">
            <img src="/coming-soon/logo.svg" alt="logo" />
          </div>
          <div className="hero-image">
            <img src="/coming-soon/hero-mobile.jpg" alt="hero" />
          </div>
          <div className="content">
            <h1>
              <span>We&apos;re</span> coming soon
            </h1>
            <p>
              Hello fellow shoppers! We&apos;re currently building our new
              fashion store. Add your email below to stay up-to-date with
              announcements and our launch deals.
            </p>
            <form>
              <EmailInput />
              <Button>
                <img src="/coming-soon/icon-arrow.svg" alt="arrow" />
              </Button>
            </form>
          </div>
        </div>
        <div className='hero-image-desktop'>
          <img src="/coming-soon/hero-desktop.jpg" alt="hero" />
        </div>
      </Container>
    </Wrapper>
  )
}

export default ComingSoon
