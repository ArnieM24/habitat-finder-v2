"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { Input } from "./ui/input";
import Image from "next/image";
import Logo from "@/public/assets/LogoHabitat.png";
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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { createClient } from "@/utils/supabase/client";
import { signOut } from "@/app/(auth)/login/action";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

function Navbar() {
  const [user, setUser] = React.useState(null); // State to manage user authentication
  const supabase = createClient();

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user);
    }
    getUser();
  }, []);

  const pathname = usePathname();

  return (
    <div className="parent-container flex items-center justify-around mx-auto w-full px-4 py-2 border border-b-2 bg-white shadow-md">
      {/* Parent container */}
      <div className="flex justify-around">
        <div className="flex justify-center items-center mr-3">
          {user ? (
            <Link href="/homepage" className="cursor-pointer">
              <Image src={Logo} width={70} height={70} alt="Habitat Finder Logo" />
            </Link>
          ) : (
            <Link href="/" className="cursor-pointer">
              <Image src={Logo} width={70} height={70} alt="Habitat Finder Logo" />
            </Link>
          )}
        </div>
        <div className="flex justify-center items-center relative">
          {/* Added relative positioning */}
          {pathname === "/profile" ? (
            ""
          ) : (
            <>
              <Input type="search" placeholder="search for a place" className="border-2 focus:ring-0" /> <Search className="absolute right-2 top-[2]" size={18} />
            </>
          )}

          {/* Adjusted position */}
        </div>
      </div>
      <div className="flex">
        <ul className="flex justify-center items-center">
          {user ? (
            <>
              {pathname === "/profile" ? (
                ""
              ) : (
                <Link href="/profile" className="m-2">
                  Profile
                </Link>
              )}

              <form className="mr-2">
                <Button formAction={signOut} variant="default" size="sm" className="cursor-pointer">
                  Logout
                </Button>
              </form>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <TooltipContent>
                      <p>{user.email}</p>
                    </TooltipContent>
                  </TooltipTrigger>
                </Tooltip>
              </TooltipProvider>
            </>
          ) : (
            <>
              <Link href="favorites" className="m-2">
                Support
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
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
