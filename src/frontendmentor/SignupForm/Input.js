import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  position: relative;
`

const RealInput = styled.input`
  width: 100%;
  border-radius: 8px;
  height: 4rem;
  border: 1px solid #ddd;
  transition: border-color 0.3s ease-in, border-width 0.3s ease-in;
  padding-left: 1.5rem;
  font-weight: 600;

  &:focus {
    border-color: ${(props) => props.status ? props.theme.green : props.theme.red };
    border-width: 2px;
    outline: none;
    box-sizing: border-box;
  }
`

const ValidityIcon = styled.div`
  display: ${(props) => (props.focused ? "block" : "none")};
  width: 100%;

  &::before {
    display: ${(props) => (props.status ? "none" : "block")};
    position: absolute;
    content: url("/signup-form/icon-error.svg");
    z-index: 10;
    right: 1.5rem;
    top: 1rem;
  }
`

const Input = ({ placeholder, type="text" }) => {
  const [status, setStatus] = React.useState(false)
  const [focused, setFocused] = React.useState(false)

  const handleChange = event => {
    setStatus(event.target.value)
  }

  return (
    <Container>
      <RealInput
        placeholder={placeholder}
        type={type}
        status={status}
        onChange={handleChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <ValidityIcon focused={focused} status={status} />
    </Container>
  )
}

export default Input
