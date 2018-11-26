import React from 'react'
import { List, ListItem, ListItemText, Divider } from '@material-ui/core'

// const scrollPoint = document.querySelector('.my-section').offsetTop;
// window.scrollTo({ top: scrollPoint, behavior: 'smooth' })



// {['About', 'Articles', 'Contact'].map((text, index) => (
//   <ListItem button key={text}>
//     <ListItemText primary={text} />
//   </ListItem>
// ))}


export const SideList = ({ styles, loginOpen, toggleLogin }) => {
  const scrollToPoint = (point) => {
    window.scrollTo({ top: point, behavior: 'smooth' })
  }

  return (
    <div className={styles.list}>
      <List>
        <ListItem button onClick={() => scrollToPoint(0)} key={'About'}>
          <ListItemText primary={'About'} />
        </ListItem>
        <ListItem button onClick={() => scrollToPoint(document.querySelector('#Articles').offsetTop)} key={'Articles'}>
          <ListItemText primary={'Articles'} />
        </ListItem>
        <ListItem button onClick={() => scrollToPoint(document.querySelector('#Contact').offsetTop)} key={'Contact'}>
          <ListItemText primary={'Contact'} />
        </ListItem>
      </List>
      <Divider />
      <List>
        {['Sign In'].map((text, index) => (
          <ListItem button onClick={toggleLogin} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

}
