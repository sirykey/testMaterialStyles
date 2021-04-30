import React, { useState } from 'react'
import { Avatar, Drawer, IconButton, ListItem } from '@material-ui/core'
import List from '@material-ui/core/List'


function Qwe (props) {

  const [state, setState] = useState(false)
  const toggleDrawer = (open) => (e) => {
    setState(open)
  }

  const list = () => (
    <List>
      <ListItem button>
        hello motherfucker
      </ListItem>
    </List>
  )

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <Avatar/>
      </IconButton>
      <Drawer anchor={'right'}
      open={state}
      onClose={toggleDrawer(false)}
      >
        {list()}
      </Drawer>
    </div>
  )
}

export default Qwe