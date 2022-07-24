import React from 'react'
import styled from '@emotion/styled'

const Container = styled.span`
  border-radius: 50%;
  display: flex;
  width: 48px;
  height: 48px;
  align-items: center;
  justify-content: center;
  background-color: hsl(213, 19%, 18%);
  cursor: pointer;
  transition: color, background-color 0.1s ease-in;

  color: ${(props) =>
    props.isSelected ? "hsl(0, 0%, 100%)" : "hsl(217, 12%, 63%)"};
  background-color: ${(props) =>
    props.isSelected ? "hsl(25, 97%, 53%)" : "hsl(213, 19%, 18%)"};

  

  &:hover {
    color: hsl(0, 0%, 100%);
    background-color: ${(props) =>
      props.isSelected ? "hsl(25, 97%, 53%)" : "hsl(217, 12%, 63%)"};
  }
`

const Option = ({ number, isSelected, onClick}) => {
  return (
    <Container isSelected={isSelected} onClick={onClick}>
      {number}
    </Container>
  )
}

export default Option
