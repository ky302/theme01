import React, { useState } from "react";
import Fotter from "../component/Fotter";
import Header from "../component/Header";
import SideBar from "../component/SideBar";

const LayoutDashboard = (props) => {
  return (
    <>
      <main className=" dark:bg-gray-800 bg-zinc-800 h-screen overflow-hidden relative">
        <div className="flex items-start justify-between">
          <SideBar />
          <div className="flex flex-col w-full h-screen md:space-y-4">
            <Header />

            <div className="overflow-auto h-screen pb-4 px-2 md:px-6">
              {props.children}
            </div>
            <div className="grid items-end">
              <Fotter />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default LayoutDashboard;
