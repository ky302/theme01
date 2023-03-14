import React from "react";

const ScrollBar = (props) => {
  return (
    <>
      <div className=" grid grid-cols-2 gap-2">{props.children}</div>
      <style>
        {`
          ::-webkit-scrollbar {
            width: 10px;
            background-color: #ffff;
            border-radius: 10px 10px 10px 10px;
            border-style: solid;
            border-color: #27272a;
            
          }
          
          ::-webkit-scrollbar-thumb {
            background-color: #29463e;
            border-radius: 10px 10px 10px 10px;
            border-style: solid;
            border-color: #27272a
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: #29463e;
          }
        `}
      </style>
    </>
  );
};

export default ScrollBar;
