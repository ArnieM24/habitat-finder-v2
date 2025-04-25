import React from "react";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger } from "@/components/ui/menubar";
import { Button } from "../../components/ui/button";

function SearchInput() {
  return (
    <div className="flex justify-center items-center w-[1000px] h-20 bg-white rounded-md shadow-md absolute top-[340px] left-[50%] translate-x-[-50%] p-4">
      <div className="flex items-center relative w-full justify-around">
        <div className="flex justify-center items-center w-full">
          <Menubar className="w-full">
            <MenubarMenu>
              <MenubarTrigger className="w-full">Choose Location:</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Caloocan City</MenubarItem>
                <MenubarItem>Pasig City</MenubarItem>
                <MenubarItem>Quezon City</MenubarItem>
                <MenubarItem>Taguig City</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <div className="flex justify-center items-center w-full mx-6 ">
          <Menubar className="w-full">
            <MenubarMenu>
              <MenubarTrigger className="w-full">Choose Rental Term:</MenubarTrigger>
              <MenubarContent className="w-[200px]">
                <MenubarItem>Long Term Rentals</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Short Term Rentals</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>Daily Rentals</MenubarItem>
                <MenubarSeparator />
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
        <div>
          <Button className="cursor-pointer">Search</Button>
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
