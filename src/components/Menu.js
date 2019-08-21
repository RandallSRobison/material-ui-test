import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import FriendsList from "./FriendsList";
import "./Menu.css";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap"
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1
    }
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    background: "#414656"
  },
  drawerPaper: {
    background: "#313442"
  }
}));

const addButtonStyle = {
  background: "#00B9FF",
  color: "white"
};

const buttonStyle = {
  background: "#7e8699",
  color: "#ffffff",
  position: "absolute",
  right: "30px",
  top: "15px"
};

const listItemStyle = {
  color: "white",
  fontSize: "1.2rem"
};

const chevronStyle = {
  background: "transparent",
  color: "white"
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
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar className="tool-bar">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open
            })}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" noWrap>
            Logo
          </Typography>
          <div className="logout-parent">
            <Link to='/'>
            <Button variant="contained" style={buttonStyle}>
              Logout
            </Button>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
            [classes.drawerPaper]: true
          })
        }}
        open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon style={chevronStyle} />
            ) : (
              <ChevronLeftIcon style={chevronStyle} />
            )}
          </IconButton>
        </div>
        <Divider />
        <div className="add-server-btn">
          <Fab style={addButtonStyle} aria-label="add" className={classes.fab}>
            <AddIcon />
          </Fab>
        </div>
        <Divider />
        <List>
          <Link className="list-item-text" to="/home/:selectedServer">
            <ListItem style={listItemStyle} button>
              News
            </ListItem>
          </Link>
          <Link className="list-item-text" to="/rooms">
            <ListItem style={listItemStyle} button className="list-item-text">
              Test Server Page
            </ListItem>
          </Link>
          <ListItem style={listItemStyle} button className="list-item-text">
            Blah
          </ListItem>
          <ListItem style={listItemStyle} button className="list-item-text">
            Blah
          </ListItem>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {/* <News/> */}
        {/* <Rooms/> */}
      </main>
      <FriendsList />
    </div>
  );
}
