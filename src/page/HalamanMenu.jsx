import React from "react";
import MenuCard from "../component/MenuCard";
import Navbar from "../component/Navbar";
import datamenu from "../data/datamenu";
export default function HalamanMenu() {
  return (
    <div className="sm:h-[100%] lg:h-screen w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <Navbar />
      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h3 className="text-4xl font-bold text-gray-200 text-center mb-6 uppercase">
          OUR MENU'S
        </h3>
        <p className="mt-2 text-gray-600 text-center">
          Take food as your medicine before you take medicine as your food.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {datamenu.map((menu) => (
            <MenuCard menu={menu} key={menu.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
