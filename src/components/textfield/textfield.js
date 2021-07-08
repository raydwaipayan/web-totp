import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Typography, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '70%',
    },
    '& input': {
      height: '0.5rem',
    },
  },
}));

export default function TextFieldLabelled({
  placeholder, label, onChange, error = false, helperText = '',
}) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle1">
        {label}
      </Typography>
      <TextField
        error={error}
        helperText={helperText}
        className={classes.textField}
        variant="outlined"
        onChange={onChange}
        placeholder={placeholder}
      />
    </Box>
  );
}
