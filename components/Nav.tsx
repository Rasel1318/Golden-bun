"use client";
import gsap from 'gsap';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react';

const Nav = () => {
    const homeRef = useRef(null), menuRef = useRef(null), storyRef = useRef(null), contactRef = useRef(null);
    
    // let pre_path:string = usePathname();
    let path = usePathname();
    const [pre_path, setPre_path] = useState(path);
    

    useEffect(() => {
        const tl = gsap.timeline();
        if(pre_path==='/'){
            tl.to(homeRef.current,{backgroundColor:"transparent"})
        }else if(pre_path==='/menu'){
            tl.to(menuRef.current,{backgroundColor:"transparent"})
        }else if(pre_path==='/ourstory'){
            tl.to(storyRef.current,{backgroundColor:"transparent"})
        }else tl.to(contactRef.current,{backgroundColor:"transparent"})

        if(path==='/'){
            tl.to(homeRef.current,{backgroundColor:"#FC9412"})
        }else if(path==='/menu'){
            tl.to(menuRef.current,{backgroundColor:"#FC9412"})
        }else if(path==='/ourstory'){
            tl.to(storyRef.current,{backgroundColor:"#FC9412"})
        }else tl.to(contactRef.current,{backgroundColor:"#FC9412"})
        
        tl.to(homeRef.current,{
            onComplete:()=>setPre_path(path)
        })
    }, [path])


    return (
        <div className='fixed top-[4vh] left-[7.5vw] z-2'>
            <div className='flex font-[font1] justify-between items-center w-[85vw]'>
                <div className='flex items-center gap-2'>
                    <Image src="/svg/burgerlogo.svg" loading="eager" alt="burger-logo" width={50} height={50} className='w-[3vw]' />
                    <Link className='font-bold pt-1 text-[2.2vw]' href="/">Golden Bun</Link>
                </div>
                <div className='flex items-center my-2 border-2 font-semibold rounded-full border-[#50525449]  text-[1.2vw] bg-[#fcfcfa]'>
                    <Link ref={homeRef} className='z-1 px-[1vw] rounded-full' href="/">Home</Link>
                    <Link ref={menuRef} className='z-1 px-[1vw] rounded-full' href="/menu">Menu</Link>
                    <Link ref={storyRef} className='z-1 px-[1vw] rounded-full' href="/ourstory">Our Story</Link>
                    <Link ref={contactRef} className='z-1 px-[1vw] rounded-full' href="/contact">Contact</Link>
                </div>
                <div className='flex gap-[1vw] justify-center items-center w-[10vw] h-full '>
                    <Image className='w-[2vw] bg-[#fcfcfa] p-[0.35vw] rounded-full border border-[#50525449]' src="/svg/search-line.svg" alt="burger-logo" width={50} height={50} />
                    <Image className='w-[2vw] bg-[#fcfcfa] p-[0.35vw] rounded-full border border-[#50525449]' src="/svg/heart-line.svg" alt="burger-logo" width={50} height={50} />
                    <Image className='w-[2vw] bg-[#fcfcfa] p-[0.35vw] rounded-full border border-[#50525449]' src="/svg/shopping-bag-line.svg" alt="burger-logo" width={50} height={50} />
                </div>
            </div>
        </div>
    )
}

export default Nav