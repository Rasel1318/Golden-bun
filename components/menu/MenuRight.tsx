"use client";

import { useContext, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { burgerContext } from "@/app/layout";
import gsap from "gsap";
import Link from "next/link";
import MorphSVGPlugin from "gsap/MorphSVGPlugin";

gsap.registerPlugin(MorphSVGPlugin);
const MenuRight = () => {

  // Context
  const { navToMenu, setNavToMenu, favoriteData, setFavoriteData, checkoutData, setCheckoutData, callFromHome, setCallFromHome, itemActive, setItemActive, menuActive, setMenuActive, MenuItemData, setMenuItemData } = useContext(burgerContext);

  // State
  const [quantity, setQuantity] = useState(MenuItemData?.[menuActive]?.[itemActive]?.quantity ?? 0);
  const [status, setStatus] = useState(MenuItemData?.[menuActive]?.[itemActive]?.status ?? false);
  type MenuItem = {
    name: string;
    description: string;
    price: number;
    img: string,
    rating: string,
    img2: string,
    quantity: number,
    status: boolean,
    menuInd: number,
    fev: boolean,
    id: string,
  };

  const [item, setItem] = useState<MenuItem | null>(MenuItemData[menuActive][itemActive]);
  const ItemDisRef = useRef([]);
  const cardRef = useRef([]);
  const plusSvgRef = useRef([]);
  const cardParentRef = useRef(null);
  const checkOutRef = useRef(null);
  const addCartRef = useRef(null);

  // Handelers / Functions
  const cardClickHandler = (index) => {
    if (index !== itemActive) setItem(MenuItemData[menuActive][index] ?? null);
  };
  const cardCartIconClick = (index) => {
    if (index === itemActive) {
      setStatus(true);
      if (quantity === 0) setQuantity(1);
    }
    setMenuItemData((prev) => {
      return prev.map((menu, pindex) =>
        (pindex === menuActive) ?
          menu.map((item, idx) => {
            if (idx === index) {
              const q: boolean = item.quantity === 0;
              if (q) return { ...item, quantity: 1, status: true };
              return { ...item, status: true };
            }
            return item;
          })
          : menu
      );
    });
    setCheckoutData((prev) => {
      const exist = prev.find((item) => item.name === MenuItemData[menuActive][index].name);
      if (exist) return prev;

      const data = MenuItemData[menuActive][index];
      data.quantity = (data.quantity !== 0) ? data.quantity : 1;
      data.status = true;
      return [...prev, data];
    })
    setFavoriteData((prev) => {
      const exist = prev.find((item) => item.name === MenuItemData[menuActive][index].name);
      if (exist) {
        return prev.map((item) =>
          item.name === MenuItemData[menuActive][index].name
            ? { ...item, status: true, quantity: 1 }
            : item
        )
      }
      gsap.to(plusSvgRef.current[index], {
        morphSVG: "M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z",
      })
      return prev;
    })
  }
  const cartBtnHandler = () => {
    const ctx = gsap.context(() => {
      gsap.to(addCartRef.current, {
        scale: 0.90,
        duration: 0.2,
        opacity: 0,
        overwrite: "auto",
        onComplete: () => {
          setStatus(true);
        },
      });
    });
    if (quantity === 0) setQuantity(1);
    setMenuItemData((prev) => {
      return prev.map((menu, index) =>
        (index === menuActive) ?
          menu.map((item, idx) => {
            if (idx === itemActive)
              return { ...item, quantity: (item.quantity !== 0) ? quantity : 1, status: true };
            return item;
          })
          : menu
      )
    });
    setCheckoutData((prev) => {
      const exist = prev.find((item) => item.name === MenuItemData[menuActive][itemActive].name);
      if (exist) return prev.map((item) =>
        item.name === MenuItemData[menuActive][itemActive].name
          ? { ...item, quantity: (item.quantity !== 0) ? quantity : 1, status: true }
          : item
      )
      const data = MenuItemData[menuActive][itemActive];
      data.quantity = (data.quantity !== 0) ? data.quantity : 1;
      data.status = true;
      return [...prev, data];
    })
    return () => ctx.revert();
  };


  const quantityMinusHandler = (name: string) => {
    setQuantity(prev => {
      const q: number = Math.max(prev - 1, 0);
      if (!q) {
        gsap.to(checkOutRef.current, {
          y: 50,
          opacity: 0,
          duration: 0.2,
          overwrite: "auto",
          onComplete: () => {
            setStatus(false);
          },
        });
      }
      return q;
    });
    setMenuItemData((prev) =>
      prev.map((menu, index) =>
        (index === menuActive) ?
          menu.map((item, idx) => {
            if (idx === itemActive) {
              const q: number = Math.max(item.quantity - 1, 0);
              if (!q) return { ...item, quantity: 0, status: false }
              return { ...item, quantity: q }
            }
            return item;
          })
          : menu
      )
    );
    setCheckoutData((prev) => {
      const exist = prev.find((item) => item.name === MenuItemData[menuActive][itemActive].name);
      if (exist) return prev.map((item) =>
        item.name === MenuItemData[menuActive][itemActive].name
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      )
      return [...prev, MenuItemData[menuActive][itemActive]];
    })
    setCheckoutData((prev) =>
      prev.filter(
        (item) => !(item.name === name && item.quantity === 0)
      )
    );
    setFavoriteData((prev) => {
      const q: number = Math.max(quantity - 1, 0);
      if (!q) {
        const exist = prev.find((item) => item.name === MenuItemData[menuActive][itemActive].name);
        if (exist) {
          return prev.map((item) =>
            item.name === MenuItemData[menuActive][itemActive].name
              ? { ...item, status: false, quantity: 0 }
              : item
          )
        }
      }
      return prev;
    })
  };
  const quantityPlusHandler = () => {
    setQuantity(prev => prev + 1);
    setMenuItemData((prev) => {
      return prev.map((menu, index) =>
        (index === menuActive) ?
          (menu.map((item, idx) =>
            (idx === itemActive) ?
              { ...item, quantity: item.quantity + 1 }
              : item
          ))
          : menu
      )
    });
    setCheckoutData((prev) => {
      const exist = prev.find((item) => item.name === MenuItemData[menuActive][itemActive].name);
      if (exist) return prev.map((item) =>
        item.name === MenuItemData[menuActive][itemActive].name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      const data = MenuItemData[menuActive][itemActive];
      data.quantity = (data.quantity !== 0) ? data.quantity : 1;
      data.status = true;
      return [...prev, data];
    })
  };

  const addFev = (index: number) => {
    setMenuItemData((prev) => {
      return prev.map((menu, pindex) =>
        (pindex === menuActive) ?
          menu.map((item, idx) => {
            if (idx === index) {
              return { ...item, fev: true };
            }
            return item;
          })
          : menu
      );
    });
    setFavoriteData((prev) => {
      const data = MenuItemData[menuActive][index];
      data.fev = true;
      return [...prev, data];
    })
  }
  const removeFev = (index: number) => {
    setMenuItemData((prev) => {
      return prev.map((menu, pindex) =>
        (pindex === menuActive) ?
          menu.map((item, idx) => {
            if (idx === index) {
              return { ...item, fev: false };
            }
            return item;
          })
          : menu
      );
    });
    setFavoriteData((prev) => {
      const exist = prev.find((item) => item.name === MenuItemData[menuActive][index].name);
      if (exist) return prev.filter((item) => !(item.name === MenuItemData[menuActive][index].name))
      return prev;
    })
  }

  // Animations
  useEffect(() => {
    if (status) {
      if (!checkOutRef.current) return;
      const ctx = gsap.context(() => {
        gsap.from(checkOutRef.current, {
          x: 100,
          opacity: 0,
          duration: 0.3,
          delay: 0.2,
          ease: "elastic.out(1,0.5)",
          overwrite: "auto",
        });
      });
      return () => ctx.revert();
    } else {
      if (!addCartRef.current) return;
      const ctx = gsap.context(() => {
        gsap.from(addCartRef.current, {
          y: 100,
          opacity: 0,
          duration: 0.3,
          delay: 0.2,
          ease: "elastic.out(1,0.5)",
          overwrite: "auto",
        });
      });
      return () => ctx.revert();
    }
  }, [status])

  useEffect(() => {
    if (!callFromHome) {
      setItemActive(0);
      setItem(MenuItemData[menuActive][0] ?? null);
    } else {
      setItem(MenuItemData[menuActive][itemActive] ?? null);
    }
    setCallFromHome(false);
    cardParentRef.current.scrollTop = 0;
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
    if (navToMenu) {
      setItem(MenuItemData[menuActive][itemActive] ?? null);
      setNavToMenu(false);
    }

    setQuantity(MenuItemData?.[menuActive]?.[itemActive]?.quantity ?? 0);
    setStatus(MenuItemData?.[menuActive]?.[itemActive]?.status ?? false);
    if (!item || !ItemDisRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(ItemDisRef.current, {
        y: 100,
        opacity: 0,
        duration: 0.2,
        stagger: 0.1,
        overwrite: "auto",
      })
    });
    return () => ctx.revert();
  }, [itemActive, menuActive, item]);

  return (
    <div className="w-[69vw] h-full flex justify-evenly">
      <div ref={cardParentRef} className='w-[38vw] h-full flex flex-wrap justify-center font-[font1] overflow-auto no-scrollbar'>
        {MenuItemData[menuActive].map((item, index) => {
          return (<div key={index} onClick={() => { setItemActive(index); cardClickHandler(index) }} ref={(e) => (cardRef.current[index] = e)} className="relative w-[45%] cursor-pointer h-fit flex flex-col p-[1vw] mt-[13vw]">
            <div className="w-[13vw] h-[9vw] z-1 rounded-full absolute top-[-9.5vw] left-[12.5%] bg-[#fc9312d6] blur-[2vw]" />
            <Image src={item.img} className='absolute top-[-12vw] left-[2%] w-[15vw] z-2' alt="Burger Imgae" loading="eager" width={585} height={530} />
            {(item.fev)
              ? <div onClick={() => removeFev(index)} className="absolute top-[-12vw] left-[2%] w-[15vw] z-3">
                <svg className="w-[2vw] p-[0.34vw] rounded-full border border-[#50525449]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,90,0,1"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg>
              </div>
              : <div onClick={() => addFev(index)} className="absolute top-[-12vw] left-[2%] w-[15vw] z-2">
                <Image className='w-[2vw] p-[0.35vw] rounded-full border border-[#50525449]' src="/svg/heart-line.svg" alt="burger-logo" width={50} height={50} />
              </div>
            }
            {(!item.status)
              ? <svg onClick={() => { cardCartIconClick(index); }} className="plus absolute hover:scale-110 transition-transform bottom-[16%] right-[12%] shadow-[6px_0_9px_rgba(0,0,0,0.3)] w-[2.2vw] z-4 h-fit bg-[#FC9412] rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path ref={(e) => plusSvgRef.current[index] = e} d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>
              : <svg className="plus absolute hover:scale-110 transition-transform bottom-[16%] right-[12%] shadow-[6px_0_9px_rgba(0,0,0,0.3)] w-[2.2vw] z-4 h-fit bg-[#FC9412] rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>
            }
            <h1 className="font-[fontBold] text-[1.2vw]">{item.name}</h1>
            <p className="text-[#FC9412] text-[1.3vw]">{item.rating}</p>
            <p className="text-[#FC9412] font-[fontBold] text-[1.2vw]">${item.price}</p>
          </div>);
        })}
      </div>

      <div className='w-[28vw] h-full font-[font1] overflow-auto no-scrollbar'>
        {item !== null && item !== undefined && (
          <div className=" w-full h-full flex flex-col justify-between  gap-[0.6vw] p-[1vw] pb-0">
            <Image ref={(e) => (ItemDisRef.current[0] = e)} src={item.img2} className="w-full h-[17vw] object-cover rounded-[1vw]" loading="eager" alt="Burger Image" width={500} height={500} />
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
              <div className="flex items-center justify-between w-[30%] gap-[1vw]">
                <Image onClick={() => quantityMinusHandler(item.name)} className='active:scale-95 transition-transform bottom-[16%] right-[12%] w-[1.8vw] z-4 h-fit bg-[#FC9412] rounded-full' src="/svg/minus.svg" loading="eager" alt="quantity minus" width={50} height={50} />
                <p className="font-bold  text-[1.5vw]">{quantity}</p>
                <Image onClick={() => quantityPlusHandler()} className='active:scale-95 transition-transform bottom-[16%] right-[12%] w-[1.8vw] z-4 h-fit bg-[#FC9412] rounded-full' src="/svg/plus.svg" loading="eager" alt="quantity plus" width={50} height={50} />
              </div>
              {!status
                ?
                <button ref={addCartRef} onClick={() => cartBtnHandler()} className="w-[40%] h-full cursor-pointer bg-[#FC9412] py-[0.2vw] rounded-[0.8vw] font-bold text-[1.2vw]"> Add-to-Cart</button>
                :
                <Link ref={checkOutRef} className="w-[40%] h-full cursor-pointer bg-[#FC9412] py-[0.2vw] text-center rounded-[0.8vw] font-bold text-[1.2vw]" href="/checkout">Check-Out</Link>
              }
            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default MenuRight