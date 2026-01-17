"use client";
import HeroTop from "@/components/home/HeroTop";
import HeroBottom from "@/components/home/HeroBottom";
import { createContext, useState } from "react";

const burgerContext = createContext();

const Home = () => {
  const [curr_selection, setCurr_selection] = useState(0);
  const [curr_card, setCurr_card] = useState(0);
  console.log(curr_selection, curr_card);
  const [burgerInfoContext, setBurgerInfoContext] = useState([
    {
      name: "Old School Cheese Burger",
      description: "Clissic beef, melted cheese, fresh toppings nostalgic flavor in a bun.",
      price: 5.99,
      img: "/media/classic_cheese.webp",
      rating: "★★★★★"
    },
    {
      name: "Double Beef Bacon Burger",
      description: "Juicy beef patties stacked with crispy bacon in every savory bite.",
      price: 6.99,
      img: "/media/double_beef.webp",
      rating: "★★★★★"
    },
    {
      name: "Double Beef Bacon Burger",
      description: "Juicy beef patties stacked with crispy bacon in every savory bite.",
      price: 6.99,
      img: "/media/double_beef.webp",
      rating: "★★★★★"
    },
    {
      name: "Double Beef Bacon Burger",
      description: "Juicy beef patties stacked with crispy bacon in every savory bite.",
      price: 6.99,
      img: "/media/double_beef.webp",
      rating: "★★★★★"
    },
    {
      name: "Double Beef Bacon Burger",
      description: "Juicy beef patties stacked with crispy bacon in every savory bite.",
      price: 6.99,
      img: "/media/double_beef.webp",
      rating: "★★★★★"
    },
    {
      name: "Double Beef Bacon Burger",
      description: "Juicy beef patties stacked with crispy bacon in every savory bite.",
      price: 6.99,
      img: "/media/double_beef.webp",
      rating: "★★★★★"
    },
    {
      name: "Double Beef Bacon Burger",
      description: "Juicy beef patties stacked with crispy bacon in every savory bite.",
      price: 6.99,
      img: "/media/double_beef.webp",
      rating: "★★★★★"
    },
  ]
  );


  return (
    <div className="w-full h-full pt-[7vh] relative flex items-center justify-center">
      <div className="w-[30vw] h-[30vw] z-[-1] rounded-full absolute top-[13%] left-[54%] bg-[#fc9312c4] blur-[150px]" ></div>
      <div className="w-[85vw] h-[85vh] ">
        <burgerContext.Provider value={{ curr_selection, setCurr_selection, curr_card, setCurr_card, burgerInfoContext }}>
          <HeroTop />
          <HeroBottom />
        </burgerContext.Provider>
      </div>
    </div>
  );
}

export default Home;
export { burgerContext };
