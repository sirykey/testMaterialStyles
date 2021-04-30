import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { AccountCircle } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  title: {
    flexGrow: 1
  },
  toolbar: {
    paddingRight: 24
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }
}))

function Menu (props) {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        {/*в тулбар кладутся кнопки, лого и все подобное*/}
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.title}>Smm-agency</Typography>
          <IconButton
            edge='end'
            color="inherit">
            <AccountCircle/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Menu
