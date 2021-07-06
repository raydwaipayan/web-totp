import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Container,
  Box,
  IconButton,
  Typography,
} from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgressWithLabel from '../progress/circularprogress';
import getTotpGenerator from '../../util/getTotpGenerator';
import { unixtime } from '../../util/common';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  name: {
    color: theme.palette.secondary.dark,
  },
  icon: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
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
      <Grid container className={classes.root} spacing={0} id={id} alignItems="center">
        <Grid item xs={2}>
          <Box display="flex" justifyContent="center">
            <IconButton className={classes.icon}>
              <VpnKeyIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Container>
            <Typography variant="h5" textAlign="center">
              {totp || '------'}
            </Typography>
            <Typography variant="subtitle1" textAlign="center" className={classes.name}>
              {name}
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={2}>
          <Box display="flex" justifyContent="center" mr={4}>
            <CircularProgressWithLabel max={30} min={0} value={validTime} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
