import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import logo from "../../asset/img/logo2.png";

const FormLogin = () => {
  useEffect(() => {
    const token = Cookies.get("token");
    !token ? console.log("ngga ada") : console.log("adaaa");
  }, []);

  let Navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setInput({ ...input, [name]: value });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(input);
    let { email, password } = input;

    axios
      .post(`https://backendexample.sanbersy.com/api/user-login`, {
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        let { token } = res.data;
        console.log("ini tokenzzz", token);
        Cookies.set("token", token, { expires: 1 });
        Navigate("/dashboard");
      })

      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className=" w-full h-screen bg-zinc-800 text-white flex flex-col justify-center items-center">
      <div className=" w-300 h-540 flex flex-col justify-start my-56 ">
        <div>
          <img src={logo} alt="" className=" w-36" />

          <div className=" bg-green-900 h-1 w-14 my-4"></div>
          <p className=" text-white/80 font-semibold text-sm">
            Log in to Liveblocks
          </p>
        </div>
        <form onSubmit={handleLogin} className=" text-red-400">
          <div className="mb-2 mt-4">
            <input
              onChange={handleChange}
              value={input.email}
              name="email"
              className=" bg-zinc-700 appearance-none border-gray-200 rounded w-full py-2 px-4 text-gray-200 leading-tight focus:outline-none focus:bg-zinc-700  outline-none "
              id="inline-full-name"
              type="email"
              placeholder="Email"
            />
          </div>

          <div className="mb-6">
            <input
              onChange={handleChange}
              value={input.password}
              name="password"
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
              Login
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
          </div>
        </form>
        <button className=" flex items-center gap-1 text-white/80">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
            />
          </svg>
          <p className=" text-xs">Forgot Password ?</p>
        </button>

        <div className=" flex justify-center mt-10">
          <p className=" text-xs text-white/80">
            Don’t have an account?{" "}
            <Link to={"/register"}>
              <button className=" text-blue-500">Sign up</button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormLogin;
