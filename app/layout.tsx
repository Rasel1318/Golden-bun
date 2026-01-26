"use client";
import Nav from "@/components/Nav";
import "./globals.css";
import { createContext, useState } from "react";
import TransitionProvider from "@/providers/TransitionProvider";

const burgerContext = createContext();

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  // Menu Data for Menu Page
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
        img: "/media/classic_cheeses.webp",
        rating: "★★★★★",

        img2: "/media/full_images/classic_cheeses2.webp",
        quantity: 0,
        status: false,
        menuInd: 0,
        fev: false,
      },
      {
        name: "Double Beef Bacon Burger",
        description: "Juicy beef patties stacked with crispy bacon in every savory bite.",
        price: 7.99,
        img: "/media/double_beef.webp",
        rating: "★★★★★",

        img2: "/media/full_images/double_beef2.png",
        quantity: 0,
        status: false,
        menuInd: 0,
        fev: false,
      },
      {
        name: "Ghost Pepper Burger",
        description: "Fiery beef patty with melted cheese and ghost pepper sauce for extreme heat lovers.",
        price: 5.99,
        img: "/media/ghost_pepper_burger.webp",
        rating: "★★★★★",

        img2: "/media/full_images/ghost_pepper_burger2.png",
        quantity: 0,
        status: false,
        menuInd: 0,
        fev: false,
      },
      {
        name: "Mushroom Melt Burger",
        description: "Smooth, savory mushroom burger finished with Swiss cheese and a soft sesame bun.",
        price: 6.99,
        img: "/media/mushroom_melt_burger.webp",
        rating: "★★★★★",

        img2: "/media/full_images/mushroom_melt_burger2.png",
        quantity: 0,
        status: false,
        menuInd: 0,
        fev: false,
      },
      {
        name: "Crispy Chicken Burger",
        description: "Smooth, savory mushroom burger finished with Swiss cheese and a soft sesame bun.",
        price: 4.99,
        img: "/media/crispy_chicken_burger.webp",
        rating: "★★★★★",

        img2: "/media/full_images/crispy_chicken_burger2.png",
        quantity: 0,
        status: false,
        menuInd: 0,
        fev: false,
      },
      {
        name: "Veggie Delight Burger",
        description: "Smooth, savory mushroom burger finished with Swiss cheese and a soft sesame bun.",
        price: 3.99,
        img: "/media/veggie_delight_burger.webp",
        rating: "★★★★★",

        img2: "/media/full_images/veggie_delight_burger2.png",
        quantity: 0,
        status: false,
        menuInd: 0,
        fev: false,
      },
    ],
    [
      {
        name: "Grilled Beef Sub",
        description: "Juicy grilled beef layered with cheese, crisp vegetables, and toasted sub roll.",
        price: 4.99,
        img: "/media/grilled_beef_sub.webp",
        rating: "★★★★★",

        img2: "/media/full_images/grilled_beef_sub2.png",
        quantity: 0,
        status: false,
        menuInd: 1,
        fev: false,
      }
    ],
    [],
    [
      {
        name: "Chili Cheese Hot Dog",
        description: "A bold chili cheese hot dog packed with flavor in every bite.",
        price: 3.99,
        img: "/media/chili_cheese_Hot_dog.webp",
        rating: "★★★★★",

        img2: "/media/full_images/chili_cheese_Hot_dog2.png",
        quantity: 0,
        status: false,
        menuInd: 3,
        fev: false,
      },
      {
        name: "All-American Crunch Dog",
        description: "A bold chili cheese hot dog packed with flavor in every bite.",
        price: 3.99,
        img: "/media/all_american_crunch_dog.webp",
        rating: "★★★★★",

        img2: "/media/full_images/all_american_crunch_dog2.png",
        quantity: 0,
        status: false,
        menuInd: 3,
        fev: false,
      },
      {
        name: "Bacon-Wrapped Hot Dog",
        description: "A bold chili cheese hot dog packed with flavor in every bite.",
        price: 3.99,
        img: "/media/bacon_wrapped_hot_dog.webp",
        rating: "★★★★★",

        img2: "/media/full_images/bacon_wrapped_hot_dog2.png",
        quantity: 0,
        status: false,
        menuInd: 3,
        fev: false,
      },
      {
        name: "Nacho Cheese Dog",
        description: "A bold chili cheese hot dog packed with flavor in every bite.",
        price: 3.99,
        img: "/media/nacho_cheese_dog.webp",
        rating: "★★★★★",

        img2: "/media/full_images/nacho_cheese_dog2.png",
        quantity: 0,
        status: false,
        menuInd: 3,
        fev: false,
      },
      {
        name: "Spicy Sriracha Dog",
        description: "A bold chili cheese hot dog packed with flavor in every bite.",
        price: 3.99,
        img: "/media/spicy_sriracha_dog.webp",
        rating: "★★★★★",

        img2: "/media/full_images/spicy_sriracha_dog2.png",
        quantity: 0,
        status: false,
        menuInd: 3,
        fev: false,
      },
      {
        name: "Classic American Hot Dog",
        description: "A bold chili cheese hot dog packed with flavor in every bite.",
        price: 3.99,
        img: "/media/classic_american_hot_dog.webp",
        rating: "★★★★★",

        img2: "/media/full_images/classic_american_hot_dog2.png",
        quantity: 0,
        status: false,
        menuInd: 3,
        fev: false,
      },
    ],
    [],
    [],
    [],
    [],
  ]);

  // Burger Info for Home Page  
  const [burgerInfoContext, setBurgerInfoContext] = useState([
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
      img: "/media/ghost_pepper_burger.webp",
      rating: "★★★★★"
    },
    {
      name: "Mushroom/Melt Burger",
      description: "Smooth, savory mushroom burger finished with Swiss cheese and a soft sesame bun.",
      price: 6.99,
      img: "/media/mushroom_melt_burger.webp",
      rating: "★★★★★"
    },
    {
      name: "Grilled/Beef Sub",
      description: "Juicy grilled beef layered with cheese, crisp vegetables, and toasted sub roll.",
      price: 4.99,
      img: "/media/grilled_beef_sub.webp",
      rating: "★★★★★"
    },
    {
      name: "Chili Cheese/Hot Dog",
      description: "A bold chili cheese hot dog packed with flavor in every bite.",
      price: 3.99,
      img: "/media/chili_cheese_Hot_dog.webp",
      rating: "★★★★★"
    },
  ]);

  const [indexTracing, setIndexTracing] = useState([    // This is for home page HeroBottom component card location tracing.
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 0],
    [3, 0],
  ])

  // CheckOut Data for checkOut Page
  const [checkoutData, setCheckoutData] = useState([]);

  // Favorite Data for favorite Page
  const [favoriteData, setFavoriteData] = useState([]);

  // Menu Page Context States
  const [menuOverlyBool, setMenuOverlyBool] = useState(false);
  const [menuActive, setMenuActive] = useState(0);
  const [itemActive, setItemActive] = useState(0);
  const [preActiveSelection, setPreActiveSelection] = useState(-1);

  // Home to Menu Linking states for selecting item directly
  const [callFromHome, setCallFromHome] = useState(false);

  // Nav to Menu Linking states for selecting item directly
  const [navToMenu, setNavToMenu] = useState(false);

  // Home Page Context States
  const [curr_selection, setCurr_selection] = useState(0);
  const [curr_card, setCurr_card] = useState(0);
  const [imgSrc, setImgSrc] = useState(burgerInfoContext[0].img);

  return (
    <html lang="en">
      <body className="w-screen h-screen bg-[#FFF8EE]">
        <TransitionProvider>
          <burgerContext.Provider value={{ navToMenu, setNavToMenu, favoriteData, setFavoriteData, checkoutData, setCheckoutData, indexTracing, callFromHome, setCallFromHome, itemActive, setItemActive, menuActive, setMenuActive, menuOverlyBool, setMenuOverlyBool, preActiveSelection, setPreActiveSelection, MenuItemData, setMenuItemData, MenuData, imgSrc, setImgSrc, curr_selection, setCurr_selection, curr_card, setCurr_card, burgerInfoContext }}>
            <Nav />
            {children}
          </burgerContext.Provider>
        </TransitionProvider>
      </body>
    </html>
  );
}


export { burgerContext };