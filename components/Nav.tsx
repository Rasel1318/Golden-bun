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
    const searchInputRef = useRef(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);


    // Animations Refs
    const HomeAnimateRef = useRef(null);
    const { navToMenu, setNavToMenu, checkoutData, MenuItemData, setMenuActive, setItemActive, setCallFromHome, preActiveSelection, setPreActiveSelection } = useContext(burgerContext);

    // States
    const path = usePathname();
    const [pre_path, setPre_path] = useState(path);
    const [focused, setFocused] = useState(false);
    const [seachVal, setSeachVal] = useState("");
    const searchResult = (seachVal.length !== 0) ? MenuItemData.flatMap((prev) => {
        return prev.filter((item) =>
            item.name.toLowerCase().includes(seachVal.toLowerCase())
        )
    }) : [];

    // Functions
    function truncateWords(text: string, maxWords = 7) {
        const words = text.trim().split(/\s+/);
        if (words.length <= maxWords) return text;
        return words.slice(0, maxWords).join(" ") + "...";
    }
    const searchItemClick = (item) => {
        if(preActiveSelection === -1) setPreActiveSelection(item.menuInd);
        setMenuActive(item.menuInd);
        setCallFromHome(()=>true);
        const ind = MenuItemData?.[item.menuInd].findIndex(it => it.name===item.name);
        setItemActive(()=>ind);
        setNavToMenu(true);
        setFocused(false);
    }

    // Animations
    useEffect(() => {
        if (focused) {
            gsap.to(searchInputRef.current, {
                width: "20vw",
                duration: 0.3,
                overwrite: "auto",
            })
        } else {
            gsap.to(searchInputRef.current, {
                width: 0,
                duration: 0.3,
                overwrite: "auto",
            })
        }
    }, [focused])

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
            tl.to(checkOutRef.current, { backgroundColor: "#fcfcfa", color: "#505254" })
            if (cartCountRef.current) tl.to(cartCountRef.current, { backgroundColor: "#FC9412" })
        } else if (pre_path === '/favorite') {
            tl.to(favoriteRef.current, { backgroundColor: "#fcfcfa", color: "#505254" })
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
        } else if (path === '/favorite') {
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

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
                setFocused(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [focused]);

    return (
        <div ref={navRaf} className='fixed top-[3vh] left-[7.5vw] z-7'>
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
                <div className='flex gap-[1vw] justify-center items-center w-fit h-full'>
                    <div ref={wrapperRef} className='relative h-fit flex justify-between items-center bg-[#fcfcfa] rounded-full border border-[#50525449]'>
                        <Image onClick={() => searchInputRef.current?.focus()} className='w-[2vw]  p-[0.35vw] ' src="/svg/search-line.svg" alt="search logo" width={50} height={50} />
                        <input ref={searchInputRef} value={seachVal} onChange={(e) => setSeachVal(e.target.value)} placeholder='Search...' onFocus={() => setFocused(true)}
                            className="w-0 text-[1vw] font-bold text-[#505254] outline-none" />

                        {(focused) ?
                            <div className='w-full h-[16vw] absolute top-[2.5vw] flex flex-col gap-[0.4vw] overflow-auto no-scrollbar'>
                                {searchResult.map((item, index) => {
                                    return (<div key={index} onClick={() => searchItemClick(item)} className='w-full h-[33%] p-[0.2vw] cursor-pointer bg-white/20 backdrop-blur border-2 border-white/30 rounded-[1vw]'>
                                        <Link href="/menu" className='flex gap-[0.5vw] items-center'>
                                            <Image src={item.img} className='w-[5vw]' alt="Burger Imgae" loading="eager" width={585} height={530} />
                                            <div className="flex flex-col gap-[0.3vw] justify-center w-[15vw] h-full ">
                                                <h1 className="font-[fontBold] leading-[1vw] text-[1.1vw]">{item.name}</h1>
                                                <p className="w-[13vw] leading-[1vw] text-[#505254] text-[0.9vw]" title={item.description}>
                                                    {truncateWords(item.description, 7)}
                                                </p>
                                            </div>
                                        </Link>
                                    </div>);
                                })}
                            </div>
                            : <></>
                        }

                    </div>

                    <Link href="/favorite">
                        <Image ref={favoriteRef} className='w-[2vw] bg-[#fcfcfa] p-[0.35vw] rounded-full border border-[#50525449]' src="/svg/heart-line.svg" alt="burger-logo" width={50} height={50} />
                    </Link>
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