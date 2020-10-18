import React from 'react'


const Sprite =({data,position})=>{
  console.log(position)
  const {x,y} = data
  return(
    <div style={{position:"absolute",top:`${position.y}px`,left:`${position.x}px`,height:"32px",width:"32px",backgroundColor:"green"}}>

    </div>
  )
}

export default Sprite
