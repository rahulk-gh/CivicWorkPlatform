import React from 'react';
import { Modal, Button, Typography, Paper } from "@material-ui/core"


export default class MyModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const styles = {
      modal: {
        position: "absolute",
        top: 350,
        left: 700,
        background: "white",
      },
      paper: {
        padding: 20
      }
    }
    return (
      <div>
        <Typography gutterBottom>Click to get the full Modal experience!</Typography>
        <Button onClick={this.handleOpen}>Open Modal</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={styles.modal}>
          <Paper style={styles.paper}>
            <Typography variant="h6" id="modal-title">
              Text in a modal
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
            </Paper>
          </div>
        </Modal>
      </div>
    );
  }





}
