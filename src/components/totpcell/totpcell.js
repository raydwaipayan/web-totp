import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import getTotpGenerator from '../../util/getTotpGenerator';
import { unixtime } from '../../util/common';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

function totpValidTime() {
  const time = unixtime();
  const ltime = Math.floor((time - 1) / 30) * 30;
  const validTime = 30 - (time - ltime);
  return Math.max(0, validTime);
}

function periodicCallback(setValid, setT) {
  const validTime = totpValidTime();
  setValid(validTime);
  if (validTime === 0) {
    setT(Math.floor(unixtime() / 30));
  }
}

export default function TotpCell({
  id, name, secret,
}) {
  const classes = useStyles();
  const [totp, setTotp] = useState(null);
  const [valid, setValid] = useState(0);
  const [t, setT] = useState(0);
  const totpGenerator = getTotpGenerator();

  setInterval(() => periodicCallback(setValid, setT), 1000);

  useEffect(() => {
    if (typeof totpGenerator === 'function') {
      setTotp(totpGenerator(secret, 32));
      setValid(totpValidTime());
      setT(Math.floor(unixtime() / 30));
    }
  }, [totpGenerator, secret, t]);

  return (
    <>
      <Grid container className={classes.root} spacing={0} id={id}>
        <Grid item xs={8}>
          <Container>
            <Paper elevation={0}>
              {totp || '------'}
            </Paper>
            <Paper elevation={0}>
              {name}
            </Paper>
          </Container>
        </Grid>
        <Grid item xs={4}>
          {totp ? valid : '-'}
        </Grid>
      </Grid>
    </>
  );
}
