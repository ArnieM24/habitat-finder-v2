"use client";

import Image from "next/image";
import Navbar from "../components/navbar";
import LandingPageImg from "@/public/assets/first-landing-page.png";
import SearchInput from "./components/search-input";

import HomepageCard from "./components/homepage-card";
import Footer from "@/components/footer";
import AccordionLandingPage from "./components/accordion";
import TandC from "./components/tandc";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="flex flex-col justify-center items-center relative">
          <div className="w-full h-[380px] relative">
            <h1 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold z-10 bottom-20 text-shadow-lg/20">Find it. Rent it. Love it.</h1>
            <p className="absolute inset-0 flex items-center justify-center text-white text-md font-bold z-10 text-shadow-lg/20">Map your way home with Habitat Finder</p>
            <Image src={LandingPageImg} alt="landing page img" className="object-cover" fill />
          </div>
          <SearchInput />

          <div className="mt-15 flex-col text-center">
            <h1 className="text-4xl">Explore our neighborhoods</h1>
            <p className="text-center">from this locations:</p>
            <div>
              <HomepageCard />
            </div>
          </div>
        </div>
        <div className="w-full max-w-[980px] mx-auto px-4">
          <h1 className="text-3xl font-bold">FAQs</h1>
          <AccordionLandingPage />
        </div>
        <div className="w-full max-w-[950px] mx-auto">
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Terms and Conditions (T&C)</h1>
          <TandC />
        </div>
        <div className="mt-10 w-full mx-auto px-4 bg-gray-100 text-center p-4 h-[200px]  pt-10">
          <h1 className="text-2xl">Already Searching? Log In to Save Your Favorites!</h1>
          <p className="text-[13px]">Don’t lose that perfect home—log in to keep track of listings you love.</p>
          <Link href="/login">
            <Button variant="default" size="sm" className="mt-10 cursor-pointer">
              Get Started
            </Button>
          </Link>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
