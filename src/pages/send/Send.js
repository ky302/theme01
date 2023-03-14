import React, { useState } from "react";
import { Link } from "react-router-dom";
import LayoutDashboard from "../../layout/LayoutDashboard";

const Send = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState(null);
  const [number, setNumber] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.files[0]);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text, image, number, selectedOption);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURI(message)}`);
  };

  return (
    <>
      <LayoutDashboard>
        <div className=" text-sm mt-6 lg:mx-0 md:mx-4 sm:mx-4">
          <div className=" bg-light-white flex flex-wrap lg:w-3/5 md:w-full sm:w-full items-center rounded-md mb-4 text-sm p-2 font-semibold text-white">
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
            <h1>Creat Form</h1>
          </div>
          <div className=" h-80 overflow-y-scroll mt-2">
            <div className=" flex px-20 py-4 bg-white rounded-b-md lg:mx-0 md:mx-4 sm:mx-4 ">
              <form
                onSubmit={handleSubmit}
                className="w-full font-bold text-black/80"
              >
                <div className="">
                  <input
                    type="text"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="border-2 rounded-md"
                  />
                  <button></button>
                </div>

                <div className="mt-4">
                  <select
                    value={selectedOption}
                    onChange={handleOptionChange}
                    className="bg-gray-200 p-2 rounded"
                  >
                    <option value="">Select Media</option>
                    <option value="option1">Whatsapp</option>
                    <option value="option2">SMS</option>
                  </select>
                </div>

                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="resize-none mt-4 border rounded-md border-gray-400 p-2 w-2/4"
                  rows={4}
                />
                <div className="mt-4">
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className=" bg-red-500 p-2 rounded text-white"
                  />
                </div>
                <div className=" flex justify-end">
                  <button
                    type="submit"
                    onClick={sendMessage}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-4"
                  >
                    Submit
                  </button>
                </div>
              </form>
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
            border-radius: 10px 10px 10px 10px;
            background-color: #ffff;
            // background: red;
            border : 2px solid #27272a;
        
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

export default Send;
