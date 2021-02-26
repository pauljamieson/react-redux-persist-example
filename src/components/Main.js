import React from "react";
import FooterBar from "./FooterBar";
import NavBar from "./NavBar";
import RouterSwitch from "./RouterSwitch";

const Main = (props) => {
  return (
    <div>
      <NavBar />
      <RouterSwitch />
      <FooterBar />
    </div>
  );
};

export default Main;
