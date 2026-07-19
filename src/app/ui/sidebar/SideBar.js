import React from 'react';
import Link from "next/link";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const SideBar = () => {
  return (
    <div className="sticky lg:min-h-screen bg-black border border-dashed"> 
      <Link href="/store" className="flex h-20 items-start justify-start rounded-md p-4">
           <div className="w-40 md:w-50">
             <Logo />
           </div>
        </Link>
        <div className="flex flex-wrap rounded-sm bg-black ml-3 gap-2 md:grow justify-start md:justify-between space-x-2 md:flex-row md:space-x-0 md:space-y-2">
        <NavLinks />
        <form className="grid w-[120px]">
            <button className="h-[40px] p-2 items-center font-bold justify-center gap-2 text-fuchsia-700 rounded-xl border border-dashed  hover:text-white">
                Sign Out</button>
        </form> 
        </div>
    

    </div>
  )
}

export default SideBar