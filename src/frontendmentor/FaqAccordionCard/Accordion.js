/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  border-bottom: 1px solid #999;
  margin-bottom: 1.5rem;
  overflow: hidden;
  font-family: "Kumbh Sans", sans-serif;
  font-size: 12px;
`

const Label = styled.div`
  cursor: pointer;
  margin-bottom: ${(props) => (props.isOpen ? "1rem;" : "1.5rem;")};
  font-weight: ${(props) => (props.isOpen ? 700 : 400)};
  color: ${(props) => (props.isOpen ? "black" : "hsl(237, 12%, 33%)")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in;

  img {
    transition: all 0.3s ease-in;
    transform: ${(props) => (props.isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  }
`

const Content = styled.div`
  transition: all 0.3s ease-in;
  max-height: ${(props) => (props.isOpen ? "500px" : 0)};
  margin-bottom: ${(props) => (props.isOpen ? "1.5rem" : 0)};
  color: hsl(240, 6%, 50%);
  line-height: 150%;
  width: 95%;
`

const Accordion = ({ label, content }) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Container>
      <Label isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span>{label}</span>
        <img src="/faq-accordian-card/icon-arrow-down.svg" alt="arrow-down" />
      </Label>
      <Content isOpen={isOpen}>{content}</Content>
    </Container>
  )
}

export default Accordion
