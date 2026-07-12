import React from 'react';
import Link from "next/link";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const SideBar = () => {
  return (
    <div> 
      <Link href="/store" className="bg-gray-600 flex h-20 items-end justify-start rounded-md p-4">
           <div className="w-32 md:w-40">
             <Logo />
           </div>
        </Link>
        <div className="flex flex-wrap gap-2 justify-center md:grow flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <form>
            <button className="flex h-[48px] items-center justify-center gap-2 bg-purple-300 text-white rounded-lg hover:bg-purple-700">
                Sign Out</button>
        </form> 
        </div>
    

    </div>
  )
}

export default SideBar