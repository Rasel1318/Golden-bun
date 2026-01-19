"use client";
import Image from 'next/image'
import { useContext, useEffect, useRef } from 'react'
import { burgerContext } from '@/app/layout';
import gsap from 'gsap'
const HeroBottom = () => {
  // Refs
  const cardsRef = useRef({});
  const moveCardRef = useRef(null);
  const calCardWidRef = useRef(null);
  const cardParentRef = useRef(null);
  const RightSvgRef = useRef(null);

  // Context
  const { curr_selection, setCurr_selection, curr_card, setCurr_card, burgerInfoContext } = useContext(burgerContext);

  const hello = () => {
    console.log("Hello")
  }
  const cardClick = (e) => {
    setCurr_selection(e);
  }


  // Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardParentRef.current, {
        x: -150,
        duration: 0.4,
        opacity: 0,
      })
    });
    return () => ctx.revert();
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(RightSvgRef.current, {
        scale: 0.5,
        opacity: 0,
        rotate: -360,
        duration: 2,
        ease: "bounce.out",
      });
    });

    return () => ctx.revert();
  }, [])

  useEffect(() => {
    const heightDis = calCardWidRef.current.getBoundingClientRect().height;
    gsap.to(moveCardRef.current, {
      y: -(curr_card * heightDis),
      ease: "power3.out",
      duration: 1,
    })
  }, [curr_card])

  const LeftClickHandeler = () => {
    setCurr_selection(prev => {
      if (prev == 0) return prev;
      const newSelection = prev - 1;

      setCurr_card((Math.floor((newSelection) / 2)));
      return newSelection;
    })
  }
  const RightClickHandeler = () => {
    const burgerInfoLen = burgerInfoContext.length;
    setCurr_selection((prev) => {
      if (prev === burgerInfoLen - 1) return prev;
      const newSelection = prev + 1;
      setCurr_card(Math.floor((newSelection) / 2));
      return newSelection;
    })
  }

  return (
    <div className='w-full h-[22%] font-[fontbold] flex'>
      <div ref={cardParentRef} className='w-[50%] h-full '>

        <div ref={calCardWidRef} className='overflow-hidden h-[8.5vw]'>
          <div ref={moveCardRef} className='flex flex-wrap' >
            {burgerInfoContext.map((burgerInfo, index) => {
              return (<div key={index} ref={(e) => (cardsRef.current[index] = e)} onClick={() => cardClick(index)} className='flex z-2 cursor-pointer h-[8.1vw] justify-between w-[20vw] mx-[0.3vw] my-[0.2vw] border-2 overflow-hidden border-[#eaa857] rounded-[1vw] bg-[#fcfcfa]'>
                <div className='ml-[1vw] flex items-center '>
                  <Image src={burgerInfo.img} className='w-[6vw] ' alt="Burger Imgae" loading="eager" width={585} height={530} />
                </div>
                <div className='flex flex-col my-[0.4vw]'>
                  <p className='text-[#FC9412] text-[1.3vw]'>{burgerInfo.rating}</p>
                  <h1 className='text-[1.3vw] leading-[1.6vw]'>{burgerInfo.name.split("/").slice(0, 1)} <br />
                    {burgerInfo.name.split("/").slice(1)}
                  </h1>
                  <p className='text-[#FC9412] text-[1.2vw]'>${burgerInfo.price}</p>
                </div>
                <div className='flex items-end'>
                  <Image onClick={hello} className='w-[2vw] z-4 h-fit bg-[#FC9412] rounded-tl-[0.8vw]' src="/svg/plus.svg" loading="eager" alt="burger-logo" width={50} height={50} />
                </div>
              </div>)
            })}
          </div>
        </div>

      </div>
      <div className='w-[50%] h-full pr-[7vw]'>
        <div className='w-full h-[8.5vw] flex gap-[1vw] items-end justify-end'>
          <button onClick={LeftClickHandeler} disabled={curr_selection === 0} className={`${curr_selection === 0 ? 'opacity-50' : 'opacity-100 active:scale-95'}`}><Image className='w-[3vw] h-fit bg-[#FFF8EE] p-[0.3vw] border border-[#50525449] rounded-full' src="/svg/arrow-left.svg" loading="eager" alt="burger-logo" width={50} height={50} /></button>
          <button onClick={RightClickHandeler} disabled={curr_selection === burgerInfoContext.length - 1} className={`${curr_selection === burgerInfoContext.length - 1 ? 'opacity-50' : 'opacity-100 active:scale-95'}`}><Image ref={RightSvgRef} className='w-[3vw] h-fit bg-[#FFF8EE] p-[0.3vw] border border-[#50525449] rounded-full' src="/svg/arrow-right.svg" loading="eager" alt="burger-logo" width={50} height={50} /></button>
        </div>
      </div>
    </div>
  )
}

export default HeroBottom