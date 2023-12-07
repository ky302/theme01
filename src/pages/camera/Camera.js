import React from "react";
import LayoutDashboard from "../../layout/LayoutDashboard";

const Camera = () => {
  return (
    <LayoutDashboard>
      <div className=" text-sm">
        <div className=" bg-light-white flex flex-wrap w-52 justify-center lg:mx-0 md:mx-4 sm:mx-4 items-center rounded-md mb-8 text-sm p-2 font-semibold text-white">
          <h1>Account:+6281123456789</h1>
        </div>
        <div className=" bg-dash-layout text-white lg:mx-0 md:mx-0 sm:mx-0 rounded-md p-3 font-semibold">
          <h1>Call History</h1>
          <p>Lasst Leght: 27 January 2023</p>
        </div>
        <div className=" h-72 overflow-y-scroll mt-2">
          <div className=" bg-white rounded-b-md lg:mx-0 md:mx-0 sm:mx-0 h-screen">
            <h1>Conten 6</h1>
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
  );
};

export default Camera;
