import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgressWithLabel from '../progress/circularprogress';
import getTotpGenerator from '../../util/getTotpGenerator';
import { unixtime } from '../../util/common';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const getTime = () => (unixtime());
const getT = () => (Math.floor(getTime() / 30));
const getTotpExpiryTime = () => (getT() * 30 + 30);

export default function TotpCell({
  id, name, secret,
}) {
  const classes = useStyles();
  const [totp, setTotp] = useState(null);
  const [t, setT] = useState(null);
  const [expiry, setExpiry] = useState(0);
  const [time, setTime] = useState(getTime());

  const totpGenerator = getTotpGenerator();

  setInterval(() => setTime(getTime()), 1000);

  useEffect(() => {
    if (typeof totpGenerator === 'function') {
      setTotp(totpGenerator(secret, 32));
      setExpiry(getTotpExpiryTime());
      setT(getT());
    }
  }, [totpGenerator, secret, t]);

  useEffect(() => {
    if (time >= expiry) {
      setT(getT());
    }
  }, [time]);

  const validTime = Math.max(0, expiry - time);
  return (
    <>
      <Grid container className={classes.root} spacing={0} id={id}>
        <Grid item xs={10}>
          <Container>
            <Box>
              {totp || '------'}
            </Box>
            <Box>
              {name}
            </Box>
          </Container>
        </Grid>
        <Grid item xs={2}>
          <Box>
            <CircularProgressWithLabel max={30} min={0} value={validTime} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
