"use client";

import CardSection from "./CardSection";
import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { BurgerMenuContext } from "@/app/menu/page";
import gsap from "gsap";
// import ItemDiscription from "./ItemDiscription";

const MenuRight = () => {

  // Context
  const { itemActive, setItemActive, menuActive, setMenuActive, MenuItemData } = useContext(BurgerMenuContext);

  // State
  type MenuItem = {
    name: string;
    description: string;
    price: number;
    img: string,
    rating: string,
    img2: string,
    quantity: number,
    status: boolean,
  };

  const [item, setItem] = useState<MenuItem | null>(MenuItemData[menuActive][itemActive]);
  const ItemDisRef = useRef([]);
  const cardRef = useRef([]);

  const cardClickHandler = (index) => {
    setItem(MenuItemData[menuActive][index] ?? null);
  }
  
  // Animations
  useEffect(() => {
    setItemActive(0);
    cardClickHandler(0);
    if (!cardRef.current.filter(Boolean).length) return;
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        delay: 0.2,
        y: 50,
        opacity: 0,
        duration: 0.3,
        stagger: 0.1,
        overwrite: "auto",
      })
    });
    return () => ctx.revert();
  }, [menuActive]);

  useEffect(() => {
    console.log("hello");
    if (!item || !ItemDisRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(ItemDisRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.2,
        stagger: 0.1,
        overwrite: "auto",
      })
    })
    return ()=>ctx.revert();
  }, [itemActive, menuActive]);

  console.log(itemActive);

  return (
    <div className="w-[69vw] h-full flex justify-evenly">
      <div className='w-[38vw] h-full flex flex-wrap justify-center font-[font1] overflow-auto no-scrollbar'>
        {MenuItemData[menuActive].map((item, index) => {
          return (<div key={index} onClick={() => { setItemActive(index); cardClickHandler(index) }} ref={(e) => (cardRef.current[index] = e)} className="relative w-[45%] cursor-pointer h-fit flex flex-col p-[1vw] mt-[13vw]">
            <div className="w-[13vw] h-[9vw] z-1 rounded-full absolute top-[-9.5vw] left-[12.5%] bg-[#fc9312d6] blur-[2vw]" />
            <Image src={item.img} className='absolute top-[-12vw] left-[2%] w-[15vw] z-2' alt="Burger Imgae" loading="eager" width={585} height={530} />
            <Image className=' absolute hover:scale-110 transition-transform bottom-[16%] right-[12%] shadow-[6px_0_9px_rgba(0,0,0,0.3)] w-[2.2vw] z-4 h-fit bg-[#FC9412] rounded-full' src="/svg/plus.svg" loading="eager" alt="Add Cart" width={50} height={50} />
            <h1 className="font-[fontBold] text-[1.2vw]">{item.name}</h1>
            <p className="text-[#FC9412] text-[1.3vw]">{item.rating}</p>
            <p className="text-[#FC9412] font-[fontBold] text-[1.2vw]">${item.price}</p>
          </div>);
        })}
      </div>

      <div className='w-[28vw] h-full font-[font1] overflow-auto no-scrollbar'>
        {item !== null && (
          <div className=" w-full h-full flex flex-col justify-between  gap-[0.6vw] p-[1vw] pb-0">
            <Image ref={(e) => (ItemDisRef.current[0] = e)} src="/media/full_images/classic_cheeses2.webp" className="w-full h-auto object-cover rounded-[1vw]" loading="eager" alt="Burger Image" width={500} height={500} />
            <div ref={(e) => (ItemDisRef.current[1] = e)} className=" w-full flex justify-between">
              <h1 className="font-[fontBold] leading-[2vw] text-[2vw]">{item.name}</h1>
              <div className="flex flex-col items-end leading-[1.8vw]">
                <p className="text-[#FC9412] font-[fontBold] text-[1.8vw]">${item.price}</p>
                <p className="text-[#FC9412] text-[1.6vw]">{item.rating}</p>
              </div>
            </div>
            <p ref={(e) => (ItemDisRef.current[2] = e)} className="text-[1.2vw] text-[#737679] font-bold">About Description :</p>
            <p ref={(e) => (ItemDisRef.current[3] = e)} className="text-[#555555] text-[1vw] ">{item.description}</p>
            <p ref={(e) => (ItemDisRef.current[4] = e)} className="text-[1.2vw] text-[#737679] font-bold">Ingredients :</p>
            <div ref={(e) => (ItemDisRef.current[5] = e)} className="flex gap-[1vw] ">
              <div className="border-2 w-fit rounded-[0.5vw] overflow-hidden border-[#eaa857]"><Image src="/svg/carrot.png" className="w-[4vw] bg-[#f5efdf] p-[0.4vw]" alt="burger_icon" width={128} height={106} /></div>
              <div className="border-2 w-fit rounded-[0.5vw] overflow-hidden border-[#92ea57]"><Image src="/svg/lettuce.png" className="w-[4vw] bg-[#ebf5df] p-[0.4vw]" alt="burger_icon" width={128} height={106} /></div>
              <div className="border-2 w-fit rounded-[0.5vw] overflow-hidden border-[#ea8157]"><Image src="/svg/tomato.png" className="w-[4vw] bg-[#f5e2df] p-[0.4vw]" alt="burger_icon" width={128} height={106} /></div>
              <div className="border-2 w-fit rounded-[0.5vw] overflow-hidden border-[#57d750]"><Image src="/svg/cucumber.png" className="w-[4vw] bg-[#e5f5df] p-[0.4vw]" alt="burger_icon" width={128} height={106} /></div>
            </div>

            <div className="w-full mb-1 h-fit flex justify-between mt-auto">
              <div className="flex items-center w-[60%] gap-[1vw]">
                <Image className='active:scale-95 transition-transform bottom-[16%] right-[12%] w-[1.8vw] z-4 h-fit bg-[#FC9412] rounded-full' src="/svg/minus.svg" loading="eager" alt="Add Cart" width={50} height={50} />
                <p className="font-bold text-[1.5vw]">{item.quantity}</p>
                <Image className='active:scale-95 transition-transform bottom-[16%] right-[12%] w-[1.8vw] z-4 h-fit bg-[#FC9412] rounded-full' src="/svg/plus.svg" loading="eager" alt="Add Cart" width={50} height={50} />
              </div>
              <button className="w-[40%] h-full bg-[#FC9412] py-[0.2vw] rounded-[0.8vw] font-bold text-[1.2vw]"> Add-to-Cart</button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default MenuRight