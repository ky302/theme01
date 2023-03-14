import React from "react";
import Cookies from "js-cookie";
import DropdownLog from "./DropdownLog";
import { Alert, Dropdown } from "flowbite-react";
import { useNavigate, Link } from "react-router-dom";

const Fotter = () => {
  let navigate = useNavigate();
  return (
    <>
      <footer className=" bg-zinc-800 text-center lg:text-left pb-3">
        <div className="flex items-center justify-center text-sm text-white/80">
          Copyright © 2023 Personal Activity Data Engine. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Fotter;
