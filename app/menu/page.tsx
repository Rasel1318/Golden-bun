"use client";
import { createContext, useState } from 'react';
import MenuLeft from '@/components/menu/MenuLeft'
import MenuRight from '@/components/menu/MenuRight'

const BurgerMenuContext = createContext();

const page = () => {

  const [MenuData, setMenuData] = useState([
    {
      name: "Burger",
      svg: "/svg/burger-icon.png",
    },
    {
      name: "Sandwich",
      svg: "/svg/sandwich.png",
    },
    {
      name: "Sub-Burger",
      svg: "/svg/sub-burger.png",
    },
    {
      name: "Pizza",
      svg: "/svg/pizza.png",
    },
  ]);


  const [MenuItemData, setMenuItemData] = useState([
    [
      {
        name: "Old School/Cheese Burger",
        description: "Clissic beef, melted cheese, fresh toppings nostalgic flavor in a bun.",
        price: 5.99,
        img: "/media/classic_cheeses.webp",
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
    ]
  ]);

  return (
    <div className="w-full h-full pt-[7vh] flex items-center justify-center">
      <div className="w-[85vw] h-[85vh] flex justify-between">
        <BurgerMenuContext.Provider value={{MenuItemData, setMenuItemData, MenuData, setMenuData}}>
          <MenuLeft />
          <MenuRight />

        </BurgerMenuContext.Provider>
      </div>
    </div>
  )
}

export default page
export { BurgerMenuContext }