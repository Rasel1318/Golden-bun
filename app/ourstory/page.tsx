"use client";
import Image from "next/image";

const page = () => {
  return (
    <div className="w-full h-full font-[font1] pt-[7vh] flex items-center justify-center">
      <div className="w-[85vw] h-[85vh] bg-[#fcfcfa] rounded-[1vw] shadow-[2px_0_9px_rgba(0,0,0,0.1)]">

        <div className='flex w-full h-full justify-center items-center p-[2vw]'>
          <div className='w-[45%] h-full pr-[4vw]'>
            <div className="w-full flex flex-col gap-[2vw] items-center">
              <div className="w-full h-full flex flex-col gap-[1vw] items-center">
                <Image src="/media/story.png" className='w-[70%] ' alt="Burger Imgae" loading="eager" width={585} height={530} />
                <div><div className="w-[2vw] h-[0.15vw] rounded bg-[#505254]" /></div>
                <p className="text-center text-[1vw] font-semibold text-[#FC9412]">It began with a single yellow food truck on a crowded street, a small team, and a powerful belief that passion, consistency, and honest food could turn a humble beginning into something far greater.</p>
              </div>
              <div><div className="w-[2vw] h-[0.2vw] rounded bg-[#505254]" /></div>
              <p className="text-[#505254] font-semibold text-[1vw]">Days blended into nights as burgers were flipped, lessons were learned, and strangers slowly became regulars, drawn not just by flavor, but by the warmth, care, and pride behind every order.</p>
              <p className="text-[#505254] font-semibold text-[1vw]">What started as a modest setup gained momentum, shaping an identity built on trust and quality, quietly laying the groundwork for growth, ambition, and a future that stretched far beyond the street.</p>
            </div>
          </div>
          <div className="w-1 relative">
            <div className=" absolute w-[3vw] h-[3vw] left-1 bg-[#fcfcfa]"></div>
            <div className=" absolute w-[3vw] h-[3vw] right-0 top-[-3vw] bg-[#FC9412]"></div>
          </div>
          <div className='w-[45%] h-full '>
            <Image src="/media/story_1st_image.jpeg" className='w-full z-1 object-cover h-full rounded-[1vw]' alt="Burger Imgae" loading="eager" width={585} height={530} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default page