import React from 'react'
import styled from 'styled-components'
import Checkbox from "@mui/material/Checkbox"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import CircleUnchecked from "@mui/icons-material/Circle"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"

const Container = styled.div`
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f7735a;
  padding: 12px 0;
  color: #fff;

  & label {
    display: flex;
    align-items: center;
  }

  .span {
    font-size: 22px;
  }
`

const ChooseContainer = styled.div`
  background-color: #fff;
  border-radius: 18px;
  display: flex;
  align-items: center;
  padding: 2px;
  color: #f7735a;
  .span {
    margin: 0 2px;
    font-size: 22px;
  }

  svg {
    cursor: pointer;
  }
`
const Choose = () => {
  return (
    <ChooseContainer>
      <ArrowBackIosNewIcon />
      <span className="span">2</span>
      <ArrowForwardIosIcon />
    </ChooseContainer>
  )
}

const Item = ({ item: { isChecked, name, count }, onClick }) => {
  return (
    <Container>
      <div>
        <label>
          <Checkbox
            size="medium"
            icon={<CircleUnchecked sx={{ color: "#fff" }} />}
            checkedIcon={<CheckCircleIcon sx={{ color: "#fff" }} />}
          />
          <span className="span">{name}</span>
        </label>
      </div>
      <Choose />
    </Container>
  )
}


export default Item
