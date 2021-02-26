import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import strings from "../strings";
import { theme } from "../theme";
import { setLoggedIn, setLoggedOut } from "../actions";

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
  const dispatch = useDispatch();

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
        <Button
          className={classes.buttons}
          onClick={() => dispatch(setLoggedIn())}
          variant="contained"
        >
          Log In
        </Button>
        <Button
          className={classes.buttons}
          onClick={() => dispatch(setLoggedOut())}
          variant="contained"
        >
          Log Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
