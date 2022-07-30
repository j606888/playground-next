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
  h1 {
    color: ${props => props.theme.red}
  }

  background-color: ${props => props.theme.red};
  min-height: 100vh;
  padding: 1px;
`

const Form = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  margin: 1rem;
  border-radius: 12px;
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
  letter-spacing: 1px;

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
        <Form>
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input placeholder="Email Address" type="email" />
          <Input placeholder="Password" type="password" />
          <Button>Claim your free trial</Button>
        </Form>
      </Container>
    </ThemeProvider>
  )
}

export default index
