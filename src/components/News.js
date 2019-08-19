import React, { Component } from "react";
import Header from "./Header";
import Menu2 from './Menu2'
import Cards from "./Cards";
import "./News.css";
import { Typography } from "@material-ui/core";

export default class News extends Component {
  render() {
    return (
      <div className="news-background">
        <Menu2/>
        <div className="news-title">
        <Typography variant="h4" >
          News
        </Typography>
        </div>
        <div className="cards-container">
          <Cards />
        </div>
      </div>
    );
  }
}
