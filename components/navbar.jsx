import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import Logo from "../assets/LogoLogoHabitat.jpg";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

function Navbar() {
  return (
    <div className="parent-container flex items-center justify-around mx-auto w-full px-4 py-2 border border-b-2">
      {/* Parent container */}
      <div className="flex justify-around">
        <div className="flex justify-center items-center mr-3">
          <Link href="/">
            <Image
              src={Logo}
              width={70}
              height={70}
              alt="Habitat Finder Logo"
            />
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <Input type="search" placeholder="search for a place" />
        </div>
      </div>
      <div className="flex">
        <ul className="flex ">
          <Link href="favorites" className="m-2">
            Support
          </Link>
          <Link href="/login" className="m-2">
            Login
          </Link>

          <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                  Menu
                </NavigationMenuTrigger>
                <NavigationMenuContent className="w-56">
                  <ul className="p-4">
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuIndicator />
          </NavigationMenu>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
