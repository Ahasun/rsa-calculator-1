import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

import "./Navbar.css";

function Navbar() {
  const reload = () => {
    window.location.reload();
    return false;
  };

  return (
    <div className="navbar">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className="navbar__icon"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className="navbar__title">
            RSA Calculator
          </Typography>
          <Button color="inherit" onClick={reload}>
            Reset
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar;
