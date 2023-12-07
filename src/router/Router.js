import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import FormLogin from "../pages/login/FormLogin";
import RegistrationForm from "../pages/registration/RegistrationForm";
import { GlobalProvider } from "../context/GlobalContext";
import LayoutLanding from "../layout/LayoutLanding";
import Cookies from "js-cookie";
import Call from "../pages/call/Call";
import Voice from "../pages/voice/Voice";
import Position from "../pages/position/Position";
import WhatsApp from "../pages/whatsapp/WhatsApp";
import Email from "../pages/email/Email";
import Camera from "../pages/camera/Camera";
import Message from "../pages/message/Message";
import Contact from "../pages/contact/Contact";
import Status from "../pages/status/Status";
import Send from "../pages/send/Send";

const Router = () => {
  const LoginRoute = (props) => {
    if (Cookies.get("token") === undefined) {
      return props.children;
    } else if (Cookies.get("token") !== undefined) {
      return <Navigate to={"/dashboard"} />;
    }
  };
  return (
    <>
      <HashRouter>
        <GlobalProvider>
          <Routes>
            <Route
              path="/"
              element={
                <LoginRoute>
                  <LayoutLanding>
                    <FormLogin />
                  </LayoutLanding>
                </LoginRoute>
              }
            />

            <Route path="/register" element={<RegistrationForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/activ/message" element={<Message />} />
            <Route path="/dashboard/activ/call" element={<Call />} />
            <Route path="/dashboard/activ/position" element={<Position />} />
            <Route path="/dashboard/activ/whatsapp" element={<WhatsApp />} />
            <Route path="/dashboard/activ/email" element={<Email />} />
            <Route path="/dashboard/activ/camera" element={<Camera />} />
            <Route path="/dashboard/activ/voice" element={<Voice />} />
            <Route path="/dashboard/activ/contact" element={<Contact />} />
            <Route path="/dashboard/status" element={<Status />} />
            <Route path="/dashboard/send" element={<Send />} />
          </Routes>
        </GlobalProvider>
      </HashRouter>
    </>
  );
};

export default Router;
