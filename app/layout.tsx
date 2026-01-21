"use client";
import Nav from "@/components/Nav";
import "./globals.css";
import { createContext, useState } from "react";
import TransitionProvider from "@/providers/TransitionProvider";


const burgerContext = createContext();

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
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
      price: 7.99,
      img: "/media/double_beef.webp",
      rating: "★★★★★"
    },
    {
      name: "Ghost Pepper/Burger",
      description: "Fiery beef patty with melted cheese and ghost pepper sauce for extreme heat lovers.",
      price: 5.99,
      img: "/media/ghost_pepper_burger.png",
      rating: "★★★★★"
    },
    {
      name: "Mushroom/Melt Burger",
      description: "Smooth, savory mushroom burger finished with Swiss cheese and a soft sesame bun.",
      price: 6.99,
      img: "/media/mushroom_melt_burger.png",
      rating: "★★★★★"
    },
    {
      name: "Grilled/Beef Sub",
      description: "Juicy grilled beef layered with cheese, crisp vegetables, and toasted sub roll.",
      price: 4.99,
      img: "/media/grilled_beef_sub.png",
      rating: "★★★★★"
    },
    {
      name: "Chili Cheese/Hot Dog",
      description: "A bold chili cheese hot dog packed with flavor in every bite.",
      price: 3.99,
      img: "/media/chili_cheese_Hot_dog.png",
      rating: "★★★★★"
    },
  ]);

  return (
    <html lang="en">
      <body className="w-screen h-screen bg-[#FFF8EE]">
        <TransitionProvider>
          <Nav />
          <burgerContext.Provider value={{ imgSrc, setImgSrc, curr_selection, setCurr_selection, curr_card, setCurr_card, burgerInfoContext }}>
            {children}
          </burgerContext.Provider>
        </TransitionProvider>
      </body>
    </html>
  );
}


export { burgerContext };