import React,{useState} from 'react';



const useWalk=()=>{
  const [position,setPosition]= useState({x:0,y:0})
  const [dir,setDir] = useState(0)

  const stepSize = 16;
  const directions ={
    down:0,
    left:1,
    right:2,
    up:3
  }


  const modifier ={
    down:{x:0,y:stepSize},
    left:{x: -stepSize, y:0},
    right:{x:stepSize, y:0},
    up:{x:0,y:-stepSize}
  }

  const move =()=>{
    setPosition(prev =>({
      x:prev.x +modifier[dir].x,
      y:prev.y + modifier[dir].y
    }))
  }

  const walk=(dir)=>{
    setDir(move(dir))
    return directions[dir]
  }
  return{
    walk,
    dir,
    position
  }
}

export default useWalk
