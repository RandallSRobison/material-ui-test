import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import "./Menu.css";
import { isUserWhitespacable } from "@babel/types";

const useStyles = makeStyles(theme => ({
  drawerPaper: {
    width: 200,
    background: "#3d4251"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 150
  }
}));

const buttonStyle = {
  background: "#52586d",
  color: "#ffffff"
};

const addButtonStyle = {
  background: '#00B9FF'
};

export default function Menu() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  function handleDrawerOpen() {
    setOpen(true);
  }
  function handleDrawerClose() {
    setOpen(false);
  }
  return (
    <div className="menu-container">
      <CssBaseline />
      <IconButton onClick={handleDrawerOpen} edge="start">
        <MenuIcon className="menu-btn" />
      </IconButton>
      <Drawer
        className="drawer"
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className="menu-header">
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon className="arrow-btn" />
            ) : (
              <ChevronRightIcon className="arrow-btn" />
            )}
          </IconButton>
        </div>
        <Divider />
        <div className="add-server-btn">
          {/* <Button variant="contained" style={buttonStyle}>
            Add Server
          </Button> */}
          <Fab style={addButtonStyle} aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
      
        </div>
        <Divider/>
        <List>
          <ListItem button className="list-item-text">News</ListItem>
          <ListItem button className="list-item-text">Test Server Page</ListItem>
          <ListItem button className="list-item-text">Blah</ListItem>
          <ListItem button className="list-item-text">Blah</ListItem>
        </List>
        <Divider />
        <List>
        <ListItem button className="list-item-text">Blah</ListItem>
          <ListItem button className="list-item-text">Blah</ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      />
    </div>
  );
}
