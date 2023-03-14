import React, { useState, useContext } from "react";
import "../App.css";
import { NavLink, useLocation } from "react-router-dom";
import logos from "../asset/img/logo2.png";
import { SidebarData } from "../Data/SidebarData";
import { GlobalContext } from "../context/GlobalContext";

const SideBar = () => {
  const location = useLocation();
  const { state, handleFunction } = useContext(GlobalContext);
  let { open, setOpen } = state;

  let { handleClick } = handleFunction;

  return (
    <>
      {/* {open && (
        <div className=" bg-opacity-50 bg-black/30 w-full h-full top-0 bottom-0 fixed"></div>
      )} */}
      <div
        className={` ${
          open ? "block" : "hidden"
        } h-screen lg:block shadow-lg relative w-60`}
      >
        <div className=" bg-dash-layout h-full dark:bg-gray-700">
          <div className="flex items-center justify-start pt-4 ml-8 mb-8">
            <img src={logos} alt="" className=" w-32" />
          </div>
          {SidebarData.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={`block mx-1 px-0 py-0 text-base rounded-lg font-medium ${
                location.pathname === item.path ? "bg-zinc-800" : ""
              }`}
            >
              <div className="w-full  text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:bg-zinc-800 rounded-xl border-l-4 border-transparent">
                <span className="text-left">
                  <img src={item.icon} alt="" className=" w-6" />
                </span>
                <span className="mx-4 text-sm font-bold">{item.text}</span>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
