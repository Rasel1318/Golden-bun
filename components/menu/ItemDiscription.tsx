"use client";

import Image from "next/image";


const ItemDiscription = () => {
  return (
    <div className='w-[28vw] h-full font-[font1] overflow-auto no-scrollbar'>
      <div className=" w-full h-full flex flex-col justify-between  gap-[0.6vw] p-[1vw] pb-0">
        <Image src="/media/full_images/classic_cheeses2.png" className="w-full h-auto object-cover rounded-[1vw]" alt="Burger Image" width={500} height={500} />
        <div className=" w-full flex justify-between">
          <h1 className="font-[fontBold] leading-[2vw] text-[2vw]">Old School Cheese Burger</h1>
          <div className="flex flex-col items-end leading-[1.8vw]">
            <p className="text-[#FC9412] font-[fontBold] text-[1.8vw]">$15.99</p>
            <p className="text-[#FC9412] text-[1.6vw]">★★★★★</p>
          </div>
        </div>
        <p className="text-[1.2vw] text-[#737679] font-bold">About Description :</p>
        <p className="text-[#555555] text-[1vw] ">Clissic beef, melted cheese, fresh toppings nostalgic flavor in a bun. Enjoy a timeless favorite that satisfies your cravings with every bite.</p>
        <p className="text-[1.2vw] text-[#737679] font-bold">Ingredients :</p>
        <div className="flex gap-[1vw] ">
          <div className="border-2 w-fit rounded-[0.5vw] overflow-hidden border-[#eaa857]"><Image src="/svg/carrot.png" className="w-[4vw] bg-[#f5efdf] p-[0.4vw]" alt="burger_icon" width={128} height={106} /></div>
          <div className="border-2 w-fit rounded-[0.5vw] overflow-hidden border-[#92ea57]"><Image src="/svg/lettuce.png" className="w-[4vw] bg-[#ebf5df] p-[0.4vw]" alt="burger_icon" width={128} height={106} /></div>
          <div className="border-2 w-fit rounded-[0.5vw] overflow-hidden border-[#ea8157]"><Image src="/svg/tomato.png" className="w-[4vw] bg-[#f5e2df] p-[0.4vw]" alt="burger_icon" width={128} height={106} /></div>
          <div className="border-2 w-fit rounded-[0.5vw] overflow-hidden border-[#57d750]"><Image src="/svg/cucumber.png" className="w-[4vw] bg-[#e5f5df] p-[0.4vw]" alt="burger_icon" width={128} height={106} /></div>
        </div>

        <div className="w-full mb-1 h-fit flex justify-between mt-auto">
          <div className="flex items-center w-[60%] gap-[1vw]">
            <Image className='active:scale-95 transition-transform bottom-[16%] right-[12%] w-[1.8vw] z-4 h-fit bg-[#FC9412] rounded-full' src="/svg/minus.svg" loading="eager" alt="Add Cart" width={50} height={50} />
            <p className="font-bold text-[1.5vw]">2</p>
            <Image className='active:scale-95 transition-transform bottom-[16%] right-[12%] w-[1.8vw] z-4 h-fit bg-[#FC9412] rounded-full' src="/svg/plus.svg" loading="eager" alt="Add Cart" width={50} height={50} />
          </div>
          <button className="w-[40%] h-full bg-[#FC9412] py-[0.2vw] rounded-[0.8vw] font-bold text-[1.2vw]"> Add-to-Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDiscription