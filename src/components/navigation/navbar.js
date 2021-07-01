import React from 'react';
import {
  AppBar, Toolbar, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: 'transparent',
    color: theme.palette.background.contrastText,
    boxShadow: 'none',
    borderBottom: '1px solid #ebebeb',
  },
  logoSecondary: {
    color: theme.palette.primary.dark,
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar className={classes.appbar}>
      <Toolbar>
        <Typography variant="h6">
          Web -
          {' '}
          <span className={classes.logoSecondary}>TOTP</span>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
