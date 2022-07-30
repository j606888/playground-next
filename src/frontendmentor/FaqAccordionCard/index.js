/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'
import Accordion from './Accordion'

const Container = styled.div`
  max-width: 320px;
  font-family: "Kumbh Sans", sans-serif;
  background-color: white;
  padding: 2rem;
  margin: 2rem;
  margin-top: 6rem;
  border-radius: 24px;

  .desktop {
    display: block;
  }

  .mobile {
    display: none;
  }

  div.image-block {
    .desktop {
      margin-top: -7.7rem;
      text-align: center;
      position: relative;

      & > img {
        display: block;
        margin: 0 auto;
        width: 200px;
      }

      & > img:last-child {
        position: absolute;
        bottom: -1.5rem;
        left: 3.7rem;
      }
    }
  }

  h1 {
    text-align: center;
    margin: 3rem auto;
  }

  @media only screen and (min-width: 960px) {
    display: flex;
    max-width: 840px;

    .image-block {
      width: 40%;
    }
    .content {
      max-width: 50%;
      padding: 0 3rem;

      h1 {
        text-align: left;
      }
    }

    .desktop {
      display: none;
    }

    .mobile {
      display: block;
    }
  }
`

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

const FaqAccordionCard = () => {
  return (
    <Container>
      <div className="image-block">
        <div className="desktop">
          <img
            src="/faq-accordian-card/illustration-woman-online-mobile.svg"
            alt="woman"
          />
          <img
            src="/faq-accordian-card/bg-pattern-mobile.svg"
            alt="bg-pattern"
          />
        </div>
        <div className="mobile">
          <img
            src="/faq-accordian-card/illustration-woman-online-mobile.svg"
            alt="woman"
          />
          <img
            src="/faq-accordian-card/bg-pattern-mobile.svg"
            alt="bg-pattern"
          />
        </div>
      </div>
      <div className="content">
        <h1>FAQ</h1>
        {contents.map((content) => (
          <Accordion key={content.id} {...content} />
        ))}
      </div>
    </Container>
  )
}

export default FaqAccordionCard
