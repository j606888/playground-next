import React from 'react'
import styled from 'styled-components'
import ProfileCard from '.'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${"/profile-card/bg-pattern-bottom.svg"});
  height: 100vh;
  width: 100%;
`

const Desktop = () => {
  return (
    <Container>
      <ProfileCard />
    </Container>
  )
}

export default Desktop
