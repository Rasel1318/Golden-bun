"use client";
import { TransitionRouter } from "next-transition-router";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const TransitionProvider = ({ children }) => {
  const transitionGridRef = useRef(null);
  const blockRef = useRef([]);
  const BLOCK_SIZE = 60;

  const createTransitionGrid = () => {
    if (!transitionGridRef.current) return;

    const container = transitionGridRef.current;
    container.innerHTML = "";
    blockRef.current = [];

    const gridWidth = window.innerWidth;
    const gridHeight = window.innerHeight;
    const colums = Math.ceil(gridWidth / BLOCK_SIZE);
    const rows = Math.ceil(gridHeight / BLOCK_SIZE) + 1;
    const offsetX = (gridWidth - colums * BLOCK_SIZE) / 2;
    const offsetY = (gridHeight - rows * BLOCK_SIZE) / 2;

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < colums; col++) {
        const block = document.createElement("div");
        block.className = "transition-block";
        block.style.cssText = `
          width: ${BLOCK_SIZE}px;
          height: ${BLOCK_SIZE}px;
          left: ${col * BLOCK_SIZE + offsetX}px;
          top: ${row * BLOCK_SIZE + offsetY}px;
        `;
        container.appendChild(block);
        blockRef.current.push(block);
      }
    }

    gsap.set(blockRef.current, { opacity: 0 });
  };

  useEffect(() => {
    window.addEventListener("resize", createTransitionGrid);
    return () => window.removeEventListener("resize", createTransitionGrid);
  }, []);

  return <TransitionRouter 
  auto
  leave={(next)=>{
    createTransitionGrid();
    const tween = gsap.to(blockRef.current,{
      pointerEvents:"auto",
      opacity:1, 
      duration:0.05,
      ease :"power1.inOut",
      stagger:{amount: 0.5, from:"random"},
      onComplete:next,
    });
    return ()=>tween.kill();
  }}
  
  enter={(next)=>{
    gsap.set(blockRef.current, {opacity:1});
    const tl = gsap.timeline();
    const tween = tl.to(blockRef.current,{
        opacity:0,
        duration:0.05,
        delay:0.3,
        ease:"power1.inOut",
        stagger: {amount:0.5, from:"random"},
        onComplete:next,
      });
    tl.to(blockRef.current,{
      pointerEvents:"none",
    })
    return ()=> tween.kill();
  }}

  >
    <div ref={transitionGridRef} className="transition-grid " />
    {children}
  </TransitionRouter>;
}

export default TransitionProvider