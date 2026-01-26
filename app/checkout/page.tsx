"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { burgerContext } from "../layout";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Page = () => {
  // State
  const [cvv, setCvv] = useState("");
  const [Card1, setCard1] = useState("");
  const [Card2, setCard2] = useState("");
  const [Card3, setCard3] = useState("");
  const [Card4, setCard4] = useState("");
  const [subtotal, setSubtotal] = useState(0);
  const [delivery, setDelivery] = useState(0.99);
  const [total, setTotal] = useState(0);

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
        x: -800,
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
  useEffect(() => {
    setSubtotal(()=>0);
    const initialTotal = checkoutData.reduce((sum:number, item)=>{
      return sum + Number(item.price)*Number(item.quantity);
    }, 0)
    setSubtotal(Number(initialTotal.toFixed(2)));
    setTotal(Number((initialTotal + ((checkoutData.length===0)?0:(Number(delivery)))).toFixed(3)));
  }, [checkoutData])

  return (
    <div className="w-full h-full pt-[7vh] flex items-center justify-center font-[font1]">
      <div className="w-[85vw] h-[85vh] ">
        <div className="w-full h-full flex justify-evenly items-center ">

          {/* Left Side Bar */}
          <div className="w-[60%] h-full">
            <h3 className="font-[fontBold] text-[2vw] mb-[2vw]">Shopping Cart.</h3>
            <div className="flex w-full text-[0.9vw] font-bold justify-between">
              <p className="ml-[3.5vw]">Product</p>
              <div className="flex pr-[5.7vw] gap-[3.8vw]">
                <p>Quantity</p>
                <p>Total Price</p>
              </div>
            </div>

            <div ref={checkOutParent} className="flex flex-col w-full h-[70%] border-y-2 border-[#c2c1b4] gap-3 overflow-auto no-scrollbar">

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
            <div className="w-full h-[8%] text-[0.9vw] text-[#505254] font-medium flex flex-col items-end justify-center">
              <div className="flex w-[25%] px-[2vw] justify-between">
                <p>Subtotal :</p>
                <p className="font-bold text-[#505254]">${subtotal}</p>
              </div>
              <div className="flex w-[25%] px-[2vw] justify-between border-b-2 border-[#c2c1b4]">
                <p>Delivery :</p>
                <p className="font-bold text-[#505254]">${((checkoutData.length === 0) ? 0 : delivery)}</p>
              </div>
            </div>
            <div className="w-full h-[6%] text-[0.9vw] text-[#1D1E20] font-medium flex items-center justify-between ">
              <Link href="/menu" className="flex items-center justify-center">
                <Image className='w-[1.4vw] ' src="/svg/less-then.svg" alt="burger-logo" width={50} height={50} />
                <p className="font-bold">Continue Shopping</p>
              </Link>
              <div className="flex w-[25%] px-[2vw] text-[#1D1E20] justify-between">
                <p className="font-bold">Total :</p>
                <p className="font-bold ">${total}</p>
              </div>
            </div>
          </div>

          {/* Right Side Bar */}
          <div className="w-[25%] h-fit rounded-[1vw] shadow-lg border border-gray-100 p-[1vw]">
            <div className="flex items-center justify-between">
              <h2 className="text-[1.5vw] font-extrabold text-[#1D1E20]">Payment Info.</h2>
            </div>

            <div className="mt-[1.2vw] space-y-[1.5vw]">
              <div>
                <p className="text-[0.8vw] font-medium text-[#505254]">Payment Method:</p>
                <div className="mt-[0.5vw] space-y-[0.5vw]">
                  <label className="flex items-center gap-[0.5vw] cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      defaultChecked
                      className="h-[1vw] w-[1vw] accent-amber-600"
                    />
                    <span className="inline-flex h-[1.5vw] w-[1.5vw] items-center justify-center rounded-[0.4vw] bg-gray-100 text-[#505254]" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M3 7.5C3 6.12 4.12 5 5.5 5h13C19.88 5 21 6.12 21 7.5v9c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 19 3 17.88 3 16.5v-9Z" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.8" />
                      </svg>
                    </span>
                    <span className="text-[0.8vw] font-medium text-[#505254]">Credit Card</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="text-[0.8vw] font-medium text-[#505254]">Name On Card:</p>
                <input className="mt-[0.5vw] w-full h-[10%] rounded-[0.5vw] border border-gray-200 bg-gray-50 px-[0.5vw] py-[0.5vw] text-[0.8vw] font-bold text-[#505254] outline-none focus:border-amber-400" />
              </div>

              <div className="w-full">
                <p className="text-[0.8vw] font-medium text-[#505254]">Card Number:</p>
                <div className="flex justify-between">
                  <input inputMode="numeric" value={Card1}
                    onChange={(e) => {
                      const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
                      setCard1(digits);
                    }} className="mt-[0.5vw] w-[20%] text-center h-[10%] rounded-[0.5vw] border border-gray-200 bg-gray-50 px-[0.5vw] py-[0.5vw] text-[0.8vw] font-bold text-[#505254] outline-none focus:border-amber-400" />
                  <input inputMode="numeric" value={Card2}
                    onChange={(e) => {
                      const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
                      setCard2(digits);
                    }} className="mt-[0.5vw] w-[20%] text-center h-[10%] rounded-[0.5vw] border border-gray-200 bg-gray-50 px-[0.5vw] py-[0.5vw] text-[0.8vw] font-bold text-[#505254] outline-none focus:border-amber-400" />
                  <input inputMode="numeric" value={Card3}
                    onChange={(e) => {
                      const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
                      setCard3(digits);
                    }} className="mt-[0.5vw] w-[20%] text-center h-[10%] rounded-[0.5vw] border border-gray-200 bg-gray-50 px-[0.5vw] py-[0.5vw] text-[0.8vw] font-bold text-[#505254] outline-none focus:border-amber-400" />
                  <input inputMode="numeric" value={Card4}
                    onChange={(e) => {
                      const digits = e.target.value.replace(/\D/g, "").slice(0, 4);
                      setCard4(digits);
                    }} className="mt-[0.5vw] w-[20%] text-center h-[10%] rounded-[0.5vw] border border-gray-200 bg-gray-50 px-[0.5vw] py-[0.5vw] text-[0.8vw] font-bold text-[#505254] outline-none focus:border-amber-400" />
                </div>
              </div>

              {/* Expiration + CVV */}
              <div className=" w-full flex gap-[1vw] justify-evenly items-end">
                <div className="w-[30%] h-[10%]">
                  <p className="text-[0.8vw] font-medium text-[#505254]">Expiration Date:</p>
                  <select className="appearance-none mt-[0.5vw] w-full text-center rounded-[0.5vw] border border-gray-200 bg-[#fcfcfa] px-[0.5vw] py-[0.5vw] text-[0.8vw] font-bold text-[#505254] outline-none focus:border-amber-400">
                    <option>05</option>
                    <option>06</option>
                    <option>07</option>
                    <option>08</option>
                    <option>09</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                </div>

                <div className="pt-[0.5vw] h-[10%] w-[30%] flex justify-end">
                  <select className="appearance-none mt-[0.5vw] w-full text-center rounded-[0.5vw] border border-gray-200 bg-[#fcfcfa] px-[0.5vw] py-[0.5vw] text-[0.8vw] font-bold text-[#505254] outline-none focus:border-amber-400">
                    <option>2023</option>
                    <option>2024</option>
                    <option>2025</option>
                    <option>2026</option>
                    <option>2027</option>
                    <option>2028</option>
                    <option>2029</option>
                    <option>2030</option>
                  </select>
                </div>

                <div className="w-[25%] h-[10%]">
                  <p className="text-[0.8vw] font-medium text-[#505254]">CVV:</p>
                  <input inputMode="numeric"
                    value={cvv}
                    onChange={(e) => {
                      const digits = e.target.value.replace(/\D/g, "").slice(0, 3);
                      setCvv(digits);
                    }} className="mt-[0.5vw] w-full h-[10%] text-center rounded-[0.5vw] border border-gray-200 bg-gray-50 px-[0.5vw] py-[0.5vw] text-[0.8vw] font-bold text-[#505254] outline-none focus:border-amber-400" />
                </div>
              </div>

              <button className="mt-[0.8vw] w-full rounded-[0.5vw] bg-[#FC9412] py-[0.5vw] text-[1vw] font-semibold text-white shadow-sm active:scale-[0.99]">Check Out</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page