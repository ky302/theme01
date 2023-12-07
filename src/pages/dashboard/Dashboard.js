import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LayoutDashboard from "../../layout/LayoutDashboard";
import image from "../../asset/img/image.png";
import Cookies from "js-cookie";
import { DashboardDataCard } from "../../Data/DasboardDataCard";

const Dashboard = ({ route }) => {
  let Navigate = useNavigate();
  // const { paramsA } = route.params;
  // const { state } = useLocation();
  useEffect(() => {
    const token = Cookies.get("token");
    !token ? Navigate("/") : Navigate("/dashboard");
    // const { paramsA } = state;
    // console.log("paramzz coxxx", paramsA);
  }, []);
  return (
    <LayoutDashboard>
      <div>
        <div className=" bg-light-white flex flex-wrap w-52 justify-center lg:mx-0 md:mx-4 sm:mx-4 items-center rounded-md mb-6 mt-2 text-sm p-2 font-semibold text-white">
          <h1>Account: +6281123456789</h1>
        </div>
        <div className=" bg-dash-layout text-white rounded-t-md p-3 lg:mx-0 md:mx-4 sm:mx-4 font-semibold">
          <h1 className="text-sm">What’s New</h1>
          <p className=" text-xs">Lasst Leght: 27 January 2023</p>
        </div>
        <div className=" grid lg:grid-cols-5 md:grid-cols-2 lg:mx-0 md:mx-4 sm:grid-cols-1 sm:mx-4 lg:gap-8 md:gap-4">
          {DashboardDataCard.map(({ path, title, count, Icon }, index) => (
            <Link to={path} key={index}>
              <div className="flex flex-col items-center justify-center bg-white rounded-md mt-2 h-32 transition ease-in-out duration-300 hover:-translate-y-x-1 hover:scale-95">
                <div className="text-center font-bold">
                  <h1 className="text-4xl">{count}</h1>
                  <p>{title}</p>
                </div>
                <div className="flex w-full justify-start px-3">
                  <img src={Icon} alt="" className=" w-8" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className=" grid lg:grid-cols-2 md:grid-cols-1 text-sm lg:mx-0 md:mx-4 sm:mx-4  gap-4 mt-2">
          <div>
            <div className=" bg-dash-layout text-white p-2 font-semibold rounded-t-md">
              <h1>Photo & Video</h1>
            </div>
            <div className=" bg-white h-96 mt-2 rounded-b-md">
              <h1>Conten 1</h1>
            </div>
          </div>
          <div>
            <div className=" bg-dash-layout text-white p-2 font-semibold rounded-t-md">
              <h1>Lates Location</h1>
            </div>
            <div className=" flex justify-center items-center bg-white h-96 mt-2 rounded-b-md border-4 border-dash-layout ">
              <div className="relative w-full h-96">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
                  frameBorder={0}
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutDashboard>
  );
};

export default Dashboard;
