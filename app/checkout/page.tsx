"use client";

import { useContext, useRef } from "react";
import { burgerContext } from "../layout";
import Image from "next/image";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const page = () => {
  //Refs
  const cartElementRef = useRef([]);
  const checkOutParent = useRef(null);

  // Contexts 
  const { checkoutData, setCheckoutData, MenuItemData, setMenuItemData } = useContext(burgerContext);

  // Functions
  function truncateWords(text: string, maxWords = 7) {
    const words = text.trim().split(/\s+/);
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  }
  const quantityPlusBtn = (index) => {
    setCheckoutData((prev) => {
      return prev.map((item, idx) =>
        (idx === index) ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    });
    setMenuItemData((prev) => {
      return prev.map((menu, ind) =>
        (ind === checkoutData[index].menuInd) ?
          (menu.map((item, idx) =>
            (item.name === checkoutData[index].name) ?
              { ...item, quantity: item.quantity + 1 }
              : item
          ))
          : menu
      )
    })
  };

  const quantityMinusBtn = (index) => {
    setCheckoutData((prev) => {
      return prev.map((item, idx) =>
        (idx === index) ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
          : item
      )
    });
    setMenuItemData((prev) => {
      return prev.map((menu, ind) =>
        (ind === checkoutData[index].menuInd) ?
          (menu.map((item, idx) =>
            (item.name === checkoutData[index].name) ?
              { ...item, quantity: Math.max(item.quantity - 1, 1) }
              : item
          ))
          : menu
      );
    });
  }
  const deleteFromCartBtn = (name, index) => {
    const menuInd = checkoutData[index].menuInd;
    const targetInd = checkoutData.findIndex(
      (el) => el.name === name
    );

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.to(cartElementRef.current[targetInd], {
        x: -600,
        duration: 0.3,
        opacity: 0,
        onComplete: () => {
          setCheckoutData((prev) =>
            prev.filter(
              (item) => !(item.name === name)
            )
          );
          setMenuItemData((prev) => {
            return prev.map((menu, ind) =>
              (ind === menuInd) ?
                (menu.map((item, idx) =>
                  (item.name === name) ?
                    { ...item, quantity: 0, status: false }
                    : item
                ))
                : menu
            );
          });
          gsap.set(cartElementRef.current[targetInd], { clearProps: "transform,opacity" });
        }
      })
    });

    return () => ctx.revert();
  }

  return (
    <div className="w-full h-full pt-[7vh] flex items-center justify-center font-[font1]">
      <div className="w-[85vw] h-[85vh] ">
        <div className="w-full h-full ">
          <h3 className="font-[fontBold] text-[2vw] mb-[2vw]">Shopping Cart.</h3>
          <div className="flex w-[60%] text-[0.9vw] font-bold justify-between">
            <p className="ml-[3.5vw]">Product</p>
            <div className="flex pr-[5.7vw] gap-[3.8vw]">
              <p>Quantity</p>
              <p>Total Price</p>
            </div>
          </div>

          <div ref={checkOutParent} className="flex flex-col w-[60%] h-[70%] border-y-2 border-[#c2c1b4] gap-3 overflow-auto no-scrollbar">

            {(checkoutData === null || checkoutData === undefined || checkoutData.length === 0)
              ? <div className="w-full h-full flex items-center justify-center"><p className=" font-[fontBold] text-[5vw]">Empty</p> </div>
              : checkoutData.map((item, index) => {
                return (<div key={index} ref={el => cartElementRef.current[index] = el} className=" w-full h-[8vw] justify-center flex flex-col p-[1vw]">
                  <div className="flex justify-between">
                    <div className=" flex gap-[1vw]">
                      <Image src={item.img} className='w-[8vw] object-cover' alt="Burger Imgae" loading="eager" width={585} height={530} />
                      <div className="flex flex-col gap-[0.5vw] justify-center w-[15vw] h-full ">
                        <h1 className="font-[fontBold] leading-[1vw] text-[1.2vw]">{item.name}</h1>
                        <p className="w-[13vw] leading-[1vw] text-[#505254] text-[1vw]" title={item.description}>
                          {truncateWords(item.description, 7)}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-[3.8vw] h-full items-center justify-end">
                      <div className="flex items-center justify-between w-[30%] gap-[1vw]">
                        <Image onClick={() => quantityMinusBtn(index)} className={`${item.quantity === 1 ? 'opacity-50' : 'opacity-100 active:scale-95'} w-[1.5vw] z-4 h-fit bg-[#FC9412] rounded-[0.4vw]`} src="/svg/minus.svg" loading="eager" alt="quantity minus" width={50} height={50} />
                        <p className="font-medium text-[1.4vw]">{item.quantity}</p>
                        <Image onClick={() => quantityPlusBtn(index)} className='active:scale-95 w-[1.5vw] z-4 h-fit bg-[#FC9412] rounded-[0.4vw]' src="/svg/plus.svg" loading="eager" alt="quantity plus" width={50} height={50} />
                      </div>
                      <p className="font-bold w-[18%] text-[1vw]">${item.price}</p>
                      <Image onClick={() => deleteFromCartBtn(item.name, index)} className='active:scale-95 w-[1.5vw] z-4 h-fit bg-[#FC9412] rounded-[0.4vw]' src="/svg/close-line.svg" loading="eager" alt="Remove" width={50} height={50} />
                    </div>
                  </div>
                </div>);
              })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default page