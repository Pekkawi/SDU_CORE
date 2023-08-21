"use client";
import { SignedIn, SignOutButton } from "@clerk/nextjs";
import Image from "next/image";

import Link from "next/link";
import { useRouter } from "next/navigation";

function Topbar() {
  const router = useRouter();

  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <p className="font-normal text-xl text-dark-1 max-xs:hidden">
          SDU - THE CORE
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block ">
          <SignedIn>
            <SignOutButton signOutCallback={() => router.push("/sign-in")}>
              <div className="flex cursor-pointer gap-4 px-4">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />

                <p className="text-dark-3 max-lg:hidden">Logout</p>
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Topbar;
