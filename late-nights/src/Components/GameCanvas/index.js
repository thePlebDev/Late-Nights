import React,{useRef} from 'react';
import styled from 'styled-components'

import useCanvasSetUp from '../../Hooks/useCanvasSetup'

const Canvas = styled.canvas`
height:500px;
display:block;
margin:0 auto;
border: 1px solid red;
`
const GameCanvas =()=>{
  const ref = useRef();
  useCanvasSetUp(ref)

  return(

      <Canvas ref={ref}></Canvas>

  )
}

export default GameCanvas
