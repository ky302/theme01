import React, { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import DropdownLog from "./DropdownLog";
import { GlobalContext } from "../context/GlobalContext";

const Header = () => {
  const location = useLocation();
  const { state, handleFunction } = useContext(GlobalContext);
  let { open, setOpen } = state;

  let { handleClick } = handleFunction;

  return (
    <>
      <header className="w-full bg-zinc-800 h-16 z-40 flex items-center justify-between">
        <div className="block lg:hidden top-2 p-4">
          <button
            onClick={handleClick}
            className="flex p-2 items-center rounded-full shadow text-white/80 text-md"
          >
            <svg
              width={20}
              height={20}
              className="text-gray-400"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
            </svg>
          </button>
        </div>
        <div className="relative z-20 flex flex-col h-full px-5 md:w-full top-2 ">
          <div className="relative p-1 flex items-center w-full space-x-4 justify-between">
            <div className=" flex lg:gap-4  items-center">
              <Link
                to={"/dashboard"}
                className={`block text-base rounded-lg font-medium ${
                  location.pathname === "/dashboard" ? "bg-dash-layout/50" : ""
                }`}
              >
                <button
                  type="submit"
                  className=" flex justify-center items-center px-7 py-2 bg-transparent text-white/80 font-medium text-sm leading-snug rounded-lg hover:bg-dash-layout/50 hover:shadow-lg focus:bg-dash-layout/80 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-dash-layout active:shadow-lg transition duration-150 ease-in-out"
                >
                  Activity
                </button>
              </Link>

              <Link
                to={"/dashboard/status"}
                className={`block text-base rounded-lg font-medium ${
                  location.pathname === "/dashboard/status"
                    ? "bg-dash-layout/50"
                    : ""
                }`}
              >
                <button
                  type="submit"
                  className=" flex justify-center items-center px-7 py-2 bg-transparent text-white/80 font-medium text-sm leading-snug rounded-lg hover:bg-dash-layout/50 hover:shadow-lg focus:bg-dash-layout/80 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-dash-layout active:shadow-lg transition duration-150 ease-in-out"
                >
                  Status
                </button>
              </Link>

              <Link
                to={"/dashboard/send"}
                className={`block text-base rounded-lg font-medium ${
                  location.pathname === "/dashboard/send"
                    ? "bg-dash-layout/50"
                    : ""
                }`}
              >
                <button
                  type="submit"
                  className="flex justify-center items-center px-7 py-2 bg-transparent text-white/80 font-medium text-sm leading-snug rounded-lg hover:bg-dash-layout/50 hover:shadow-lg focus:bg-dash-layout/80 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-dash-layout active:shadow-lg transition duration-150 ease-in-out"
                >
                  Send
                </button>
              </Link>

              <form className="flex items-center justify-center ml-4">
                <label htmlFor="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-zinc-700 border border-gray-300 text-white/80 text-sm rounded-lg focus:ring-zinc-500 focus:border-zinc-500 block w-full p-1  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring--500 dark:focus:border-zinc-500"
                    placeholder="Search"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="p-1 ml-2 text-sm font-medium text-white bg-zinc-700 rounded-lg border border-zinc-700 hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </form>
            </div>
            <DropdownLog />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
