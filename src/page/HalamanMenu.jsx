import React from "react";
import MenuCard from "../component/MenuCard";
import Navbar from "../component/Navbar";
const data = [
  {
    name: "Pizza",
    Harga: "50.000",

    imageUrl:
      "https://cdn.pixabay.com/photo/2020/06/08/16/49/pizza-5275191_960_720.jpg",
  },
  {
    name: "Coca Cola",
    Harga: "15.000",

    imageUrl:
      "https://cdn.pixabay.com/photo/2019/08/13/20/02/coca-cola-4404130_960_720.jpg",
  },
  {
    name: "Pepsi",
    Harga: "15.000",
    imageUrl:
      "https://cdn.pixabay.com/photo/2015/04/22/05/46/pepsi-734274_960_720.jpg",
  },
  {
    name: "Burger",
    Harga: "25.000",
    imageUrl:
      "https://cdn.pixabay.com/photo/2016/05/25/10/43/hamburger-1414422_960_720.jpg",
  },
  {
    name: "Mie Iblis",
    Harga: "25.000",
    imageUrl:
      "https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_960_720.jpg",
  },
];
export default function HalamanMenu() {
  return (
    <div className="sm:h-full lg:h-screen w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <Navbar />
      <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
        <h3 className="text-4xl font-bold text-gray-200 text-center mb-6 uppercase">
          OUR MENU'S
        </h3>
        <p className="mt-2 text-gray-600 text-center">
          Take food as your medicine before you take medicine as your food.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {data.map((menu) => (
            <MenuCard menu={menu} key={menu.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
