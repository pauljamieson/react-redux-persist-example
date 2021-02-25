import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import strings from "../strings";

const useStyles = makeStyles({
  bottom: { top: "auto", bottom: 0 },
});

const FooterBar = (props) => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.bottom}>
      <Toolbar>
        <Typography color="textPrimary" variant="h4">
          {strings("copyright")}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default FooterBar;
