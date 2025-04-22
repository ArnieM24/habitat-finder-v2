import Image from "next/image";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="flex justify-center items-center">Hello World</div>
      </main>
      <footer></footer>
    </div>
  );
}
