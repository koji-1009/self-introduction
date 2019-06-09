import React from 'react';
import './App.css';

import { BrowserRouter, Route, Link } from 'react-router-dom'

import classNames from "classnames"

import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { withStyles, WithStyles, createStyles } from "@material-ui/styles";
import withRoot from './withRoot';

import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import WorkOutlineOutlinedIcon from '@material-ui/icons/WorkOutlineOutlined';

import WorkComponent from './components/WorksComponent'
import ProfileComponent from './components/ProfileComponent';

const drawerWidth = 200;

const styles = ({ palette, spacing, mixins, transitions, breakpoints, zIndex }: Theme) => createStyles({
  root: {
    display: 'flex',
    backgroundColor: palette.background.default,
    color: palette.primary.main,
  },
  toolbar: {},
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  appBar: {
    zIndex: zIndex.drawer + 1,
    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: transitions.create(['width', 'margin'], {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: spacing(1),
    marginRight: spacing(1),
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
    width: spacing(7),
    [breakpoints.up('sm')]: {
      width: spacing(9),
    },
  },
  appBarSpacer: mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    padding: spacing(2),
    overflow: 'auto',
  },
});

interface Props extends WithStyles<typeof styles> {
}

class App extends React.Component<Props> {
  state = {
    open: true,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root} >
        <BrowserRouter
          basename={"self-introduction-react/"}
        >
          <CssBaseline />
          <AppBar className={classNames(classes.appBar, this.state.open && classes.appBarShift)} >
            <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden,
                )}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                component="h1"
                variant="h4"
                color="inherit"
                noWrap
                className={classes.title}
              >
                Self Introduction
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <Link to="/home">
                <ListItem button>
                  <ListItemIcon>
                    <PermIdentityOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItem>
              </Link>
              <Link to="/work">
                <ListItem button>
                  <ListItemIcon>
                    <WorkOutlineOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Work" />
                </ListItem>
              </Link>
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <div>
              <Route path='/' exact component={ProfileComponent} />
              <Route path='/home' component={ProfileComponent} />
              <Route path='/work' component={WorkComponent} />
            </div>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default withRoot(withStyles(styles)(App));
