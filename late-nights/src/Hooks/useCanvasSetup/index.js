import React,{useEffect} from 'react';



const useCanvasSetUp =(node)=>{

  const getPixelRatio = context => {
    //THIS FIXES THE RESOLUTION. MAKES THINGS NOT FUZZY. NOT SURE WHY IT JUST DOES
      let backingStore =
      context.backingStorePixelRatio ||
      context.webkitBackingStorePixelRatio ||
      context.mozBackingStorePixelRatio ||
      context.msBackingStorePixelRatio ||
      context.oBackingStorePixelRatio ||
      context.backingStorePixelRatio ||
      1;

      return (window.devicePixelRatio || 1) / backingStore;
  };

  useEffect(()=>{
    // CANVAS CREATION HAS TO BE IN useEffect, ELSE REACT GETS MADE
    let canvas = node.current;
    let ctx = canvas.getContext('2d');
    let ratio = getPixelRatio(ctx)
    let width = 800
    let height = getComputedStyle(canvas).getPropertyValue('height').slice(0,-2);

    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.beginPath();
    ctx.arc(
      50,
      50,
      10,
      0,
      2 * Math.PI
    );
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
  })
}

export default useCanvasSetUp
