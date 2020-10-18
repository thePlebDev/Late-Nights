import React,{useState,useEffect} from 'react';



const useMovementHook=()=>{
  const [xState,setXState] = useState(600);
  const [yState,setYState] = useState(0);

  const handleKeyPressed =(e)=>{
    if(e.keyCode === 39){
      //RIGHT ARROW
      setXState(xState + 5)
    }
    else if(e.keyCode ===37){
      //Left Arrow
      setXState(xState - 5)
    }
    else if(e.keyCode === 38){
      //Up Arrow
      setYState(yState - 5)
    }
    else if(e.keyCode === 40){
      //Down Arrow
      setYState(yState + 5)
    }


  }

  useEffect(()=>{
    window.addEventListener('keydown',handleKeyPressed)

    return()=>{
      window.removeEventListener('keydown',handleKeyPressed)
    }

  })
  return{
    xState,
    yState
  }
}




export default useMovementHook
