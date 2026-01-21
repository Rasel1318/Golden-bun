"use client";
import Image from "next/image";
import { BurgerMenuContext } from "@/app/menu/page";
import { useContext, useEffect, useRef } from "react";
import gsap from "gsap";

const CardSection = () => {

    // Refs
    const cardRef = useRef([]);

    // Context
    const { itemActive, setItemActive, menuActive, setMenuActive, MenuItemData } = useContext(BurgerMenuContext);

    // Animations
    useEffect(() => {
        if (!cardRef.current.filter(Boolean).length) return;
        const ctx = gsap.context(() => {
            gsap.from(cardRef.current, {
                delay: 0.2,
                y: 50,
                opacity: 0,
                duration: 0.3,
                stagger: 0.1,
            })
        }, []);
        return () => ctx.revert();
    }, [menuActive]);


    return (
        <div className='w-[38vw] h-full flex flex-wrap justify-center font-[font1] overflow-auto no-scrollbar'>
            {MenuItemData[menuActive].map((item, index) => {
                return (<div key={index} ref={(e) => (cardRef.current[index] = e)} className="relative w-[45%] cursor-pointer h-fit flex flex-col p-[1vw] mt-[13vw]">
                    <div className="w-[13vw] h-[9vw] z-1 rounded-full absolute top-[-9.5vw] left-[12.5%] bg-[#fc9312d6] blur-[2vw]" />
                    <Image src={item.img} className='absolute top-[-12vw] left-[2%] w-[15vw] z-2' alt="Burger Imgae" loading="eager" width={585} height={530} />
                    <Image className=' absolute hover:scale-110 transition-transform bottom-[16%] right-[12%] shadow-[6px_0_9px_rgba(0,0,0,0.3)] w-[2.2vw] z-4 h-fit bg-[#FC9412] rounded-full' src="/svg/plus.svg" loading="eager" alt="Add Cart" width={50} height={50} />
                    <h1 className="font-[fontBold] text-[1.2vw]">{item.name}</h1>
                    <p className="text-[#FC9412] text-[1.3vw]">{item.rating}</p>
                    <p className="text-[#FC9412] font-[fontBold] text-[1.2vw]">${item.price}</p>
                </div>);
            })}
        </div>
    )
}

export default CardSection