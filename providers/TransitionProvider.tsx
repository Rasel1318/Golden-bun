"use client";
import gsap from "gsap";
import next from "next";
import { TransitionRouter } from "next-transition-router";
import { useRef } from "react";

const TransitionProvider = ({children}) => {
    const transitionGridRef = useRef(null);
    const blockRef = useRef([]);

    const createTransitionGrid = ()=>{
        if(!transitionGridRef.current) return;

        const container = transitionGridRef.current;
        container.innerHTML = "";
        blockRef.current = [];

        // const gridWidth = window.innerWidth;
        // const gridHeight = window.innerHeight;
        const width = (window.innerWidth/5)+1;

        for(let col = 0; col<5; col++){
            const block = document.createElement("div");
            block.className = "transition-block";
            block.style.cssText = `
                width: ${width}px;
                height: 0px;
                left: ${col*width}px;
                top:0px;
            `;
            container.appendChild(block);
            blockRef.current.push(block);
        }
        gsap.set(blockRef.current, {opacity: 1 });
    };



  return <TransitionRouter auto
  
  leave={(next)=>{
    createTransitionGrid();
    transitionGridRef.current.style.pointerEvents= "auto";
    const tween = gsap.to(blockRef.current,{
        duration:0.3,
        height: "100%",
        ease :"power1.inOut",
        stagger:{amount:0.3, from:"random"},
        onComplete:next,
    })

    return ()=>tween.kill();
  }}

  enter={(next)=>{
    gsap.set(blockRef.current, {opacity:1});
    const tl = gsap.timeline();
    const tween = tl.to(blockRef.current,{
        height:"0%",
        duration:0.3,
        delay:0.3,
        ease:"power1.inOut",
        stagger: {amount:0.3, from:"random"},
        onComplete:next,
    })
    tl.to(transitionGridRef.current,{
        pointerEvents:"none",
    })
    return ()=>tween.kill();
  }}
  
  >
    <div ref={transitionGridRef} className="transition-grid" />
    {children}
  </TransitionRouter>;
}

export default TransitionProvider