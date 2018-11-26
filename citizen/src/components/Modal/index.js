import React from 'react';
import { Modal, Typography, Paper } from "@material-ui/core"

export default class MyModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false
    };
  }

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
    const {
      modalOpen,
      toggleModal,
      title,
      content,
    } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={modalOpen}
          onClose={toggleModal}
        >
          <div style={styles.modal}>
          <Paper style={styles.paper}>
            <Typography variant="h6" id="modal-title">
              {title}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              {content}
            </Typography>
            <h3 onClick={toggleModal}>close me</h3>
            </Paper>
          </div>
        </Modal>
      </div>
    );
  }





}
