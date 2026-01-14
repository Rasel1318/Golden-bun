import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
    return (
        <div className='fixed top-[4vh] left-[7.5vw] z-2'>
            <div className='flex font-[font1] justify-between w-[85vw]'>
                <div className='flex items-center gap-2'>
                    <Image src="/svg/burgerlogo.svg" alt="burger-logo" width={50} height={50} className='w-[3vw]'/>
                    <Link className='font-bold pt-1 text-[2.2vw]' href="/">Golden Bun</Link>
                </div>
                <div className='flex items-center my-2 px-[1vw] border-2 font-semibold rounded-full border-[#50525449] gap-[2vw] text-[1.2vw] bg-[#fcfcfa]'>
                    <Link href="/">Home</Link>
                    <Link href="/menu">Menu</Link>
                    <Link href="/ourstory">Our Story</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className='flex w-[10vw] h-full '>
                    <Image src="/svg/search-line.svg" alt="burger-logo" width={50} height={50} className='w-[3vw]'/>
                    <Image src="/svg/heart-line.svg" alt="burger-logo" width={50} height={50} className='w-[3vw]'/>
                    <Image src="/svg/shopping-bag-line.svg" alt="burger-logo" width={50} height={50} className='w-[3vw]'/>
                    

                </div>

            </div>
        </div>
    )
}

export default Nav