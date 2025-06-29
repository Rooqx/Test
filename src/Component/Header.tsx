"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { JSX } from "react";

export default function Header(): JSX.Element {
  const router = useRouter();
  return (
    <header className="w-full flex justify-center items-center mt-2 ">
      <nav className=" bg-[#525151]  w-[95%] rounded-4xl py-2 px-4 flex justify-between items-center">
        <p>logo</p>
        <ul className="flex text-[0.7rem] md:text-[0.8rem] gap-2 text-[#ffffff]">
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
        <div className="flex justify-center items-center gap-2">
          <button
            className=" text-[0.8rem] text-[#000000] cursor-pointer hover:text-[grey] active:scale-110"
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
      </nav>
    </header>
  );
}
