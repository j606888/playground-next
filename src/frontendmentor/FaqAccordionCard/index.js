/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled, { keyframes} from 'styled-components'
import Accordion from './Accordion'


const contents = [
  {
    id: 1,
    label: "How many team members can I invite?",
    content:
      "You can invite up to 2 additional users on the Free plan. There is no limit on  team members for the Premium plan.",
  },
  {
    id: 2,
    label: "What is the maximum file upload size?",
    content:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    id: 3,
    label: "How do I reset my password?",
    content:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    id: 4,
    label: "Can I cancel my subscription?",
    content:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    id: 5,
    label: "Do you provide additional support?",
    content:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
]

const bob = keyframes`
  0% {
    transform: translate(0);
  }

  50% {
    transform: translateY(-0.3rem);
  }

  100% {
    transform: translate(0);
  }
`

const Container = styled.div`
  position: relative;

  .float-box {
    position: absolute;
    width: 5rem;
    height: auto;
    left: 4rem;
    top: -2rem;
    animation: ${bob} 2s infinite;
  }

  @media only screen and (min-width: 960px) {
    .float-box {
      width: 11rem;
      left: -3rem;
      top: 20rem;
    }
  }
`

const CardContainer = styled.div`
  max-width: 320px;
  font-family: "Kumbh Sans", sans-serif;
  background: url(/faq-accordian-card/bg-pattern-mobile.svg), white;
  background-repeat: no-repeat;
  background-position: 50% 0;
  padding: 2rem;
  margin: 2rem;
  margin-top: 6rem;
  border-radius: 24px;

  h1 {
    text-align: center;
    margin: 3rem auto;
  }

  .women-img {
    width: 15rem;
    height: auto;
    margin-top: -8.8rem;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (min-width: 960px) {
    display: flex;
    max-width: 960px;
    overflow: hidden;
    background: url(/faq-accordian-card/bg-pattern-desktop.svg), white;
    background-repeat: no-repeat;
    background-position: -32rem -17rem;

    .content {
      max-width: 40%;
      padding: 0 3rem;

      h1 {
        text-align: left;
      }
    }

    .women-img {
      margin-top: 1rem;
      margin-left: -8rem;
      width: auto;
      height: 26rem;
    }
`

const FaqAccordionCard = () => {
  return (
    <Container>
      <img src="/faq-accordian-card/illustration-box-desktop.svg" alt="float-box" className='float-box' />
      <CardContainer>
        <img
          src="/faq-accordian-card/illustration-woman-online-desktop.svg"
          alt="woman"
          className='women-img'
        />
        <div className="content">
          <h1>FAQ</h1>
          {contents.map((content) => (
            <Accordion key={content.id} {...content} />
          ))}
        </div>
      </CardContainer>
    </Container>
  )
}

export default FaqAccordionCard
