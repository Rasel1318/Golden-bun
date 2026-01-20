"use client";
import Image from "next/image";
import { useContext, useEffect, useRef } from "react";
import { BurgerMenuContext } from "@/app/menu/page";
import gsap from "gsap";

const MenuLeft = () => {
    // Refs
    const mainMenuRef = useRef([]);
    const menuOverlayRef = useRef(null);

    // Animation Refs
    const menuTlRef = useRef<gsap.core.Timeline | null>(null);

    // Contexts
    const { preActiveSelection, setPreActiveSelection, activeSelection, setActiveSelection, MenuData } = useContext(BurgerMenuContext);

    useEffect(() => {
        const ele = mainMenuRef.current[activeSelection];
        gsap.to(menuOverlayRef.current, {
            y: ele.getBoundingClientRect().top - menuOverlayRef.current.getBoundingClientRect().top,
            duration: "none",
        });
        ele.querySelector("h3").classList.add("overlay-enter");
        menuOverlayRef.current.style.height = `${ele.getBoundingClientRect().height}px`;
        setPreActiveSelection(activeSelection);
    }, []);

    useEffect(() => {
        if (preActiveSelection === -1) return;
        const pre_ele = mainMenuRef.current[preActiveSelection];
        const next_ele = mainMenuRef.current[activeSelection];
        const overly_ele = menuOverlayRef.current;

        menuTlRef.current = gsap.timeline();

        pre_ele.querySelector("h3").classList.remove("overlay-enter");
        pre_ele.querySelector("h3").classList.add("overlay-out");

        const next_y = next_ele.getBoundingClientRect().y;
        const overly_y = overly_ele.getBoundingClientRect().y;

        menuTlRef.current.to(overly_ele, {
            y: `+=${next_y - overly_y}`,
            duration: 0.7,
            overwrite: "auto",
            ease: "elastic.out(1,1)",
        });

        next_ele.querySelector("h3").classList.add("overlay-enter");
        next_ele.querySelector("h3").classList.remove("overlay-out");

        setPreActiveSelection(activeSelection);
        return () => {
            menuTlRef.current?.kill();
        };
    }, [activeSelection]);


    const mainMenuClickHandler = (index) => {
        if (index === activeSelection) return;
        setActiveSelection(index);
    }

    return (
        <div className="w-[15vw] h-full p-[0.5vw] overflow-auto font-[font1] ">
            <h3 className="uppercase text-[0.95vw] text-[#737679] font-bold">Main Menu</h3>
            <div className="relative flex flex-wrap gap-[0.5vw] pt-[0.6vw]">
                <div ref={menuOverlayRef} className="absolute top-0 w-full z-0 rounded-[0.8vw] bg-[#FC9412]" />
                {MenuData.slice(0, 5).map((item, index) => {
                    return (<div key={index} onClick={() => mainMenuClickHandler(index)} ref={(el) => (mainMenuRef.current[index] = el)} className="flex z-1 w-full cursor-pointer grow-0 shrink-0 items-center p-[0.5vw] rounded-[0.8vw] gap-[1vw] border-2 border-[#d5dce249] ">
                        <div className="bg-[#fce0b6] rounded-[0.4vw]">
                            <Image src={item.svg} className="w-[2.8vw] p-[0.4vw]" alt="burger_icon" width={64} height={64} />
                        </div>
                        <h3 className="text-[1.5vw] text-[#505254] font-bold">{item.name}</h3>
                    </div>);
                })}
                <h3 className="uppercase text-[0.95vw] text-[#737679] font-bold">Drinks</h3>
                {MenuData.slice(5).map((item, index) => {
                    return (<div key={index} onClick={() => mainMenuClickHandler(index + 5)} ref={(el) => (mainMenuRef.current[index + 5] = el)} className="flex z-1 w-full cursor-pointer shrink-0 items-center p-[0.5vw] rounded-[0.8vw] gap-[1vw] border-2 border-[#d5dce249] ">
                        <div className="bg-[#fce0b6] rounded-[0.4vw]">
                            <Image src={item.svg} className="w-[2.8vw] p-[0.4vw]" alt="burger_icon" width={64} height={64} />
                        </div>
                        <h3 className="text-[1.5vw] text-[#505254] font-bold">{item.name}</h3>
                    </div>);
                })}
            </div>

        </div>
    )
}

export default MenuLeft;