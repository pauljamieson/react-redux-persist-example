import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import strings from "../strings";
import { theme } from "../theme";

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
  },
  buttons: {
    marginLeft: theme.spacing(2),
  },
});

const NavBar = (props) => {
  const history = useHistory();
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography className={classes.title} color="textPrimary" variant="h4">
          {strings("app_name")}
        </Typography>
        <Button
          className={classes.buttons}
          onClick={() => history.push("/")}
          variant="contained"
        >
          Home
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => history.push("/path1")}
          variant="contained"
        >
          1
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => history.push("/path2")}
          variant="contained"
        >
          2
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => history.push("/path3")}
          variant="contained"
        >
          3
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
