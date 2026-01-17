import Image from 'next/image'
import React, { useContext, useEffect } from 'react'
import { burgerContext } from '@/app/page'
import gsap from 'gsap'

const HeroBottom = () => {
  // Refs
  const moveCardRef = React.useRef(null);
  const calCardWidRef = React.useRef(null);

  // Context
  const { curr_selection, setCurr_selection, curr_card, setCurr_card, burgerInfoContext } = useContext(burgerContext);

  // Animations
  useEffect(()=>{
    const heightDis = calCardWidRef.current.getBoundingClientRect().height;
        gsap.to(moveCardRef.current, {
            y: -(curr_card*heightDis),
            ease: "power3.out",
            duration: 1,
        })
  }, [curr_card])



  const LeftClickHandeler = () => {
    setCurr_selection(prev=>{
      if(prev==0) return prev;
      const newSelection = prev-1;

      setCurr_card((Math.floor((newSelection)/2)));
      return newSelection;
    })
  }
  const RightClickHandeler = () => {
    const burgerInfoLen = burgerInfoContext.length;
    setCurr_selection((prev)=>{
      if(prev===burgerInfoLen-1) return prev;
      const newSelection = prev+1;
      setCurr_card(Math.floor((newSelection)/2));
      return newSelection;
    })
  }

  return (
    <div className=' w-full h-[22%] font-[fontbold] flex'>
      <div className='w-[50%] h-full '>
        <div className='h-full items-center gap-[1vw] '>

          <div ref={calCardWidRef} className='overflow-hidden h-[8.005vw] '>
            <div ref={moveCardRef} className='flex gap-[0.05vw] flex-wrap h-[8.005vw]' >
              {burgerInfoContext.map((burgerInfo, index) => {
                return (<div key={index} className='flex gap-[.5vw] justify-between w-[20vw] mx-[0.3vw] border-2 overflow-hidden border-[#eaa857] rounded-[1vw] bg-[#fcfcfa]'>
                  <div className='ml-[1vw] flex items-center '>
                    <Image src={burgerInfo.img} className='w-[6vw] h-fit' alt="Burger Imgae" loading="eager" width={585} height={530} />
                  </div>
                  <div className='flex flex-col my-[0.4vw]'>
                    <p className='text-[#FC9412] text-[1.3vw]'>{burgerInfo.rating}</p>
                    <h1 className='text-[1.3vw] leading-[1.6vw]'>{burgerInfo.name.split("/").slice(0, 1)} <br />
                                    {burgerInfo.name.split("/").slice(1)}
                    </h1>
                    <p className='text-[#FC9412] text-[1.2vw]'>${burgerInfo.price}</p>
                  </div>
                  <div className='flex items-end'>
                    <Image className='w-[2vw] h-fit bg-[#FC9412] rounded-tl-[0.8vw]' src="/svg/plus1.svg" loading="eager" alt="burger-logo" width={50} height={50} />
                  </div>
                </div>)
              })}
            </div>
          </div>


        </div>
      </div>
      <div className='w-[50%] h-full flex gap-[1vw] items-end justify-end pr-[7vw] pb-[2vw]'>
        <button onClick={LeftClickHandeler} disabled={curr_selection===0} className={`${curr_selection===0 ? 'opacity-50':'opacity-100 active:scale-95'}`}><Image className='w-[3vw] h-fit bg-[#FFF8EE] p-[0.3vw] border border-[#50525449] rounded-full' src="/svg/arrow-left.svg" loading="eager" alt="burger-logo" width={50} height={50} /></button>
        <button onClick={RightClickHandeler} disabled={curr_selection===burgerInfoContext.length-1} className={`${curr_selection===burgerInfoContext.length-1 ? 'opacity-50':'opacity-100 active:scale-95'}`}><Image className='w-[3vw] h-fit bg-[#FFF8EE] p-[0.3vw] border border-[#50525449] rounded-full' src="/svg/arrow-right.svg" loading="eager" alt="burger-logo" width={50} height={50} /></button>
      </div>
    </div>
  )
}

export default HeroBottom