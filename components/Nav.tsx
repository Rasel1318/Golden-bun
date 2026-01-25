"use client";
import gsap from 'gsap';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { burgerContext } from '@/app/layout';
import { useContext, useEffect, useRef, useState } from 'react';


const Nav = () => {
    // Refs
    const homeRef = useRef(null), menuRef = useRef(null), storyRef = useRef(null), contactRef = useRef(null), checkOutRef = useRef(null), favoriteRef = useRef(null);
    const navRaf = useRef(null);
    const cartCountRef = useRef(null);
    // Animations Refs
    const HomeAnimateRef = useRef(null);
    const { checkoutData } = useContext(burgerContext);

    const path = usePathname();
    const [pre_path, setPre_path] = useState(path);

    // Animations
    useEffect(() => {
        const tl = gsap.timeline();
        if (pre_path === '/') {
            tl.to(homeRef.current, { backgroundColor: "transparent", color: "#505254" })
        } else if (pre_path === '/menu') {
            tl.to(menuRef.current, { backgroundColor: "transparent", color: "#505254" })
        } else if (pre_path === '/ourstory') {
            tl.to(storyRef.current, { backgroundColor: "transparent", color: "#505254" })
        } else if (pre_path === '/contact') {
            tl.to(contactRef.current, { backgroundColor: "transparent", color: "#505254" })
        } else if (pre_path === '/checkout') {
            tl.to(checkOutRef.current, { backgroundColor: "transparent", color: "#505254" })
            if (cartCountRef.current) tl.to(cartCountRef.current, { backgroundColor: "#FC9412" })
        }else if (pre_path === '/favorite') {
            tl.to(favoriteRef.current, { backgroundColor: "transparent", color: "#505254" })
        }

        if (path === '/') {
            tl.to(homeRef.current, { backgroundColor: "#FC9412", color: "#fcfcfa" })
        } else if (path === '/menu') {
            tl.to(menuRef.current, { backgroundColor: "#FC9412", color: "#fcfcfa" })
        } else if (path === '/ourstory') {
            tl.to(storyRef.current, { backgroundColor: "#FC9412", color: "#fcfcfa" })
        } else if (path === '/contact') {
            tl.to(contactRef.current, { backgroundColor: "#FC9412", color: "#fcfcfa" })
        } else if (path === '/checkout') {
            tl.to(checkOutRef.current, { backgroundColor: "#FC9412", color: "#fcfcfa" })
            if (cartCountRef.current) tl.to(cartCountRef.current, { backgroundColor: "#FFF8EE" })
        }else if (path === '/favorite') {
            tl.to(favoriteRef.current, { backgroundColor: "#FC9412", color: "#fcfcfa" })
        }

        tl.to(homeRef.current, {
            onComplete: () => setPre_path(path),
        });
    }, [path])

    useEffect(() => {
        gsap.from(navRaf.current, {
            y: -100,
            opacity: 0,
            duration: 0.4,
        })
    }, [])

    useEffect(() => {
        let delayed;
        const animateHome = () => {
            HomeAnimateRef.current = gsap.timeline();
            HomeAnimateRef.current.to(menuRef.current, {
                color: "transparent",
                duration: 3,
                backgroundPosition: "300% 0%",
                overwrite: "auto",
            })
            HomeAnimateRef.current.to(menuRef.current, {
                duration: 3,
                backgroundPosition: "0% 0%",
                overwrite: "auto",
            })
            delayed = gsap.delayedCall(7, animateHome);
        }

        if (path !== "/menu") {
            const ele = menuRef.current;
            ele.style.background = "linear-gradient(90deg,#505254,#505254,#00e0ff,#505254)";
            ele.style.backgroundSize = "300% 100%";
            ele.style.backgroundPosition = "0% 0%";
            ele.style.setProperty('-webkit-background-clip', 'text');
            ele.style.backgroundClip = "text";
            ele.style.color = "transparent";
            animateHome();
        }
        else {
            HomeAnimateRef.current?.kill();
            menuRef.current.style.background = "#505254";
            menuRef.current.style.color = "#fcfcfa";
        }
        return () => delayed?.kill();
    }, [path])

    useEffect(() => {
        if (!cartCountRef.current) return;
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            tl.from(cartCountRef.current, {
                scale: 3,
                duration: 0.3,
                overwrite: "auto",
            })
        });
        return () => ctx.revert();
    }, [checkoutData.length])

    return (
        <div ref={navRaf} className='fixed top-[3vh] left-[7.5vw] z-2'>
            <div className='flex font-[font1] justify-between items-center w-[85vw]'>
                <Link href="/" className='flex ml-[0.5vw] items-center gap-2'>
                    <Image src="/svg/burgerlogo.svg" loading="eager" alt="burger-logo" width={50} height={50} className='w-[2.6vw]' />
                    <h1 className='font-bold pt-1 text-[1.8vw] text-[#1D1E20]'>Golden Bun</h1>
                </Link>
                <div className='flex items-center my-2 border-2 font-semibold rounded-full border-[#50525449]  text-[1.2vw] bg-[#fcfcfa]'>
                    <Link ref={homeRef} className='z-1 px-[1vw] text-[#505254] rounded-full' href="/">Home</Link>
                    <Link ref={menuRef} className='z-1 px-[1vw] rounded-full' href="/menu">Menu</Link>
                    <Link ref={storyRef} className='z-1 px-[1vw] text-[#505254] rounded-full' href="/ourstory">Our Story</Link>
                    <Link ref={contactRef} className='z-1 px-[1vw] text-[#505254] rounded-full' href="/contact">Contact</Link>
                </div>
                <div className='flex gap-[1vw] justify-center items-center w-[10vw] h-full '>

                    <Image className='w-[2vw] bg-[#fcfcfa] p-[0.35vw] rounded-full border border-[#50525449]' src="/svg/search-line.svg" alt="burger-logo" width={50} height={50} />
                    <Link href="/favorite">
                        <Image ref={favoriteRef} className='w-[2vw] bg-[#fcfcfa] p-[0.35vw] rounded-full border border-[#50525449]' src="/svg/heart-line.svg" alt="burger-logo" width={50} height={50} />
                    </Link>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853Z"></path></svg> */}
                    <Link className='relative' href="/checkout">
                        {(checkoutData.length !== 0) ?
                            <div ref={cartCountRef} className="absolute top-[-0.3vw] flex items-center justify-center right-[-0.3vw] w-[1vw] h-[1vw] bg-[#FC9412] rounded-full border border-[#50525449]" >
                                <p className="text-[1vw] font-bold text-black leading-[0.8vw]">{checkoutData.length}</p>
                            </div>
                            : <></>}
                        <Image ref={checkOutRef} className='w-[2vw] bg-[#fcfcfa] p-[0.35vw] rounded-full border border-[#50525449]' src="/svg/shopping-bag-line.svg" alt="burger-logo" width={50} height={50} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav