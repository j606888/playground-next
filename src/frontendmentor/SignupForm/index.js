import React from 'react'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'

const ResetStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
`
const Container = styled.div`

`

const theme = {
  red: "hsl(0, 100%, 74%)",
  green: "hsl(154, 59%, 51%)",
  blue: "hsl(248, 32%, 49%)",
  darkBlue: "hsl(249, 10%, 26%) ",
  grayishBlue: "hsl(246, 25%, 77%)",
}

const index = () => {
  return (
    <Container>
      <ResetStyle />
      <h1>Title</h1>
    </Container>
  )
}

export default index
