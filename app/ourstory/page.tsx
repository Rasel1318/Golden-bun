"use client";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";


gsap.registerPlugin(SplitText)
const Page = () => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const [active, setActive] = useState(0);
  const p1 = ["It began with a single yellow food truck on a crowded street, a small team, and a powerful belief that passion, consistency, and honest food could turn a humble beginning into something far greater.", "The wheels stopped turning, replaced by solid walls and a real doorway, as the dream took shape in a small shop where the first sign went up and the vision finally had a permanent home.",]
  const p2 = ["Days blended into nights as burgers were flipped, lessons were learned, and strangers slowly became regulars, drawn not just by flavor, but by the warmth, care, and pride behind every order.", "Inside the shop, the kitchen grew louder, the menu sharper, and the crowd steadier, as familiar flavors now lived under a roof, welcoming passersby with confidence earned from the streets.",]
  const p3 = ["What started as a modest setup gained momentum, shaping an identity built on trust and quality, quietly laying the groundwork for growth, ambition, and a future that stretched far beyond the street.", "This space became more than a store, it became a meeting point, where reputation spread faster than footsteps, proving the brand was no longer an experiment, but a growing name with direction.",]
  const imgPath = ["/media/story_1st_image.jpeg", "/media/story_2nd_image.png"]

  const plusActive = () => {
    setActive((prev) => (Math.min((prev + 1), imgPath.length - 1)));
  }
  const minusActive = () => {
    setActive((prev) => (Math.max((prev - 1), 0)));
  }
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const splits = [];
      const tl = gsap.timeline();

      gsap.utils.toArray(".spl").forEach((el) => {
        const split = SplitText.create(el, { type: "words,chars" });
        splits.push(split);

        tl.from(split.words, {
          duration: 0.3,
          y: 30,
          autoAlpha: 0,
          stagger: { amount: 0.3, from: "random" },
        }, 0);
      });

      return () => {
        tl.kill();
        splits.forEach((s) => s.revert());
      };
    });

    return () => ctx.revert();
  }, [active]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imgRef.current, {
        y: 30,
        duration: 0.3,
        autoAlpha: 0,
      })
    })
    return () => ctx.revert();
  }, [active])
  console.log(active);
  return (
    <div className="w-full h-full font-[font1] pt-[7vh] flex items-center justify-center">
      <div className="w-[85vw] h-[85vh] bg-[#fcfcfa] rounded-[1vw] shadow-[2px_0_9px_rgba(0,0,0,0.1)]">
        <div className='flex w-full h-full justify-center items-center p-[2vw]'>
          <div className=' w-[45%] h-full pr-[4vw] '>
            <div ref={containerRef} className="w-full h-full flex flex-col gap-[1.2vw] justify-evenly items-center">
              <div className="w-full flex flex-col gap-[1vw] items-center">
                <Image src="/media/story.png" className='w-[70%] ' alt="Burger Imgae" loading="eager" width={585} height={530} />
                <div><div className="w-[2vw] h-[0.15vw] rounded bg-[#505254]" /></div>
                <p key={p1[active]} className="spl text-center text-[1vw] font-semibold text-[#FC9412]">{p1[active]}</p>
              </div>
              <div><div className="w-[2vw] h-[0.2vw] rounded bg-[#505254]" /></div>
              <p key={p2[active]} className="spl text-[#505254] font-semibold text-[1vw]">{p2[active]}</p>
              <p key={p3[active]} className="spl  text-[#505254] font-semibold text-[1vw]">{p3[active]}</p>
            </div>
          </div>
          <div className=" relative h-full flex items-center">
            <div className="relative ">
              <div onClick={() => minusActive()} className={`absolute x-5 w-[3vw] h-[3vw] top-[-3vw] ${(active === 0) ? 'opacity-70' : 'opacity-100 active:scale-95'} right-0 bg-[#FC9412]`}>
                <svg className="p-[0.4vw] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(252,252,250,1)"><path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path></svg>
              </div>
              <div className="absolute font-semibold text-[#505254] x-5 w-[3vw] h-[3vw] text-[1.5vw] flex justify-center items-center right-0 ">
                <p>{active + 1} / {imgPath.length}</p>
              </div>
              <div onClick={() => plusActive()} className={` absolute z-6 w-[3vw] h-[3vw] ${(active === imgPath.length - 1) ? 'opacity-70' : 'opacity-100 active:scale-95'} left-0 bg-[#fcfcfa]`}>
                <svg className="p-[0.4vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(80,82,84,1)"><path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path></svg>
              </div>
            </div>
            <div className="absolute z-3 w-[15vw] h-[8vw] bottom-[-3vw] left-[-8.5vw]">
              <Image src="/media/story_flower.png" className='w-full h-full object-cover drop-shadow-[0_20px_7px_rgba(0,0,0,0.2)]' alt="Burger Imgae" loading="eager" width={585} height={530} />
            </div>
          </div>
          <div className='w-[45%] h-full z-5'>
            <Image ref={imgRef} src={imgPath[active]} className='w-full  object-cover h-full rounded-[1vw] drop-shadow-[0px_20px_10px_rgba(0,0,0,0.2)]' alt="Burger Imgae" loading="eager" width={585} height={530} />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Page