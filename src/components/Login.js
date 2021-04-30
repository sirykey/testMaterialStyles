import HomePage from './HomePage'
import Login from './Login'

import {
  Avatar,
  Box,
  Button,
  Container,
  Grid, List, ListItem,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core'
import { AccountCircle, LockOutlined } from '@material-ui/icons'
import React from 'react'
import { deepOrange } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  paper: {
    boxSizing:'border-box',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 3),
    float: 'right',
    width: '200px',
    maxWidth: '200px',
    background: 'aliceblue',
    height: '100vh',
  },
  avatar: {
    margin: theme.spacing(1),
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },
  form: {
    maxWidth: '150px',
    width: '100%',
    marginTop: theme.spacing(1),
  },

  listStyle: {
    wordWrap: 'break-word'
  },

  list: {
    marginRight:'5px',
    wordWrap:'break-all',
    overflow: 'hidden',
    maxWidth: '200px',
    display: 'inline-block',
    alignItems: 'center'
  }
}))

const admin = {
  name: 'admin',
  surname: 'admin',
  text: 'some text'
}

function App () {

  const classes = useStyles()
  return (

    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        {/*<AccountCircle/>*/}A
      </Avatar>
      <div className={classes.list}>
        <List>
          <ListItem button></ListItem>
        </List>
        <List style={classes.listStyle}>
          <ListItem button>qwqweqqqqqqqqqweqweqwwwwwwwwwe</ListItem>
        </List>
        <List>
          <ListItem button>qwe</ListItem>
        </List>
        <List>
          <ListItem button>qwe</ListItem>
        </List>
      </div>
    </div>
  )
}

export default App
