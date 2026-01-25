"use client";
import { useContext, useRef } from "react";
import { burgerContext } from "../layout";
import Image from "next/image";


const Page = () => {
  const { favoriteData, setFavoriteData, checkoutData, setCheckoutData, itemActive, setItemActive, menuActive, MenuItemData, setMenuItemData } = useContext(burgerContext);

  function truncateWords(text: string, maxWords = 7) {
    const words = text.trim().split(/\s+/);
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  }

  return (
    <div className="w-full h-full pt-[7vh] flex items-center justify-center">
      <div className="w-[85vw] h-[85vh] ">
        {/* {favoriteData.map((item, index) => {
          return (<div key={index} onClick={() => { setItemActive(index); cardClickHandler(index) }} ref={(e) => (cardRef.current[index] = e)} className="relative w-[45%] cursor-pointer h-fit flex flex-col p-[1vw] mt-[13vw]">
            <div className="w-[13vw] h-[9vw] z-1 rounded-full absolute top-[-9.5vw] left-[12.5%] bg-[#fc9312d6] blur-[2vw]" />
            <Image src={item.img} className='absolute top-[-12vw] left-[2%] w-[15vw] z-2' alt="Burger Imgae" loading="eager" width={585} height={530} />
            {(item.fev)
              ? <div className="absolute top-[-12vw] left-[2%] w-[15vw] z-3">
                <svg className="w-[2vw] p-[0.34vw] rounded-full border border-[#50525449]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,90,0,1"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>
              </div>
              : <div onClick={() => addFev(index)} className="absolute top-[-12vw] left-[2%] w-[15vw] z-2">
                <Image className='w-[2vw] p-[0.35vw] rounded-full border border-[#50525449]' src="/svg/heart-line.svg" alt="burger-logo" width={50} height={50} />
              </div>
            }
            <Image onClick={() => cardCartIconClick(index)} className=' absolute hover:scale-110 transition-transform bottom-[16%] right-[12%] shadow-[6px_0_9px_rgba(0,0,0,0.3)] w-[2.2vw] z-4 h-fit bg-[#FC9412] rounded-full' src="/svg/plus.svg" loading="eager" alt="Add Cart" width={50} height={50} />
            <h1 className="font-[fontBold] text-[1.2vw]">{item.name}</h1>
            <p className="text-[#FC9412] text-[1.3vw]">{item.rating}</p>
            <p className="text-[#FC9412] font-[fontBold] text-[1.2vw]">${item.price}</p>
          </div>);
        })} */}
      </div>

    </div>
  )
}

export default Page