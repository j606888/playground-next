import React from 'react'
import styled from 'styled-components'
import Autocomplete from '.'

const Wrapper = styled.div`
  background-color: #7054f7;
  min-height: 100vh;
  padding: 1px 2rem;
`


const Desktop = () => {
  return (
    <Wrapper>
      <Autocomplete />
    </Wrapper>
  )
}

export default Desktop
