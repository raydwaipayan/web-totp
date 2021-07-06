import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TotpCell from '../../components/totpcell/totpcell';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  cellContainer: {
    backgroundColor: theme.palette.background.light,
    borderRadius: '5px',
    padding: theme.spacing(2),
  },
}));

export default function Landing() {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.root}>
        <Grid container alignItems="center" justify="center">
          <Grid container item xs={12} md={6} className={classes.cellContainer}>
            <TotpCell secret="GEZDGNBVGY3TQOJQ" id="1" name="Testing" />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
