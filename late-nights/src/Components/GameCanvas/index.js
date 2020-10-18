import React,{useEffect,useState} from 'react';
import styled from 'styled-components'

import useMovementHook from '../../Hooks/useMovementHook'


const Box = styled.div`
  position:absolute;
  left:${props=>props.xPlace?props.xPlace+"px":"0px"};
  top:${props=>props.yPlace?props.yPlace+"px":"0px"};
  width:20px;
  height:20px;
  background-color:red;
`



const GameCanvas =()=>{
const {xState,yState} = useMovementHook()

  return(
      <div style={{position:'relative', width:'80%',margin:'0 auto',border:'1px solid red',height:'80vh'}}>
        <Box xPlace={xState} yPlace={yState}></Box>
      </div>
  )
}

export default GameCanvas
