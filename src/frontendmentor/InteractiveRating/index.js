import React from 'react'
import styled from "@emotion/styled"
import Option from './Option'
import Thankyou from './Thankyou'

const orange = "hsl(25, 97%, 53%)"

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Overpass", sans-serif;
  }

  display: flex;
  width: 345px;
  flex-direction: column;
  gap: 24px;
  background: linear-gradient(hsl(213, 19%, 18%), hsl(216, 12%, 8%));
  border-radius: 12px;
  padding: 28px;
  font-size: 15px;

  h1 {
    color: #fff;
    font-weight: 400;
  }

  p {
    color: hsl(216, 12%, 54%);
    line-height: 150%;
  }

  .star-circle {
    background-color: hsl(213, 19%, 26%);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    margin-bottom: 6px;
  }

  .option-list {
    display: flex;
    justify-content: space-between;
    margin: 6px 0;
  }

  .submit-btn {
    background-color: ${orange};
    color: #fff;
    padding: 16px;
    text-align: center;
    border-radius: 24px;
    width: 100%;
    border: none;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 700;
    transition: color, background-color 0.1s ease-in;
    cursor: pointer;

    &:hover {
      background-color: #fff;
      color: ${orange};
    }
  }  
`

const InteractiveRating = () => {
  const scoreRange = [1,2,3,4,5]
  const [number, setNumber] = React.useState(null)
  const [submit, setSubmit] = React.useState(false)

  if (submit) {
    return <Thankyou score={number} />
  }

  return (
    <Container>
      <link
        href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <div className="star-circle">
        <img src="/icon-star.svg" alt="icon-star" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="option-list">
        {scoreRange.map((score) => (
          <Option
            key={score}
            number={score}
            isSelected={number === score}
            onClick={() => setNumber(score)}
          />
        ))}
      </div>
      <button className="submit-btn" onClick={() => setSubmit(true)}>Submit</button>
    </Container>
  )
}

export default InteractiveRating
