import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-col items-center justify-between bg-green-300 py-4 px-8 text-purple-700 md:flex-row">
      <div className="flex items-center">
        <Link href={"/"}>
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="mr-4"
          />
        </Link>
        <h1 className="font-medium">Town Star Stats</h1>
      </div>
      <div className="flex flex-col md:mx-auto md:flex-row md:justify-center">
        <button className="mb-2 text-purple-700 hover:underline md:mb-0">
          Buildings
        </button>
        <button className="mx-4 mb-2 text-purple-700 hover:underline md:mb-0">
          Production
        </button>
        <button className="mx-4 mb-2 text-purple-700 hover:underline md:mb-0">
          Current Meta
        </button>
        <button className="mx-4 mb-2 text-purple-700 hover:underline md:mb-0">
          <Link href={"/tournaments"}>Tournaments</Link>
        </button>
      </div>
      <div>
        <button className="text-purple-700 hover:underline">Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;
