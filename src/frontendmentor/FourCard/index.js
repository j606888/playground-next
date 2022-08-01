/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled, { createGlobalStyle } from "styled-components"
import Card from './Card'

const ResetStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: hsl(0, 0%, 98%);
  padding: 1px;
`

const Container = styled.div`
  margin: 3rem 1rem;
  max-width: 960px;
  color: hsl(234, 12%, 34%);
  text-align: center;

  & > h4 {
    font-weight: 200;
    font-size: 32px;
  }

  & > h2 {
    font-weight: 600;
    font-size: 32px;
    margin-bottom: 1rem;
  }

  & > p {
    color: hsl(229, 6%, 66%);
    margin-bottom: 3rem;
  }

  .cards {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0 auto;
    align-items: center;
  }
`

const FourCard = () => {
  return (
    <Wrapper>
      <ResetStyle />
      <Container>
        <h4>Reliable, efficient delivery</h4>
        <h2>Powered by Technology</h2>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
        <div className="cards">
          <Card color="cyan">
            <h2>Supervisor</h2>
            <p>Monitors activity to identify project roadblocks</p>
            <img src="/four-card/icon-supervisor.svg" alt="team-builder" />
          </Card>
          <Card color="red">
            <h2>Team Builder</h2>
            <p>
              Scans our talent network to create the optimal team for your
              project
            </p>
            <img src="/four-card/icon-team-builder.svg" alt="team-builder" />
          </Card>
          <Card color="orange">
            <h2>Karma</h2>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img src="/four-card/icon-karma.svg" alt="team-builder" />
          </Card>

          <Card color="blue">
            <h2>Calculator</h2>
            <p>
              Uses data from past projects to provide better delivery estimates
            </p>
            <img src="/four-card/icon-calculator.svg" alt="team-builder" />
          </Card>
        </div>
      </Container>
    </Wrapper>
  )
}

export default FourCard
