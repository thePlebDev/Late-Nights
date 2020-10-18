import { useEffect } from 'react';


const useKeyPressed=(fn)=>{
  useEffect(()=>{
    window.addEventListener("keydown",fn);

    return()=>{
      window.removeEventListener("Keydown",fn);
    }
  },[fn])
}

export default useKeyPressed
