"use client";
import { act, createContext, useState } from 'react';
import MenuLeft from '@/components/menu/MenuLeft'
import MenuRight from '@/components/menu/MenuRight'

const BurgerMenuContext = createContext();

const page = () => {
  const [menuActive, setMenuActive] = useState(0);
  const [itemActive, setItemActive] = useState(0);
  const [preActiveSelection, setPreActiveSelection] = useState(-1);

  const [MenuData, setMenuData] = useState([
    {
      name: "Burger",
      svg: "/svg/burger-icon.png",
    },
    {
      name: "Sub-Burger",
      svg: "/svg/sub-burger.png",
    },
    {
      name: "Pizza",
      svg: "/svg/pizza.png",
    },
    {
      name: "Hot-Dog",
      svg: "/svg/hotdog.png",
    },
    {
      name: "French Fries",
      svg: "/svg/french-fries.png",
    },
    {
      name: "Cold-Drinks",
      svg: "/svg/softdrink.png",
    },
    {
      name: "Hot-Coffee",
      svg: "/svg/coffee.png",
    },
    {
      name: "Ice-Tea",
      svg: "/svg/tea.png",
    },
  ]);

  const [MenuItemData, setMenuItemData] = useState([
    [
      {
        name: "Old School Cheese Burger",
        description: "Clissic beef, melted cheese, fresh toppings nostalgic flavor in a bun.",
        price: 5.99,
        img: "/media/classic_cheeses.png",
        rating: "★★★★★",

        img2: "/full_images/media/classic_cheeses2.png",
        quantity: 0,
        status: false,
      },
      {
        name: "Double Beef Bacon Burger",
        description: "Juicy beef patties stacked with crispy bacon in every savory bite.",
        price: 7.99,
        img: "/media/double_beef.webp",
        rating: "★★★★★",

        img2: "/full_images/media/classic_cheeses2.png",
        quantity: 0,
        status: false,
      },
      {
        name: "Ghost Pepper Burger",
        description: "Fiery beef patty with melted cheese and ghost pepper sauce for extreme heat lovers.",
        price: 5.99,
        img: "/media/ghost_pepper_burger.png",
        rating: "★★★★★",

        ima2: "/full_images/media/classic_cheeses2.png",
        quantity: 0,
        status: false,
      },
      {
        name: "Mushroom Melt Burger",
        description: "Smooth, savory mushroom burger finished with Swiss cheese and a soft sesame bun.",
        price: 6.99,
        img: "/media/mushroom_melt_burger.png",
        rating: "★★★★★",

        ima2: "/full_images/media/classic_cheeses2.png",
        quantity: 0,
        status: false,
      },
      {
        name: "Crispy Chicken Burger",
        description: "Smooth, savory mushroom burger finished with Swiss cheese and a soft sesame bun.",
        price: 4.99,
        img: "/media/crispy_chicken_burger.png",
        rating: "★★★★★",

        ima2: "/full_images/media/classic_cheeses2.png",
        quantity: 0,
        status: false,
      },
      {
        name: "Veggie Delight Burger",
        description: "Smooth, savory mushroom burger finished with Swiss cheese and a soft sesame bun.",
        price: 3.99,
        img: "/media/veggie_delight_burger.png",
        rating: "★★★★★",

        ima2: "/full_images/media/classic_cheeses2.png",
        quantity: 0,
        status: false,
      },
    ],
    [
      {
        name: "Grilled Beef Sub",
        description: "Juicy grilled beef layered with cheese, crisp vegetables, and toasted sub roll.",
        price: 4.99,
        img: "/media/grilled_beef_sub.png",
        rating: "★★★★★",

        ima2: "/full_images/media/classic_cheeses2.png",
        quantity: 0,
        status: false,
      }
    ],
    [],
    [
      {
        name: "Chili Cheese Hot Dog",
        description: "A bold chili cheese hot dog packed with flavor in every bite.",
        price: 3.99,
        img: "/media/chili_cheese_Hot_dog.png",
        rating: "★★★★★",

        ima2: "/full_images/media/classic_cheeses2.png",
        quantity: 0,
        status: false,
      },
      {
        name: "All-American Crunch Dog",
        description: "A bold chili cheese hot dog packed with flavor in every bite.",
        price: 3.99,
        img: "/media/all_american_crunch_dog.png",
        rating: "★★★★★",

        ima2: "/full_images/media/classic_cheeses2.png",
        quantity: 0,
        status: false,
      },
      {
        name: "Bacon-Wrapped Hot Dog",
        description: "A bold chili cheese hot dog packed with flavor in every bite.",
        price: 3.99,
        img: "/media/bacon_wrapped_hot_dog.png",
        rating: "★★★★★",

        ima2: "/full_images/media/classic_cheeses2.png",
        quantity: 0,
        status: false,
      },
      {
        name: "Nacho Cheese Dog",
        description: "A bold chili cheese hot dog packed with flavor in every bite.",
        price: 3.99,
        img: "/media/nacho_cheese_dog.png",
        rating: "★★★★★",

        ima2: "/full_images/media/classic_cheeses2.png",
        quantity: 0,
        status: false,
      },
      {
        name: "Spicy Sriracha Dog",
        description: "A bold chili cheese hot dog packed with flavor in every bite.",
        price: 3.99,
        img: "/media/spicy_sriracha_dog.png",
        rating: "★★★★★",

        ima2: "/full_images/media/classic_cheeses2.png",
        quantity: 0,
        status: false,
      },
      {
        name: "Classic American Hot Dog",
        description: "A bold chili cheese hot dog packed with flavor in every bite.",
        price: 3.99,
        img: "/media/classic_american_hot_dog.png",
        rating: "★★★★★",

        ima2: "/full_images/media/classic_cheeses2.png",
        quantity: 0,
        status: false,
      },
    ],
    [],
    [],
    [],
    [],
  ]);

  return (
    <div className="w-full h-full pt-[7vh] flex items-center justify-center">
      <div className="w-[85vw] h-[85vh] max-h-[55vw] flex justify-between">
        <BurgerMenuContext.Provider value={{ itemActive, setItemActive, menuActive, setMenuActive, preActiveSelection, setPreActiveSelection, MenuItemData, MenuData }}>
          <MenuLeft />
          <MenuRight />
        </BurgerMenuContext.Provider>
      </div>
    </div>
  )
}

export default page
export { BurgerMenuContext }