import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import strings from "../strings";

const NavBar = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography color="textPrimary" variant="h4">
          {strings("app_name")}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
