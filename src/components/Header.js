import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Menu from "./Menu";
import "../styles.css";

const buttonStyle = {
  background: "#7e8699",
  color: "#ffffff"
};

export default function Header() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar className="tool-bar">
          <Menu />
          <Typography className="news" variant="h6">
            Logo
          </Typography>
          <Button variant="contained" style={buttonStyle}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
