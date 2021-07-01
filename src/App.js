import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import Navbar from './components/navigation/navbar';

const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: theme.palette.primary.main,
  },
  app: {
    backgroundColor: theme.palette.background.main,
  },
}));

function App() {
  const classes = useStyles();
  document.title = 'Web - TOTP';
  return (
    <Container className={classes.app}>
      <header>
        <Navbar className={classes.nav} />
      </header>
    </Container>
  );
}

export default App;
