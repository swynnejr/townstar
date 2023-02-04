import React from "react";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between bg-green-300 py-4 px-8 text-purple-700">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="mr-4"
        />
        <h1 className="font-medium">Town Star Stats</h1>
      </div>
      <div className="flex">
        <button className="text-purple-700 hover:underline">Buildings</button>
        <button className="mx-4 text-purple-700 hover:underline">
          Production
        </button>
        <button className="mx-4 text-purple-700 hover:underline">
          Current Meta
        </button>
        <button className="mx-4 text-purple-700 hover:underline">
          Tournaments
        </button>
      </div>
      <div>
        <button className="text-purple-700 hover:underline">Menu</button>
      </div>
    </nav>
  );
};

export default Navbar;
