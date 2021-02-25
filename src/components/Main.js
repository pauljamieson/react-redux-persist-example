import { Typography } from "@material-ui/core";
import React from "react";
import FooterBar from "./FooterBar";
import NavBar from "./NavBar";

const Main = (props) => {
  return (
    <div>
      <NavBar />
      <Typography color="textPrimary" variant="h2">
        Main
      </Typography>
      <FooterBar />
    </div>
  );
};

export default Main;
