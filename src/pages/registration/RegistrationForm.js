import React from "react";
import LayoutLanding from "../../layout/LayoutLanding";
import { Link } from "react-router-dom";
import logo from "../../asset/img/logo2.png";

const RegistrationForm = () => {
  return (
    <div className=" w-full h-screen bg-zinc-800 text-white flex flex-col justify-center items-center">
      <div className=" w-300 h-540 flex flex-col justify-start my-56 ">
        <div>
          <img src={logo} alt="" className=" w-36" />

          <div className=" bg-green-900 h-1 w-14 my-4"></div>
          <p className=" text-white/80 font-semibold text-sm">
            Sign up to Liveblocks
          </p>
        </div>
        <div className=" text-red-400">
          <div className="mb-4 mt-4">
            <input
              className=" bg-zinc-700 appearance-none border-gray-200 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-zinc-700  outline-none "
              id="inline-full-name"
              type="text"
              placeholder="Nama"
            />
          </div>

          <div className="mb-4">
            <input
              className=" bg-zinc-700 appearance-none border-gray-200 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-zinc-700  outline-none "
              id="inline-full-name"
              type="number"
              placeholder="NIP"
            />
          </div>

          <div className="mb-4">
            <input
              className=" bg-zinc-700 appearance-none border-gray-200 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-zinc-700  outline-none "
              id="inline-full-name"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="mb-6">
            <input
              className=" bg-zinc-700  appearance-none border-gray-200 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-zinc-700  outline-none "
              id="inline-full-name"
              type="password"
              placeholder="Password"
            />
          </div>

          <hr class="h-px mb-6 bg-gray-600 border-0 dark:bg-gray-700" />
          <div>
            <button
              type="submit"
              className="inline-block w-full flex justify-center gap-2 items-center my-4 px-7 py-2 bg-transparent border border-gray-600 text-white/80 font-medium text-sm leading-snug rounded-lg shadow-md hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-600 active:shadow-lg transition duration-150 ease-in-out"
            >
              Sign Up
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className=" w-4 h-4 font-semibold"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>

            <div className=" flex justify-center mt-10">
              <p className=" text-xs text-white/80">
                Have an account?{" "}
                <Link to={"/"}>
                  <button className=" text-blue-500">Sign</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
