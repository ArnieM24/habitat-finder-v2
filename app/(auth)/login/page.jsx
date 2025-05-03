"use client";

import Navbar from "@/components/navbar";
import { listenForAuthStateChanges, login, signInWithGoogle } from "./action";
import Link from "next/link";
import Logo from "@/public/assets/LogoLogoHabitat.jpg";
import Image from "next/image";
import { useEffect } from "react";

export default function LoginPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
        <div className="bg-gray-100 mb-5">
          <Link href="/">
            <button className="cursor-pointer">
              <Image src={Logo} width={150} height={100} alt="Logo" className="border rounded-4xl" />
            </button>
          </Link>
        </div>
        <div className="w-full max-w-md bg-white text-black rounded-xl shadow-lg p-6 space-y-6">
          <div className="text-center">
            <p className="text-2xl font-semibold">Welcome back</p>
            <p className="text-sm text-neutral-400 mt-1">Login with your Google account</p>
          </div>

          <div className="space-y-2">
            <form>
              <button formAction={signInWithGoogle} className="w-full flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded cursor-pointer">
                <span className="text-xl">G</span> Login with Google
              </button>
            </form>
          </div>

          <div className="flex items-center gap-2">
            <hr className="flex-grow border-neutral-700" />
            <span className="text-sm text-neutral-500">Or continue with</span>
            <hr className="flex-grow border-neutral-700" />
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="text-sm block mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-3 py-2 rounded text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 border-b-2 border-solid border-black"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <a href="#" className="text-sm text-blue-400 hover:underline">
                  Forgot your password?
                </a>
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-3 py-2  rounded text-sm focus:outline-none focus:ring-2 focus:ring-neutral-400 border-b-2 border-solid border-black"
              />
            </div>

            <button type="submit" formAction={login} className="w-full py-2 bg-[hsl(21,100%,50%)] text-white font-semibold rounded hover:bg-[hsl(21,100%,60%)] transition cursor-pointer">
              Login
            </button>

            <p className="text-sm text-center text-neutral-500">
              Don’t have an account?
              <Link href="/sign-up" className="text-blue-400 hover:underline ml-1">
                Sign up
              </Link>
            </p>
          </form>

          <p className="text-xs text-center text-neutral-600 mt-4">
            By clicking continue, you agree to our{" "}
            <a href="#" className="underline">
              Terms of Service{" "}
            </a>
            and
            <a href="#" className="underline">
              {" "}
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </>
  );
}
