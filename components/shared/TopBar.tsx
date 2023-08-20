"use client";

import { SignedIn, SignOutButton } from "@clerk/nextjs";

import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <p className="font-normal text-xl text-dark-1 max-xs:hidden">
          SDU - THE CORE
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block "></div>
      </div>
    </nav>
  );
}

export default Topbar;
