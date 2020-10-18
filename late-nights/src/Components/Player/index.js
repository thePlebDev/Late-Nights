import React from 'react';

import Actor from '../Actor'
import useKeyPressed from '../../Hooks/UseKeyDown';
import useWalk from '../../Hooks/UseWalk';


const Player =()=>{
  const {dir,walk,position} = useWalk(3)
  //the position is still 0,0
  useKeyPressed((e)=>{
    const dir = e.key.replace("Arrow","").toLowerCase()
    console.log(dir)
    e.preventDefault();
  })
  return(
    <div>
      <Actor dir={dir} position={position}/>
    </div>
  )
}

export default Player
