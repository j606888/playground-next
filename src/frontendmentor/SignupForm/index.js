import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Input from './Input'

const ResetStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
`
const Container = styled.div`
  background: url('signup-form/bg-intro-mobile.png'), ${(props) =>
    props.theme.red};
  min-height: 100vh;
  padding: 1px;
  padding-bottom: 6rem;
  color: white;
`

const Content = styled.div`
  margin-top: 5rem;

  .hero {
    text-align: center;
    padding: 0 3rem;

    h1 {
      margin-bottom: 2rem;
      font-weight: 600;
    }

    p {
      margin-bottom: 4rem;
    }
  }

  .cta {
    padding: 0 2rem;
  }

  .banner {
    text-align: center;
    margin: 1rem auto;
    background-color: ${(props) => props.theme.blue};
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    box-shadow: 0 8px 0 rgb(0 0 0 / 20%);
    transition: all 0.3s ease-in;

    &:hover {
      background-color: #7165c3;
    }

    span {
      font-weight: 600;
    }
  }
`

const Form = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 0 rgb(0,0,0,20%);

  p {
    color: ${(props) => props.theme.grayishBlue};
    font-size: 14px;
    padding: 0 2rem;
    text-align: center;
  }

  a {
    text-decoration: none;
    font-weight: 700;
    color: ${(props) => props.theme.red};
  }
`

const Button = styled.button`
  color: white;
  background-color: ${(props) => props.theme.green};
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.darkGreen};
  border-bottom: 3px solid ${(props) => props.theme.darkGreen};
  text-transform: uppercase;
  letter-spacing: .5px;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    background-color: #5bcc9b;
    border-color: ${(props) => props.theme.green};
  }
`

const theme = {
  red: "hsl(0, 100%, 74%)",
  green: "hsl(154, 59%, 51%)",
  darkGreen: "#6BC39E",
  blue: "hsl(248, 32%, 49%)",
  darkBlue: "hsl(249, 10%, 26%) ",
  grayishBlue: "hsl(246, 25%, 77%)",
}

const index = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <ResetStyle />
        <Content>
          <div className="hero">
            <h1>Learn to code by watching others.</h1>
            <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>
          <div className="cta">
            <div className="banner">
              <span>Try it free 7 days</span> then $20/mo. thereafter.
            </div>
            <Form>
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
              <Input placeholder="Email Address" type="email" />
              <Input placeholder="Password" type="password" />
              <Button>Claim your free trial</Button>
              <p>
                By clicking the button, you are agreeing to our{" "}
                <a href="#">Terms and Services.</a>
              </p>
            </Form>
          </div>
        </Content>
      </Container>
    </ThemeProvider>
  )
}

export default index
