/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'
import Summary from './Summary'

const Container = styled.div`
  font-family: "Lexend Deca", sans-serif;
  box-sizing: border-box;

  display: flex;
  border-radius: 12px;
  overflow: hidden;
  width: 1080px;

  & > * {
    flex: 1;
  }

  .image {
    background: hsl(277, 64%, 61%);

    img {
      object-fit: cover;
      opacity: 0.5;
      height: 100%;
    }
  }

  @media only screen and (max-width: 960px) {
    flex-direction: column;
    width: 320px;
    text-align: center;

    .image {
      order: -1;

      img {
        display: block;
        width: 100%;
      }
    }
  }
`

const Content = styled.div`
  background-color: hsl(244, 38%, 16%);
  padding: 4rem;

  h1 {
    color: #fff;
    font-size: 36px;
    line-height: 120%;
    margin-bottom: 1rem;

    span {
      color: hsl(277, 64%, 61%);
    }
  }

  p {
    color: hsla(0, 0%, 100%, 0.75);
    margin-bottom: 5rem;
    line-height: 150%;
  }

  .summary-list {
    display: flex;
    gap: 64px;
  }

  @media only screen and (max-width: 960px) {
    padding: 2rem;

    h1 {
      font-size: 28px;
    }

    p {
      margin-bottom: 3rem;
    }

    .summary-list {
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }
`

const StatsPreviewCard = () => {
  return (
    <Container>
      <Content>
        <h1>
          Get <span>insights</span> that help your business grow.
        </h1>
        <p>
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="summary-list">
          <Summary count="10k+" name="Companies" />
          <Summary count="314" name="Templates" />
          <Summary count="12M+" name="Queries" />
        </div>
      </Content>

      <div className="image">
        <img src="/image-header-desktop.jpg" alt="header" />
      </div>
    </Container>
  )
}

export default StatsPreviewCard
