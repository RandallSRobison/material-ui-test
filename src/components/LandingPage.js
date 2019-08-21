import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "./LandingPage.css";

const buttonStyle = {
  background: "#7e8699",
  color: "#ffffff"
};

export default function LandingPage() {
  return (
    <div className="login-container">
      <span className="login-box">
        <div className="dude-container" />
        <div className="button-container">
          <Button
            style={buttonStyle}
            className="login-button"
          >{`Login / Register`}</Button>
        </div>
      </span>
    </div>
  );
}
