import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 5rem auto;
  max-width: 480px;
  position: relative;
  border-radius: 6px;
  overflow: hidden;
  
  input {
    box-sizing: border-box;
    border: none;
    padding: 0 30px 0 18px;
    color: #555;
    outline: none;
    height: 48px;
    font-size: 16px;
    width: 100%;
    box-shadow: 0 2px 2px rgba(0,0,0,0.2)
  }

  i {
    position: absolute;
    right: 16px;
    top: 16px;
    font-size: 18px;
    color: #7054f7;

    &:hover {
      cursor: pointer;
    }
  }
`

const Options = styled.ul`
  background-color: white;
  margin: 0;
  padding: 8px;
  padding: ${(props) => props.hasResults ? '8px' : 0 };
  list-style: none;
  overflow-y: scroll;
  max-height: 17rem;

  li {
    padding: 12px;
    color: #555;
    border-radius: 6px;

    &:hover {
      background-color: #eee;
    }
  }
`

const searchList = [
  "Apple",
  "Ancle",
  "Android",
  "Banana",
  "Car",
  "Cafe",
  "Cake",
  "Circle",
  "Orange"
]

const Autocomplete = () => {
  const [keyword, setKeyword] = useState(null)
  const [autoList, setAutoList] = useState([])
  const [hasResults, setHasResults] = useState(false)

  const handleChange = (event) => {
    setKeyword(event.target.value)
  }

  useEffect(() => {
    if (!keyword) {
      setAutoList([])
      setHasResults(false)
      return
    }

    const filteredList = searchList.filter(word => {
      return word.toLowerCase().startsWith(keyword.toLowerCase())
    })

    setAutoList(filteredList)
    setHasResults(filteredList.length > 0)
  }, [keyword])

  return (
    <Container>
      <input placeholder="Type to search..." onChange={handleChange} />
      <Options hasResults={hasResults}>
        {autoList.map((list) => (
          <li key={list}>{list}</li>
        ))}
      </Options>
      <i className="fa-solid fa-magnifying-glass"></i>
    </Container>
  )
}

export default Autocomplete
