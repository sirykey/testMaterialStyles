import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Menu from '@material-ui/core/Menu';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import { IconButton, MenuItem } from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'





const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // toolbarIcon: {
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'flex-end',
    //   padding: '0 8px',
    //   ...theme.mixins.toolbar,
    // },
    // appBarShift: {
    //   width: `calc(100% - ${drawerWidth}px)`,
    //   transition: theme.transitions.create(['margin', 'width'], {
    //     easing: theme.transitions.easing.easeOut,
    //     duration: theme.transitions.duration.enteringScreen,
    //   }),
    //   marginRight: drawerWidth,
    // },
    // hide: {
    //   display: 'none',
    // },
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  drawerContainer: {
    overflow: 'auto',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

export default function StaticWithPopUp() {
  const classes = useStyles();

  const [open, setOpen] = useState(null)
  const handleClick = (e) => {
    setOpen(e.currentTarget)
  }

  const handleClose = () => {
    setOpen(null)
  }

  return (
    <div className={classes.root}>
      <AppBar position="absolute"
              className={classes.appBar}
      >
        <Toolbar className={classes.toolbarIcon}>

          <Typography variant="h6" noWrap className={classes.title}>
            Smm-agency
          </Typography>
          <IconButton
            color="inherit"
            edge='end'
            aria-label="open drawer"
            onClick={handleClick}
          >
            <AccountCircle />
          </IconButton>
          <Menu
            anchorEl={open}
            keepMounted
            open={Boolean(open)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Hello MotherFucker</MenuItem>
            <MenuItem onClick={handleClose}>Wanna</MenuItem>
            <MenuItem onClick={handleClose}>Log out?</MenuItem>
          </Menu>
        </Toolbar>

      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button>
              Hello motherfucker
            </ListItem>
          </List>
        </div>
      </Drawer>

    </div>
  );
}
