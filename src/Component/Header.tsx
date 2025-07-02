"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex justify-center items-center mt-2">
      <nav className="bg-[#525151] w-[95%] rounded-4xl py-2 px-4 flex justify-between items-center relative">
        <p className="text-white font-bold">logo</p>
        {/* Hamburger Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white mb-1 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-white transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
        {/* Desktop Menu */}
        <ul className="hidden md:flex text-[0.7rem] md:text-[0.8rem] gap-2 text-[#ffffff]">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="$">Pricing</Link>
          </li>
          <li>
            <Link href="/Dashboard">Dashboard</Link>
          </li>
        </ul>
        <div className="hidden md:flex justify-center items-center gap-2">
          <button
            className="text-[0.8rem] text-[#000000] cursor-pointer hover:text-[grey] active:scale-110"
            onClick={() => router.push("/Login")}
          >
            Login
          </button>
          <button
            className="text-[0.8rem] bg-white py-1 px-2 rounded-2xl font-bold text-[#00a8e0] hover:bg-[#d2d2d2] active:scale-105 cursor-pointer"
            onClick={() => router.push("/SignUp")}
          >
            Sign Up
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-12 left-0 w-full bg-[#525151] rounded-2xl shadow-lg flex flex-col items-center z-50 md:hidden animate-fade-in">
            <ul className="flex flex-col gap-4 py-4 text-white w-full items-center">
              <li>
                <Link href="/" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="$" onClick={() => setMenuOpen(false)}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/Dashboard" onClick={() => setMenuOpen(false)}>
                  Dashboard
                </Link>
              </li>
            </ul>
            <div className="flex flex-col gap-2 pb-4 w-full items-center">
              <button
                className="text-[0.8rem] text-[#000000] cursor-pointer hover:text-[grey] active:scale-110 w-24"
                onClick={() => {
                  setMenuOpen(false);
                  router.push("/Login");
                }}
              >
                Login
              </button>
              <button
                className="text-[0.8rem] bg-white py-1 px-2 rounded-2xl font-bold text-[#00a8e0] hover:bg-[#d2d2d2] active:scale-105 cursor-pointer w-24"
                onClick={() => {
                  setMenuOpen(false);
                  router.push("/SignUp");
                }}
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
