import React from "react";
import { Link } from "react-router-dom";
import LayoutDashboard from "../../layout/LayoutDashboard";

const Status = () => {
  return (
    <>
      <LayoutDashboard>
        <div className=" text-sm mt-10 lg:mx-0 md:mx-4 sm:mx-4">
          <div className=" bg-light-white flex flex-wrap lg:w-3/5 md:w-full sm:w-full items-center rounded-md mb-8 text-sm p-2 font-semibold text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
              />
            </svg>
            <h1>
              Welcome, let's entry data on the seaching form above to get
              personal activity data.
            </h1>
          </div>
          <div className=" bg-dash-layout text-white rounded-t-md p-3 font-semibold">
            <h1>Call History</h1>
            <p>Lasst Leght: 27 January 2023</p>
          </div>
          <div className=" h-64 overflow-y-scroll mt-2">
            <div className=" bg-white rounded-b-md lg:mx-0 md:mx-0 sm:mx-0 h-screen">
              <h1>Conten 7</h1>
            </div>
          </div>
          <style>
            {`
          ::-webkit-scrollbar {
            width: 14px;
            background-color: #ffff;
            border-radius: 10px 10px 10px 10px;
            
              
          }
          ::-webkit-scrollbar-track {
            // border-radius: 10px 10px 10px 10px;
            background-color: #ffff;
            // background: red;
            border-right: 2px solid #27272a;
            border-left: 2px solid #27272a;
        
          }
          
          
          ::-webkit-scrollbar-thumb {
            background-color: #29463e;
            border-radius: 10px 10px 10px 10px;
            border : 4px solid transparent;
            background-clip: content-box;
           
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: #29463e;
          }
        `}
          </style>
        </div>
      </LayoutDashboard>
    </>
  );
};

export default Status;
