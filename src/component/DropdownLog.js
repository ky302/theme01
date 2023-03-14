import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const DropdownLog = () => {
  let navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative px-5">
        <button
          className="flex items-center px-4 py-2 text-sm font-medium leading-5 text-white/80 border-none transition duration-150 ease-in-out bg-blue-800 border  rounded-md hover:text-white focus:outline-none focus:shadow-outline-blue  active:text-gray-800 active:bg-blue-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          Profile
        </button>
        {isOpen && (
          <div className="origin-top-right absolute right-5 mt-2 w-56 rounded-md shadow-lg transition ease-in-out duration-300">
            <div className="py-1 bg-white rounded-md shadow-xs">
              <div className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Option 1
              </div>
              <div className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900">
                Option 2
              </div>
              <button
                type="submit"
                onClick={() => {
                  Cookies.remove("token");
                  navigate("/");
                }}
                className="block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
              >
                Log Out
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DropdownLog;
