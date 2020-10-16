import React from 'react';
import styled from 'styled-components'

const Glitch = styled.div`
  font-size:130px;
  line-height:1;
  font-weight:700;
  position:absolute;
  top:10%;
  left:40%;
  border:1px solid blue;
  transform:translate(-50%, -50%)
  margin:0;
  text-decoration:none;
  color: blue;


  &:before, &:after{
    display:block;
    content:'Start';
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    opacity:.8;
  } &:after{
    color:#f0f;
    z-index:-2;
    animation: glitch .3s cubic-bezier(.25, .46, .45, .94) reverse both infinite;
  } &:before{
    color:#0ff;
    z-index:-1;
    animation: glitch .3s cubic-bezier(.25, .46, .45, .94) both infinite;
  }

  @keyframes glitch {
    0%{
      transform:translate(0);
    }
    20%{
      transform:translate(-5px,5px)
    }
    40%{
      transform:transform(-5px, -5px)
    }
    60%{
      transform:translate(5px,5px)
    }
    80%{
      transform:translate(5px -5px)
    }
    to{
      transform:translate(0)
    }
  }
`


const Start = ()=>{
  return(
    <div>
      <Glitch>Start</Glitch>
    </div>
  )
}

export default Start
