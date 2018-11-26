import React from "react";
import { PropTypes } from 'prop-types';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import MyModal from '../Modal';

export const MyCard = (props) => {
  // Destructure props parameter into individual items
  const {
    label,
    title,
    buttonText,
    content,
    toggleModal,
    modalOpen,
  } = props;

  return (
    <Card>
       <CardContent>
         <Typography color="inherit" gutterBottom>
           { label }
         </Typography>
         <Typography variant="h5" component="h2">
          { title }
         </Typography>
         <Typography color="inherit">
         {content}
         </Typography>
       </CardContent>
       <CardActions>
         <Button
          onClick={toggleModal}
          variant="contained"
          size="small"
          color="primary">
          { buttonText }
          </Button>
          <MyModal
           toggleModal={toggleModal}
           modalOpen={modalOpen}
           title={ label }
           content={ content } />
       </CardActions>
     </Card>
  );
}

// Enable type-checking
MyCard.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  buttonText: PropTypes.string,
};
