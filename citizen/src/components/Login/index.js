import React from 'react';
import { Button, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@material-ui/core"

export default class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
}

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      loginOpen,
      toggleLogin,
    } = this.props;
    return (
      <div>
        <Dialog
          open={loginOpen}
          onClose={toggleLogin}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Login</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your email and password.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Email Address"
              type="email"
              fullWidth
            />
            <TextField
              margin="dense"
              id="outlined-password-input"
              label="Password"
              type="password"
              fullWidth
        />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggleLogin} color="primary">
              Close
            </Button>
            <Button onClick={this.toggleLogin} color="primary">
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
