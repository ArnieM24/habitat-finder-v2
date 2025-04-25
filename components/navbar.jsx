import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import Logo from "@/public/assets/LogoLogoHabitat.jpg";
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
import { Button } from "./ui/button";
import { Search } from "lucide-react";

function Navbar() {
  return (
    <div className="parent-container flex items-center justify-around mx-auto w-full px-4 py-2 border border-b-2">
      {/* Parent container */}
      <div className="flex justify-around">
        <div className="flex justify-center items-center mr-3">
          <Link href="/">
            <Image src={Logo} width={70} height={70} alt="Habitat Finder Logo" />
          </Link>
        </div>
        <div className="flex justify-center items-center relative">
          {" "}
          {/* Added relative positioning */}
          <Input type="search" placeholder="search for a place" className="border-2 focus:ring-0" />
          <Search className="absolute right-2 top-[2]" size={18} />
          {/* Adjusted position */}
        </div>
      </div>
      <div className="flex">
        <ul className="flex justify-center items-center">
          <Link href="favorites" className="m-2">
            Support
          </Link>
          <Link href="/signup" className="m-2">
            Sign up
          </Link>
          <Link href="/login" className="m-2">
            <Button variant="default" size="sm" className="cursor-pointer">
              Login
            </Button>
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>Menu</NavigationMenuTrigger>
                <NavigationMenuContent className="w-56">
                  <ul className="p-2 w-full">
                    <Link href={"/about"}>
                      <li className="text-primary underline-offset-4 hover:underline">About</li>
                    </Link>
                    <Link href={"/FAQs"}>
                      <li className="text-primary underline-offset-4 hover:underline">FAQs</li>
                    </Link>
                    <Link href={"/terms-and-conditions"}>
                      <li className="text-primary underline-offset-4 hover:underline">T&C</li>
                    </Link>
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
