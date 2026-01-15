import React, { useContext } from 'react'
import { burgerContext } from '@/app/page'

const HeroTop = () => {

    const burgerInfo = useContext(burgerContext) as {name: string; description: string; price: number; img: string;}

    return (
        <div className='w-full h-full flex font-[font1]'>
            <div className='w-[45%] h-[75%] flex flex-col justify-center gap-[1.2vh] bg-blue-200 '>
                <p className='uppercase text-[#FC9412] rounded-3xl w-fit px-4 py-1 font-semibold bg-[#FEE4C2]'>the original taste</p>
                <h1>{burgerInfo.name}</h1>
                <p>{burgerInfo.description}</p>
                <div> 
                    <button>order now</button>
                    <p>${burgerInfo.price}</p>
                </div>
            </div>
            <div className='w-[55%] h-[75%] bg-amber-200 '></div>
        </div>
    )
}

export default HeroTop