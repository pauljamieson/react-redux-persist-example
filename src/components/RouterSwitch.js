import { Typography } from "@material-ui/core";
import React from "react";
import { Switch, Route } from "react-router-dom";
import strings from "../strings";
const RouterSwitch = (props) => {
  return (
    <Switch>
      <Route exact path="/path1">
        <Typography variant="body1" color="textSecondary">
          {strings("path1")}
        </Typography>
      </Route>
      <Route exact path="/path2">
        <Typography variant="body1" color="textSecondary">
          {strings("path2")}
        </Typography>
      </Route>
      <Route exact path="/path3">
        <Typography variant="body1" color="textSecondary">
          {strings("path3")}
        </Typography>
      </Route>
      <Route exact path="/">
        <Typography variant="body1" color="textSecondary">
          {strings("root_path")}
        </Typography>
      </Route>
    </Switch>
  );
};

export default RouterSwitch;
