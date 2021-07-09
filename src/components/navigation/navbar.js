import React from 'react';
import {
  AppBar, Box, Toolbar, Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: 'transparent',
    color: theme.palette.background.contrastText,
    boxShadow: 'none',
  },
  toolbar: {
    justifyContent: 'center',
    fontSize: '20px !important',
    flexDirection: 'column',
  },
  logo: {
    fontWeight: 'bolder',
    padding: theme.spacing(4),
    paddingBottom: theme.spacing(1),
  },
  logoSecondary: {
    color: theme.palette.primary.dark,
  },
  text: {
    textAlign: 'center',
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Box>
          <Typography variant="h4" className={classes.logo}>
            Web -
            {' '}
            <span className={classes.logoSecondary}>TOTP</span>
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" className={classes.text}>
            An open source TOTP generator
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
