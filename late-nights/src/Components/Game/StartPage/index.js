import React from 'react';
import styled from 'styled-components'

const Glitch = styled.div`
  postition:relative;
  &:before,
  &:after{
    content:"Glitch"
  }
`


const Start = ()=>{
  return(
    <Glitch>Glitch</Glitch>
  )
}

export default Start
