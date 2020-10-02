import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import "./Header.css";
const Banner = require("../../images/banner.png");

function Header() {
  return (
    <div className="header">
      <Paper
        className="header__background"
        elevation={0}
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('" +
            Banner +
            "') no-repeat center center fixed",
        }}
      >
        <div className="header__bannerText">
          <Typography variant="h2" component="h2" gutterBottom>
            RSA Calculator
          </Typography>
          <Typography variant="h4" gutterBottom>
            A program for calculating rsa algorithm and thus encrypting and
            decrypting the messages
          </Typography>
        </div>
      </Paper>
    </div>
  );
}

export default Header;
