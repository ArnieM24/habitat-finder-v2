import Image from "next/image";
import Navbar from "../components/navbar";
import LandingPageImg from "../assets/first-landing-page.png";
import SearchInput from "@/components/search-input";

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
        </div>
      </main>
      <footer></footer>
    </div>
  );
}
