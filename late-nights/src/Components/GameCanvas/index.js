import React,{useEffect,useState} from 'react';
import styled from 'styled-components'

import Player from '../Player'


const GameCanvas =()=>{

  return(
      <div style={{position:'relative', width:'80%',margin:'0 auto',border:'1px solid red',height:'10vh'}}>
        <Player/>
      </div>
  )
}

export default GameCanvas
