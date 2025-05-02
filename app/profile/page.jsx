"use client";

import Navbar from "@/components/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Edit } from "lucide-react";
import React from "react";

function ProfilePage() {
  const [activetab, setActiveTab] = React.useState("profile");
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const navItems = ["profile", "settings", "notifications"];
  const contents = () => {
    switch (activetab) {
      case "profile":
        return (
          <div>
            <ProfileContent />
          </div>
        );
      case "settings":
        return <div>Settings Content</div>;
      case "notifications":
        return <div>Notifications Content</div>;
      default:
        return <div>Profile Content</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="px-30 py-10">
        <h1 className="text-2xl font-bold">Account Profile</h1>
        <div className="mt-4 px-15 py-15 pl-10 shadow-md rounded-lg min-h-screen bg-white flex w-full">
          {/* horizontal line */}
          <div className="flex flex-col h-full p-4 border-r-2 border-gray-300 min-h-screen w-64 pl-0">
            {navItems.map((item) => (
              <button key={item} className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 ${activetab === item ? "bg-gray-200" : ""}`} onClick={() => handleTabClick(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Vertical Line  */}
          <div className="w-full">
            <div>{contents()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

export function ProfileContent() {
  return (
    <div className="flex flex-col h-full ml-10 w-full">
      <h1 className="text-xl font-semibold mt-4">My Profile</h1>
      <div className="flex mt-4 w-full h-50 border border-gray-200 rounded-lg p-4 shadow-md bg-white">
        <div className="flex items-center justify-center">
          <Avatar className="w-30 h-30 mx-4">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-lg font-medium">Username</p>
          <p className="text-sm text-gray-600">user@example.com</p>
        </div>
        <div className="flex justify-end items-center ml-auto">
          <button className=" flex p-2 w-24 text-gray-600 border border-gray-600 border-solid rounded-2xl hover:bg-gray-300 items-center justify-center cursor-pointer">
            Edit <Edit className="ml-[4px]" />
          </button>
        </div>
      </div>
      <div className="flex mt-4 w-full h-auto border border-gray-200 rounded-lg p-4 shadow-md bg-white">
        <div className="flex w-full flex-col">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-lg font-bold">Personal Information</h1>
            <button className="flex p-2 w-24 text-gray-600 border border-gray-600 border-solid rounded-2xl hover:bg-gray-300 items-center justify-center cursor-pointer">
              Edit <Edit className="ml-[4px]" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col mt-4 w-full">
              <div className="flex flex-col w-full mt-2">
                <p className="text-lg font-medium">First Name</p>
                <p className="text-md text-gray-600 mt-2">John</p>
              </div>
              <div className="flex flex-col w-full mt-6">
                <p className="text-lg font-medium">Email</p>
                <p className="text-md text-gray-600 mt-2">user@example.com</p>
              </div>
              <div className="flex flex-col w-full mt-6">
                <p className="text-lg font-medium">Role</p>
                <p className="text-md text-gray-600 mt-2">Tenant</p>
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full">
              <div className="flex flex-col w-full mt-2">
                <p className="text-lg font-medium">Last Name</p>
                <p className="text-md text-gray-600 mt-2">John</p>
              </div>
              <div className="flex flex-col w-full mt-6">
                <p className="text-lg font-medium">Phone Number</p>
                <p className="text-md text-gray-600 mt-2">user@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-4 w-full h-auto border border-gray-200 rounded-lg p-4 shadow-md bg-white">
        <div className="flex w-full flex-col">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-lg font-bold">Address Information</h1>
            <button className="flex p-2 w-24 text-gray-600 border border-gray-600 border-solid rounded-2xl hover:bg-gray-300 items-center justify-center cursor-pointer">
              Edit <Edit className="ml-[4px]" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="flex flex-col mt-4 w-full">
              <div className="flex flex-col w-full mt-2">
                <p className="text-lg font-medium">Country</p>
                <p className="text-md text-gray-600 mt-2">Philippines</p>
              </div>
              <div className="flex flex-col w-full mt-6">
                <p className="text-lg font-medium">Postal Code</p>
                <p className="text-md text-gray-600 mt-2">1400</p>
              </div>
            </div>
            <div className="flex flex-col mt-4 w-full">
              <div className="flex flex-col w-full mt-2">
                <p className="text-lg font-medium">City/State</p>
                <p className="text-md text-gray-600 mt-2">Caloocan</p>
              </div>
              <div className="flex flex-col w-full mt-6">
                <p className="text-lg font-medium">Street</p>
                <p className="text-md text-gray-600 mt-2">Vanguard St</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
