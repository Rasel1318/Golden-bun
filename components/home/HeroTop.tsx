import React, { useContext, useEffect, useRef } from 'react'
import Image from 'next/image'
import { burgerContext } from '@/app/page'
import gsap from 'gsap'

const HeroTop = () => {
    // Refs
    const moveNameRef = useRef(null);
    const NameWidRef = useRef(null);
    const moveDisRef = useRef(null);
    const movePriceRef = useRef(null);
    const calNameWidRef = useRef(null);
    const calDisWidRef = useRef(null);
    const calPriceWidRef = useRef(null);
    const imgRef = useRef({});

    // Contaxts
    const { curr_selection, burgerInfoContext, imgSrc, setImgSrc} = useContext(burgerContext);

    // Animations
    useEffect(() => {
        const widthName = calNameWidRef.current.getBoundingClientRect().width;
        const heightDis = calDisWidRef.current.getBoundingClientRect().height;
        const heightPrice = calPriceWidRef.current.getBoundingClientRect().height;

        setImgSrc(burgerInfoContext[curr_selection].img);
        
        // Error.. Not able to target the refs
        gsap.to(imgRef.current[curr_selection],{
            opacity:0
        })

        gsap.to(moveNameRef.current, {
            x: -(curr_selection * widthName),
            ease: "elastic.out(0.5,0.4)",
            duration: 1.5,
        })

        gsap.to(moveDisRef.current, {
            y: -(curr_selection * heightDis),
            ease: "power3.out",
            duration: 1,
        })

        gsap.to(movePriceRef.current, {
            y: -(curr_selection * heightPrice),
            ease: "power3.out",
            duration: 1,
        })
    }, [curr_selection])

    return (
        <div className='w-full h-[75%] flex font-[font1] bg'>
            <div className='w-[45%] h-full flex flex-col justify-center gap-[2.5vh] '>
                <p className='uppercase text-[1.1vw] text-[#d69026] rounded-3xl border-2 w-fit px-4 py-1 font-semibold bg-[#FEE4C2]'>the original taste</p>

                <div ref={calNameWidRef} className=' overflow-hidden '>
                    <div ref={moveNameRef} className=' flex ' >
                        {burgerInfoContext.map((burgerInfo, index) => {
                            return (
                                <h1 ref={NameWidRef} key={index} className='text-[5vw] shrink-0  w-[38.5vw] test-[#1D1E20] leading-[4.5vw] uppercase font-[fontbold]' >{burgerInfo.name.split("/").slice(0, 1)} <br />
                                    {burgerInfo.name.split("/").slice(1)}</h1>
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
                    <div className='w-full h-full my-[1.5vw]  flex justify-center items-center'>
                        <div className='h-[30vw] w-[30vw] relative '>
                            {burgerInfoContext.map((burgerInfo, index) => {
                            return (
                                <Image key={index} ref={el =>(imgRef.current[index] = el)} src={burgerInfo.img} className={`absolute opacity-0 top-[2vw] w-[30vw] z-${index}`} alt="Burger Imgae" loading="eager" width={585} height={530} />
                            );
                        })}

                        </div>
                        
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