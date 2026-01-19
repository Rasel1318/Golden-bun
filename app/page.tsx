"use client";
import HeroTop from "@/components/home/HeroTop";
import HeroBottom from "@/components/home/HeroBottom";

const Home = () => {
  return (
    <div className="w-full h-full pt-[7vh] relative flex items-center justify-center">
      <div className="w-[30vw] h-[30vw] z-[-1] rounded-full absolute top-[13%] left-[54%] bg-[#fc9312c4] blur-[150px]" ></div>
      <div className="w-[85vw] h-[85vh] ">
          <HeroTop />
          <HeroBottom />
      </div>
    </div>
  );
}

export default Home;
