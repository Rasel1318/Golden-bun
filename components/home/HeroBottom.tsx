import Image from 'next/image'
import React, { useContext } from 'react'
import { burgerContext } from '@/app/page'


const HeroBottom = () => {
  const burgerInfoContext = useContext(burgerContext);

  return (
    <div className=' w-full h-[22%] font-[fontbold]'>
      <div className='w-[50%] h-full '>
        <div className='flex h-full items-center gap-[1vw]'>
          {burgerInfoContext.map((burgerInfo, index)=>{
            return (<div key={index} className='flex gap-[.5vw] border-2 overflow-hidden border-[#eaa857] rounded-[1vw] bg-[#fcfcfa]'>
              <div className='ml-[1vw] flex items-center '>
                <Image src="/media/classic_cheeses.png" className='w-[6vw] h-fit' alt="Burger Imgae" loading="eager" width={585} height={530} />
              </div>
              <div className='flex flex-col my-[0.6vw]'>
                <p className='text-[#FC9412] text-[1.3vw]'>{burgerInfo.rating}</p>
                <h1 className='text-[1.2vw] leading-[1vw]'>{burgerInfo.name.split(" ").slice(0, 2).join(" ")} <br />
                  {burgerInfo.name.split(" ").slice(2).join(" ")}
                </h1>
                <p className='text-[#FC9412] text-[1.2vw]'>${burgerInfo.price}</p>
              </div>
              <div className='flex items-end'>
                <Image className='w-[2vw] h-fit bg-[#FC9412] rounded-tl-[0.8vw]' src="/svg/plus1.svg" loading="eager" alt="burger-logo" width={50} height={50} />
              </div>
            </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default HeroBottom