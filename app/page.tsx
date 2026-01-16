"use client";
import HeroTop from "@/components/home/HeroTop";
import HeroBottom from "@/components/home/HeroBottom";
import { createContext, useState } from "react";


const burgerContext = createContext();

const Home = () => {
  const [burgerInfo, setBurgerInfo] = useState({
    name: "Old school cheese burger",
    description: "Clissic beef, melted cheese, fresh toppings nostalgic flavor in a bun",
    price: 5.99,
    img: "/media/classic_cheese.png"
  });


  return (
    <div className="w-full h-full pt-[7vh] relative flex items-center justify-center">
      <div className="w-[30vw] h-[30vw] z-[-1] rounded-full absolute top-[13%] left-[54%] bg-[#fc9312c4] blur-[150px]" ></div>
      <div className="w-[85vw] h-[85vh] ">
        <burgerContext.Provider value={burgerInfo}>
          <HeroTop />
          <HeroBottom />
        </burgerContext.Provider>
      </div>
    </div>
  );
}

export default Home;
export {burgerContext};
