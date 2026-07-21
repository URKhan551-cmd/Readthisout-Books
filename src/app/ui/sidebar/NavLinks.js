'use client'

import {useContext} from "react";
import {StoreContext} from "@/app/context"

import React from "react";
import Link from "next/link";
import {
  House,
  LibraryBig,

  Toolbox,
  Truck,
  Handshake,
  Wrench,
  ShoppingBasket,
  Info,
  UserStar,
} from "lucide-react";

const links = [
  { name: "Home", href: "/", icon: House },
  { name: "Books", href: "/store", icon: LibraryBig },
  { name: "Sell or Lend", href: "/store/sell-lend", icon: Toolbox },
  { name: "Track Order", href: "/store/track", icon: Truck },
  { name: "Community", href: "/store/communities", icon: Handshake },
  { name: "Settings", href: "/store/settings", icon: Wrench },
  { name: "Cart", href: "/store/cart", icon: ShoppingBasket },
  { name: "About", href: "/store/about", icon: Info },
  { name: "Admin", href: "/store/admin", icon: UserStar },
];

const NavLinks = () => {
  const {cartData} = useContext(StoreContext);

  return (
    <div>
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <div key={link.name}>
            <Link
              key={link.name}
              href={link.href}
              className="flex h-[48px] grow items-start justify-start gap-2 rounded-md text-fuchsia-500"
            >
              <IconComponent className="w-6 text-fuchsia-700 hover:w-8" />
              {(link.name === "Cart" && cartData && cartData.length > 0) ? `${link.name} (${cartData.length})` : 
              <p className="hidden md:block text-fuchsia-500">{link.name}</p> }
              <span className="text-white justify-end bg-white hidden hover:block">arrow</span>
            </Link>
            
          </div>
        );
      })}
    </div>
  );
};

export default NavLinks;
