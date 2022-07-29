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

  & > img {
    display: block;
    width: 200px;
    margin: -7.7rem auto 0;
    

    // &::after {
    //   content: "xxx";
    //   background-image: url('/faq-accordian-card/bg-pattern-mobile.svg');
    //   width: 100%;
    //   height: 100%;
    //   position: absolute;
    //   top: 30px;
    //   left: 50%;
    // }
  }

  h1 {
    text-align: center;
    margin-bottom: 2rem;
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
      <img src="/faq-accordian-card/illustration-woman-online-mobile.svg" alt="woman" />
      <h1>FAQ</h1>
      {contents.map(content => <Accordion key={content.id} {...content} />)}
    </Container>
  )
}

export default FaqAccordionCard
