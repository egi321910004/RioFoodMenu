import React from "react";

export default function MenuCard({ menu }) {
  return (
    <div className="flex items-center rounded-lg bg-gray-200 shadow-lg overflow-hidden">
      <img className="h-32 w-32 flex-shrink-0" src={menu.imageUrl} alt="" />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">{menu.name}</h3>

        <p className="text-gray-600">{menu.Harga} Ribu</p>
        <div className="mt-4"></div>
      </div>
    </div>
  );
}
