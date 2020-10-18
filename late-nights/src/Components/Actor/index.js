import React from 'react';
import Sprite from '../Sprite'

const Actor =({position={x:0,y:100}})=>{
  // the position is coming in at 0,0
  return(
    <div>
    <Sprite data={{x:0,y:0}} position={position}/>
    </div>
  )
}


export default Actor
