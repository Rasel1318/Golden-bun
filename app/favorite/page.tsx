"use client";
import { useContext, useRef } from "react";
import { burgerContext } from "../layout";
import Image from "next/image";
import gsap from 'gsap'
import MorphSVGPlugin from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);
const Page = () => {

  const { favoriteData, setFavoriteData, checkoutData, setCheckoutData, itemActive, setItemActive, menuActive, MenuItemData, setMenuItemData } = useContext(burgerContext);

  const plusSvgRef = useRef([]);

  const removeFev = (index: number) => {
    const data = favoriteData[index];
    setMenuItemData((prev) => {
      return prev.map((menu, pindex) =>
        (pindex === data.menuInd) ?
          menu.map((item) => {
            if (item.name === data.name) {
              return { ...item, fev: false };
            }
            return item;
          })
          : menu
      );
    });
    setFavoriteData((prev) => {
      return prev.filter((item) => !(item.name === data.name))
    })
  }
  const cardCartIconClick = (index) => {
    const data = favoriteData[index];
    setCheckoutData((prev) => {
      const exist = prev.find((item) => item.name === data.name);
      if (exist) return prev;

      data.quantity = (data.quantity !== 0) ? data.quantity : 1;
      data.status = true;
      return [...prev, data];
    })
    setMenuItemData((prev) => {
      return prev.map((menu, pindex) =>
        (pindex === data.menuInd) ?
          menu.map((item) => {
            if (item.name === data.name)
              return { ...item, quantity: (item.quantity === 0) ? 1 : item.quantity, status: true };
            return item;
          })
          : menu
      );
    });
    if (!plusSvgRef.current[index]) return;
    
    gsap.to(plusSvgRef.current[index], {morphSVG:"M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z", transformOrigin: "50% 50%",rotate: 360,})
  }

  return (
    <div className="w-full h-full pt-[7vh] flex items-center justify-center font-[font1]">
      <div className="w-[85vw] h-[85vh] ">
        <div className="w-full h-full flex flex-wrap gap-[1vw] p-[2vw] overflow-auto no-scrollbar">
          {(favoriteData === null || favoriteData === undefined || favoriteData.length === 0)
            ? <div className="w-full h-full flex items-center justify-center"><p className=" font-[fontBold] text-[5vw]">Empty</p> </div>
            : favoriteData.map((item, index) => {
              return (<div key={index} className="relative w-[17vw] cursor-pointer h-fit flex flex-col p-[1vw] mt-[13vw]">
                <div className="w-[13vw] h-[9vw] z-1 rounded-full absolute top-[-9.5vw] left-[12.5%] bg-[#fc9312d6] blur-[2vw]" />
                <Image src={item.img} className='absolute top-[-12vw] left-[2%] w-[15vw] z-2' alt="Burger Imgae" loading="eager" width={585} height={530} />
                {(item.fev)
                  ? <div onClick={() => removeFev(index)} className="absolute top-[-12vw] left-[2%] w-[15vw] z-3">
                    <svg className="w-[2vw] p-[0.34vw] rounded-full border border-[#50525449]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,90,0,1"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>
                  </div>
                  : <div className="absolute top-[-12vw] left-[2%] w-[15vw] z-2">
                    <Image className='w-[2vw] p-[0.35vw] rounded-full border border-[#50525449]' src="/svg/heart-line.svg" alt="burger-logo" width={50} height={50} />
                  </div>
                }
                {/* <Image onClick={() => cardCartIconClick(index)} className=' absolute hover:scale-110 transition-transform bottom-[16%] right-[12%] shadow-[6px_0_9px_rgba(0,0,0,0.3)] w-[2.2vw] z-4 h-fit bg-[#FC9412] rounded-full' src="/svg/plus.svg" loading="eager" alt="Add Cart" width={50} height={50} /> */}
                <svg onClick={() => cardCartIconClick(index)} className="plus absolute hover:scale-110 transition-transform bottom-[16%] right-[12%] shadow-[6px_0_9px_rgba(0,0,0,0.3)] w-[2.2vw] z-4 h-fit bg-[#FC9412] rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path ref={(e) => plusSvgRef.current[index] = e} d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>
                <h1 className="font-[fontBold] text-[1.2vw]">{item.name}</h1>
                <p className="text-[#FC9412] text-[1.3vw]">{item.rating}</p>
                <p className="text-[#FC9412] font-[fontBold] text-[1.2vw]">${item.price}</p>
              </div>);
            })}
        </div>
      </div>
    </div>
  )
}

export default Page