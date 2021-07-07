import React, { useState, forwardRef, useImperativeHandle } from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomSnackbar = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const { variant, text } = props;

  useImperativeHandle(ref, () => ({
    handleOpen() {
      setOpen(true);
    },
  }));

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
      <Alert onClose={handleClose} severity={variant}>
        {text}
      </Alert>
    </Snackbar>
  );
});

export default CustomSnackbar;
