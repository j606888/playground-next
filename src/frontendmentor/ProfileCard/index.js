/* eslint-disable @next/next/no-img-element */
import React from 'react'
import styled from 'styled-components'
import Detail from './Detail'

const Container = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  display: inline-flex;
  flex-direction: column;
  background: white;
  text-align: center;
  border-radius: 24px;
  overflow: hidden;
  font-family: "Kumbh Sans", sans-serif;
`

const TopPart = styled.img`
  background-image: url(${"/profile-card/bg-pattern-card.svg"});
  height: 12rem;
  width: 100%;
  display: block;
`

const MiddlePart = styled.div`
  border-bottom: 1px solid hsl(227, 10%, 46%);
  padding: 2rem;
  position: relative;

  img {
    position: absolute;
    border-radius: 50%;
    width: 128px;
    height: 128px;
    border: 6px solid white;
    top: -64px;
    left: 172px;
  }

  h3 {
    font-size: 24px;
    margin: 4rem 0 0.5rem;

    span {
      color: hsl(227, 10%, 46%);
      margin-left: 8px;
      font-weight: 400;
    }
  }

  p {
    font-size: 18px;
    color: hsl(227, 10%, 46%);
  }
`

const DetailList = styled.div`
  display: flex;
  padding: 30px 20px;
  gap: 32px;
`

const Details = [
  {
    title: 'Followers',
    count: '80K'
  },
  {
    title: 'Likes',
    count: '803K'
  },
  {
    title: 'Photos',
    count: '1.4K'
  }
]

const ProfileCard = () => {
  return (
    <Container>
      <TopPart />
      <MiddlePart>
        <img src='/profile-card/image-victor.jpg' alt="victor" />
        <h3>Victor Crest <span>26</span></h3>
        <p>London</p>
      </MiddlePart>
      <DetailList>
        {Details.map((detail) => (
          <Detail key={detail.title} {...detail} />
        ))}
      </DetailList>
    </Container>
  )
}

export default ProfileCard
