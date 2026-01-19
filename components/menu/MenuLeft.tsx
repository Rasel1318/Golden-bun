"use client";
import Image from "next/image";
import { useContext } from "react";
import { BurgerMenuContext } from "@/app/menu/page";

const MenuLeft = () => {
    const { MenuData } = useContext(BurgerMenuContext);
    console.log(MenuData[0]);
    return (
        <div className="w-[17%] h-full p-[0.5vw] font-[font1] border-2 border-[#eaa857] rounded-2xl bg-[#fcfcfa]">
            <h3 className="uppercase font-bold">Main Menu</h3>

            <div className="flex flex-wrap gap-[0.5vw] pt-[0.6vw]">
                {MenuData.map((item, index) => {
                    return (<div key={index} className="flex w-full cursor-pointer shrink-0 items-center p-[0.5vw] rounded-[0.8vw] gap-[1vw] border-2 border-[#d5dce249] ">
                        <div className="bg-[#fce0b6] rounded-[0.4vw]">
                            <Image src={item.svg} className="w-[2.8vw] p-[0.4vw]" alt="burger_icon" width={64} height={64} />
                        </div>
                        <h3 className="text-[1.5vw] text-[#505254] font-bold">{item.name}</h3>
                    </div>)

                })}

                <div className="flex w-full shrink-0 items-center p-[0.5vw] rounded-[0.8vw] gap-[1vw] bg-[#FC9412]">
                    <div className="bg-[#fce0b6] rounded-[0.4vw]">
                        <Image src="/svg/burger-icon.png" className="w-[2.8vw] p-[0.4vw]" alt="burger_icon" width={64} height={64} />
                    </div>
                    <h3 className="text-[1.5vw] text-[#fcfcfa] font-bold">Burger</h3>
                </div>
            </div>

        </div>
    )
}

export default MenuLeft;