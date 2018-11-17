import React from 'react'
import { List, ListItem, ListItemText, Divider } from '@material-ui/core'

export const SideList = styles =>
  <div className={styles.list}>
    <List>
      {['About', 'Articles', 'Contact'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
    <Divider />
    <List>
      {['Sign In'].map((text, index) => (
        <ListItem button key={text}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  </div>
