import React from "react";
import Link from "next/link";
import {
  House,
  LibraryBig,
  Toolbox,
  Truck,
  Handshake,
  Wrench,
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
  { name: "About", href: "/store/about", icon: Info },
  { name: "Admin", href: "/store/admin", icon: UserStar },
];

const NavLinks = () => {
  return (
    <div>
      {links.map((link) => {
        const IconComponent = link.icon;
        return (
          <div key={link.name}>
            <Link
              key={link.name}
              href={link.href}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-400"
            >
              <IconComponent className="w-6" />
              <p className="hidden md:block">{link.name}</p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavLinks;
