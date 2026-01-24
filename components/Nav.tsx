"use client";
import gsap from 'gsap';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { burgerContext } from '@/app/layout';
import { useContext, useEffect, useRef, useState } from 'react';


const Nav = () => {
    // Refs
    const homeRef = useRef(null), menuRef = useRef(null), storyRef = useRef(null), contactRef = useRef(null);
    const navRaf = useRef(null);
    // Animations Refs
    const HomeAnimateRef = useRef(null);

    const {checkoutData} = useContext(burgerContext);

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
        } else if (pre_path === '/contact') tl.to(contactRef.current, { backgroundColor: "transparent", color: "#505254" })

        if (path === '/') {
            tl.to(homeRef.current, { backgroundColor: "#FC9412", color: "#fcfcfa" })
        } else if (path === '/menu') {
            tl.to(menuRef.current, { backgroundColor: "#FC9412", color: "#fcfcfa" })
        } else if (path === '/ourstory') {
            tl.to(storyRef.current, { backgroundColor: "#FC9412", color: "#fcfcfa" })
        } else if (path === '/contact') tl.to(contactRef.current, { backgroundColor: "#FC9412", color: "#fcfcfa" })

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
                    <Image className='w-[2vw] bg-[#fcfcfa] p-[0.35vw] rounded-full border border-[#50525449]' src="/svg/heart-line.svg" alt="burger-logo" width={50} height={50} />
                    <Link className='relative' href="/checkout">
                        {(checkoutData.length !== 0)?
                        <div className="absolute top-[-0.1vw] flex items-center justify-center right-[-0.2vw] w-[0.9vw] h-[0.9vw] bg-[#FC9412] rounded-full border border-[#50525449]" >
                            <p className="text-[0.9vw] font-bold text-[#3a3b3c] leading-[0.8vw]">{checkoutData.length}</p>
                        </div>
                        : <></>}
                        <Image className='w-[2vw] bg-[#fcfcfa] p-[0.35vw] rounded-full border border-[#50525449]' src="/svg/shopping-bag-line.svg" alt="burger-logo" width={50} height={50} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav