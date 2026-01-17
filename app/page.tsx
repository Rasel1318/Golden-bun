"use client";
import HeroTop from "@/components/home/HeroTop";
import HeroBottom from "@/components/home/HeroBottom";
import { createContext, useState } from "react";

const burgerContext = createContext();

const Home = () => {
  const [curr_selection, setCurr_selection] = useState(0);
  const [curr_card, setCurr_card] = useState(0);
  const [imgSrc, setImgSrc] = useState("/media/classic_cheeses.webp");


  const [burgerInfoContext, setBurgerInfoContext] = useState([
    {
      name: "Old School/Cheese Burger",
      description: "Clissic beef, melted cheese, fresh toppings nostalgic flavor in a bun.",
      price: 5.99,
      img: "/media/classic_cheeses.png",
      rating: "★★★★★"
    },
    {
      name: "Double Beef/Bacon Burger",
      description: "Juicy beef patties stacked with crispy bacon in every savory bite.",
      price: 6.99,
      img: "/media/double_beef.webp",
      rating: "★★★★★"
    },
    {
      name: "Ghost Pepper/Burger",
      description: "Juicy beef patties stacked with crispy bacon in every savory bite.",
      price: 6.99,
      img: "/media/ghost_pepper_burger.png",
      rating: "★★★★★"
    },
    {
      name: "Mushroom/Melt Burger",
      description: "Juicy beef patties stacked with crispy bacon in every savory bite.",
      price: 6.99,
      img: "/media/mushroom_melt_burger.png",
      rating: "★★★★★"
    },
    {
      name: "Grilled/Beef Sub",
      description: "Juicy beef patties stacked with crispy bacon in every savory bite.",
      price: 6.99,
      img: "/media/grilled_beef_sub.png",
      rating: "★★★★★"
    },
    {
      name: "Chili Cheese/Hot Dog",
      description: "Juicy beef patties stacked with crispy bacon in every savory bite.",
      price: 6.99,
      img: "/media/chili_cheese_Hot_dog.png",
      rating: "★★★★★"
    },
  ]
  );


  return (
    <div className="w-full h-full pt-[7vh] relative flex items-center justify-center">
      <div className="w-[30vw] h-[30vw] z-[-1] rounded-full absolute top-[13%] left-[54%] bg-[#fc9312c4] blur-[150px]" ></div>
      <div className="w-[85vw] h-[85vh] ">
        <burgerContext.Provider value={{imgSrc, setImgSrc, curr_selection, setCurr_selection, curr_card, setCurr_card, burgerInfoContext }}>
          <HeroTop />
          <HeroBottom />
        </burgerContext.Provider>
      </div>
    </div>
  );
}

export default Home;
export { burgerContext };
