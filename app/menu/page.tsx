"use client";
import MenuLeft from '@/components/menu/MenuLeft'
import MenuRight from '@/components/menu/MenuRight'

const Page = () => {
  return (
    <div className="w-full h-full pt-[7vh] flex items-center justify-center">
      <div className="w-[85vw] h-[85vh] max-h-[55vw] flex justify-between">
        <MenuLeft />
        <MenuRight />
      </div>
    </div>
  )
}

export default Page