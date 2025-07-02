import type { JSX } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer(): JSX.Element {
  return (
    <footer className="fixed flex items-center justify-center w-full bottom-4">
      <ul className="bg-gray-300 text-black w-[90%] h-[60px] flex rounded-full justify-center items-center text-[0.65rem] overflow-hidden footer shadow-[0_0_10px_rgba(0,0,0,0.7)]">
        <li className="flex justify-center hover:bg-[#00000098] items-center py-4 text-black w-full h-full transition-all duration-500">
          <Link
            className="border-r border-white w-full h-[20px] flex justify-center items-center flex-col gap-2"
            href="/"
          >
            <Image src="/icons8-home.svg" width={15} height={15} alt="bell" />
            Home
          </Link>
        </li>
        <li className="flex justify-center hover:bg-[#00000098] items-center py-4 text-black w-full h-full transition-all duration-500">
          <a
            className="border-r border-white w-full h-[20px] flex justify-center items-center flex-col gap-2"
            href="/categories"
          >
            <Image src="/history.svg" width={15} height={15} alt="bell" />
            Transactions
          </a>
        </li>

        <li className="flex justify-center hover:bg-[#00000098] items-center py-4 w-full h-full text-black transition-all duration-500">
          <Link
            className="border-r border-white w-full h-[20px] flex justify-center items-center flex-col gap-2 "
            href="/"
          >
            <Image src="/settings.svg" width={15} height={15} alt="bell" />
            Settings
          </Link>
        </li>
        <li className="flex justify-center hover:bg-[#00000098] items-center py-4 w-full  text-black transition-all duration-500">
          <Link
            className="flex flex-col items-center justify-center w-full gap-2 "
            href="/user"
          >
            <Image src="/user.svg" width={15} height={15} alt="bell" />
            Account
          </Link>
        </li>
      </ul>
    </footer>
  );
}
