import React from 'react';
import GameCanvas from '../GameCanvas';

//NEED TO CREATE A CANVAS FOR DRAWING
//create a movement engine
// create some collision detection


const Game = ()=>{
  return(
    <div style={{textAlign:'center'}}>
      <h1 >Move with the arrow keys</h1>
      <GameCanvas/>
    </div>
  )
}



export default Game
