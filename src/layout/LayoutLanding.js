import React from "react";
import FormLogin from "../pages/login/FormLogin";

const LayoutLanding = (props) => {
  return (
    <>
      {props.Home && <FormLogin />}
      {props.children}
    </>
  );
};

export default LayoutLanding;
