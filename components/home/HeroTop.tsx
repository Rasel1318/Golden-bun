import React, { useContext, useEffect, useRef } from 'react'
import Image from 'next/image'
import { burgerContext } from '@/app/page'
import gsap from 'gsap'

const HeroTop = () => {
    // Refs
    const moveNameRef = useRef(null);
    const moveDisRef = useRef(null);
    const movePriceRef = useRef(null);
    const calNameWidRef = useRef(null);
    const calDisWidRef = useRef(null);
    const calPriceWidRef = useRef(null);

    // Contaxts
    const {curr_selection, burgerInfoContext} = useContext(burgerContext);

    // Animations
    useEffect(() => {
        const widthName = calNameWidRef.current.getBoundingClientRect().width;
        gsap.to(moveNameRef.current, {
            x: -(curr_selection*widthName),
            ease: "elastic.out(0.5,0.4)",
            duration: 1.5,
        })

        const heightDis = calDisWidRef.current.getBoundingClientRect().height;
        gsap.to(moveDisRef.current, {
            y: -(curr_selection*heightDis),
            ease: "power3.out",
            duration: 1,
        })

        const heightPrice = calPriceWidRef.current.getBoundingClientRect().height;
        gsap.to(movePriceRef.current, {
            y: -(curr_selection*heightPrice),
            ease: "power3.out",
            duration: 1,
        })
    }, [curr_selection])

    return (
        <div className='w-full h-[75%] flex font-[font1] bg'>
            <div className='w-[45%] h-full flex flex-col justify-center gap-[2.5vh] '>
                <p className='uppercase text-[1.1vw] text-[#d69026] rounded-3xl border-2 w-fit px-4 py-1 font-semibold bg-[#FEE4C2]'>the original taste</p>

                <div ref={calNameWidRef} className=' overflow-hidden '>
                    <div ref={moveNameRef} className='flex gap-[2.75vw] whitespace-nowrap ' >

                        {burgerInfoContext.map((burgerInfo, index) => {
                            return (
                                // ml-[.1vw] mr-[2.35vw]
                                <h1 key={index} className='text-[5vw] test-[#1D1E20] leading-[4.5vw] uppercase font-[fontbold]' >{burgerInfo.name.split(" ").slice(0, 2).join(" ")} <br />
                                    {burgerInfo.name.split(" ").slice(2).join(" ")}</h1>
                            );
                        })}
                    </div>
                </div>

                <div ref={calDisWidRef} className='overflow-hidden'>
                    <div ref={moveDisRef} className=' h-[4.8vw]' >
                        {burgerInfoContext.map((burgerInfo, index) => {
                            return (
                                <p key={index} className='text-[#505254] leading-[2.4vw] text-[1.9vw]'>{burgerInfo.description}</p>
                            );
                        })}
                    </div>
                </div>

                <div className='flex items-center gap-[1vw]'>
                    <button className='uppercase border-2 bg-[#FC9412] text-[#FFF8EE] text-[2vw] font-semibold border-[#d69026] rounded-4xl px-[1vw] py-[0.2vh]' >order now</button>
                    <div ref={calPriceWidRef} className='overflow-hidden '>
                        <div ref={movePriceRef} className=' h-[3.5vw]' >
                            {burgerInfoContext.map((burgerInfo, index) => {
                                return (
                                    <p key={index} className='text-[3vw] leading-[3.55vw] test-[#1D1E20] font-[fontbold]'>${burgerInfo.price}</p>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>



            <div className='w-[55%] h-full flex items-center justify-center'>
                <div className='w-fit h-fit relative'>
                    <div className='w-full h-full my-[3vw]  flex justify-center items-center'>
                        <Image src="/media/classic_cheeses.png" className='w-[30vw]' alt="Burger Imgae" loading="eager" width={585} height={530} />
                    </div>
                    <Image className='w-[4vw] absolute top-[1.5vw] left-[1.5vw]' src="/svg/tomato.svg" loading="eager" alt="burger-logo" width={50} height={50} />
                    <Image className='w-[4vw] absolute bottom-[1vw] left-[27vw]' src="/svg/tomato.svg" loading="eager" alt="burger-logo" width={50} height={50} />
                    <Image className='w-[6vw] absolute top-[1vw] left-[25vw] rotate-30' src="/svg/lettuce.svg" loading="eager" alt="burger-logo" width={50} height={50} />
                    <Image className='w-[6vw] absolute bottom-[1vw] left-[-3.5vw] rotate-30' src="/svg/lettuce.svg" loading="eager" alt="burger-logo" width={50} height={50} />

                </div>
            </div>
        </div>
    )
}

export default HeroTop