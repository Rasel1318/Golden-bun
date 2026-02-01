"use client";
import Image from "next/image";

const Page = () => {
  return (
    <div className="w-full h-full font-[font1] pt-[7vh] flex items-center justify-center">
      <div className="w-[85vw] h-[85vh] bg-[#fcfcfa] rounded-[1vw] shadow-[2px_0_9px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="w-full h-full ">
          <div className="relative w-full h-[70%] ">
            <Image src="/media/contact_bg.png" className='w-full h-full object-cover' alt="Burger Imgae" loading="eager" width={1536} height={1024} />
            <div className="absolute bg-[#FC9412] h-[1.5vw] top-[2vw] left-[10vw] px-[0.6vw] rounded-[0.3vw] flex items-center justify-center">
              <p className=" text-[#fcfcfa] font-semibold text-[1vw] ">Look at google maps</p>
              <div className="bg-[#fcfcfa] w-[1.7vw] h-[0.157vw] ml-[0.4vw] rounded-[1vw]"></div>
            </div>
            <div className="absolute font-[fontBold] bottom-[2vw] left-[10vw]">
              <h3 className="text-[4vw] text-[#1D1E20]">Contact Us</h3>
            </div>
          </div>
          <div className="bg-[#FC9412] w-full h-[30%] rounded-t-[1vw] p-[1vw] pt-[1.5vw]">
            <div className="w-full h-full flex ">
              <div className="w-[50%] h-full flex items-center justify-evenly">
                <div className="font-semibold text-[#fcfcfa] flex flex-col justify-start h-full">
                  <p className="uppercase mb-[2vw] text-[.8vw]">our adres</p>
                  <div className="text-[1.2vw]">
                    <p className="">12658 Moscow</p>
                    <p className="">Lane Dyuzheva</p>
                    <p className="">Building 47 Ground Floar</p>
                  </div>
                </div>
                <div className="font-semibold text-[#fcfcfa] flex flex-col justify-start h-full">
                  <p className="uppercase mb-[2vw] text-[.8vw]">our contacts</p>
                  <div className="text-[1.2vw]">
                    <p className="">Golden.bun@gmail.com</p>
                    <p className="">+7 900 800 70 60</p>
                  </div>
                </div>
              </div>

              <div className="w-[50%] h-full flex items-center justify-evenly">
                <div className="flex items-end h-full gap-[1vw]">
                  <svg className="w-[1.6vw] cursor-pointer h-[1.6vw] p-[0.2vw] bg-[#fcfcfa] rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(80,82,84,1)"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path></svg>
                  <svg className="w-[1.6vw] cursor-pointer h-[1.6vw] p-[0.2vw] bg-[#fcfcfa] rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(80,82,84,1)"><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg>
                  <svg className="w-[1.6vw] cursor-pointer h-[1.6vw] p-[0.2vw] bg-[#fcfcfa] rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(80,82,84,1)"><path d="M22.2125 5.65605C21.4491 5.99375 20.6395 6.21555 19.8106 6.31411C20.6839 5.79132 21.3374 4.9689 21.6493 4.00005C20.8287 4.48761 19.9305 4.83077 18.9938 5.01461C18.2031 4.17106 17.098 3.69303 15.9418 3.69434C13.6326 3.69434 11.7597 5.56661 11.7597 7.87683C11.7597 8.20458 11.7973 8.52242 11.8676 8.82909C8.39047 8.65404 5.31007 6.99005 3.24678 4.45941C2.87529 5.09767 2.68005 5.82318 2.68104 6.56167C2.68104 8.01259 3.4196 9.29324 4.54149 10.043C3.87737 10.022 3.22788 9.84264 2.64718 9.51973C2.64654 9.5373 2.64654 9.55487 2.64654 9.57148C2.64654 11.5984 4.08819 13.2892 6.00199 13.6731C5.6428 13.7703 5.27232 13.8194 4.90022 13.8191C4.62997 13.8191 4.36771 13.7942 4.11279 13.7453C4.64531 15.4065 6.18886 16.6159 8.0196 16.6491C6.53813 17.8118 4.70869 18.4426 2.82543 18.4399C2.49212 18.4402 2.15909 18.4205 1.82812 18.3811C3.74004 19.6102 5.96552 20.2625 8.23842 20.2601C15.9316 20.2601 20.138 13.8875 20.138 8.36111C20.138 8.1803 20.1336 7.99886 20.1256 7.81997C20.9443 7.22845 21.651 6.49567 22.2125 5.65605Z"></path></svg>
                  <svg className="w-[1.6vw] cursor-pointer h-[1.6vw] p-[0.2vw] bg-[#fcfcfa] rounded-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(80,82,84,1)"><path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path></svg>
                </div>
                <div className="flex items-end h-full gap-[1vw] ">
                  <p className="text-[1.1vw] font-semibold text-[#fcfcfa] ">- Follow Us</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className=" font-[font1] font-semibold absolute w-[25vw] h-[67%] top-[4.2vw] right-[15vw] p-[1.5vw] bg-[#EFE5D8] rounded-[1vw] ">
        <p className="text-[0.6vw] tracking-[0.15vw] text-[#505254] font-semibold">FEEDBACK FORM</p>

        <form className="mt-[3vw] space-y-[2vw]">
          <div className="space-y-2">
            <label className="text-[0.7vw] text-[#505254]" htmlFor="name">Name</label>
            <input id="name" type="text" className="w-full border-0 border-b border-neutral-300 focus:border-[#505254] focus:ring-0 outline-none pb-2 text-[#505254]" placeholder="" />
          </div>

          <div className="space-y-[0.5vw]">
            <label className="text-[0.7vw] text-[#505254]" htmlFor="email">E-mail</label>
            <input id="email" type="email" className="w-full border-0 border-b border-neutral-300 focus:border-[#505254] focus:ring-0 outline-none pb-2 text-[#505254]" placeholder="" />
          </div>

          <div className="space-y-[0.5vw]">
            <label className="text-[0.7vw] text-[#505254]" htmlFor="phone">Phone</label>
            <input id="phone" type="tel" className="w-full border-0 border-b border-neutral-300 focus:border-[#505254] focus:ring-0 outline-none pb-2 text-[#505254]" placeholder=""/>
          </div>

          <div className="space-y-[0.5vw]">
            <label className="text-[0.7vw] text-[#505254]" htmlFor="message">Message</label>
            <textarea id="message" rows="2" className="w-full resize-none border-0 border-b border-neutral-300 focus:border-[#505254] focus:ring-0 outline-none pb-2 text-[#505254]"
            ></textarea>
          </div>

          <div className="pt-2 flex items-center justify-between gap-[0.5vw]">
            <label className="inline-flex items-start gap-2 text-[0.8vw] text-[#505254] cursor-pointer select-none">
              <input type="file" className="hidden" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"stroke="currentColor" strokeWidth="2" className="h-[1.2vw] w-[1.2vw]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 18.75H6A4.5 4.5 0 0 1 6 9.75h.245A5.25 5.25 0 0 1 16.5 8.25a3.75 3.75 0 0 1 1.21 7.3"/>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12v8m0 0-3-3m3 3 3-3" />
              </svg>
              <span>Upload file</span>
            </label>

            <button type="submit"className="bg-[#FC9412] text-[#fcfcfa] text-[0.7vw] tracking-[0.24em] px-6 py-3 shadow-[0_10px_18px_rgba(0,0,0,0.28)] hover:bg-neutral-800 active:translate-y-[1px] transition">SEND MESSAGE —</button>
          </div>
        </form>
      </div>
    </div >
  )
}

export default Page