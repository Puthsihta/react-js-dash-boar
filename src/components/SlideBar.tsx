import React from "react";
import { BiMenuAltLeft, BiMoney } from "react-icons/bi";
import { RiDashboardLine } from "react-icons/ri";
import { AiOutlineInfo } from "react-icons/ai";
import { Link } from "react-router-dom";
const SlideBar = ({ toggleSlide, setToggleSlide }: any) => {
  const MenuData = [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: <RiDashboardLine className="text-2xl" />,
    },
    {
      name: "Income",
      url: "/income",
      icon: <BiMoney className="text-2xl" />,
    },
    {
      name: "Info",
      url: "/info",
      icon: <AiOutlineInfo className="text-2xl" />,
    },
  ];
  return (
    <div
      className={`${
        toggleSlide && "-translate-x-[25rem]"
      } w-[20rem] md:w-[25rem] z-50 bg-blue-600 h-screen left-0 top-0 fixed transtion ease-in-out duration-500 lg:static`}>
      <div className="h-[5rem] flex justify-between items-center px-4">
        <h1 className="text-white font-bold text-3xl">Logo</h1>
        <BiMenuAltLeft
          className="text-xl text-white cursor-pointer lg:hidden"
          onClick={() => {
            setToggleSlide(!toggleSlide);
          }}
        />
      </div>
      <hr />
      <div className="h-full">
        {MenuData.map((item: any, index: number) => (
          <Link to={item.url}>
            <div className="h-14 flex items-center text-white p-4 cursor-pointer hover:bg-white hover:text-blue-600">
              {item.icon}
              <h1 className="text-xl ml-4">{item.name}</h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SlideBar;
