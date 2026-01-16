import Image from 'next/image'
import React, { useContext } from 'react'
import { burgerContext } from '@/app/page'


const HeroBottom = () => {
    const burgerInfo = useContext(burgerContext) as { name: string; description: string; price: number; img: string; }
  
  return (
    <div className=' w-full h-[22%] font-[fontbold]'>
      <div className='w-[50%] h-full bg-blue-300'>
        <div className='flex items-center justify-center gap-[1vw]'>
          <div className='flex gap-[.5vw] px-[1vw] py-[.8vw] border-2 border-[#eaa857] rounded-3xl bg-[#fcfcfa]'>
            <Image src="/media/classic_cheeses.png" className='w-[5vw]' alt="Burger Imgae" loading="eager" width={585} height={530} />
            <div className='flex flex-col'>
                <p className='text-[#FC9412] text-[1.5vw]'>★★★★★</p>
                <h1>{burgerInfo.name}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBottom