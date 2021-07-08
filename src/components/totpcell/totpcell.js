import React, {
  useEffect,
  useState,
} from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Container,
  Box,
  IconButton,
  Typography,
} from '@material-ui/core';
import { VpnKey } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgressWithLabel from '../progress/circularprogress';
import getTotpGenerator from '../../util/getTotpGenerator';
import { unixtime } from '../../util/common';

const useStyles = makeStyles((theme) => ({
  name: {
    color: theme.palette.secondary.dark,
  },
  icon: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  mainGrid: {
    padding: theme.spacing(1),
  },
}));

const getTime = () => (unixtime());
const getT = () => (Math.floor(getTime() / 30));
const getTotpExpiryTime = () => (getT() * 30 + 30);

export default function TotpCell({
  id, name, secret, snackbarOpen,
}) {
  const classes = useStyles();
  const [totp, setTotp] = useState(0);
  const [t, setT] = useState(0);
  const [expiry, setExpiry] = useState(0);
  const [time, setTime] = useState(getTime());

  const totpGenerator = getTotpGenerator();

  setInterval(() => setTime(getTime()), 1000);
  const validTime = Math.max(0, expiry - time);

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

  return (
    <>
      <Grid
        container
        className={classes.mainGrid}
        spacing={0}
        id={id}
        alignItems="center"
        onClick={() => {
          navigator.clipboard.writeText(totp.toString())
            .then(() => snackbarOpen('Copied!'));
        }}
      >
        <Grid item xs={2}>
          <Box display="flex" justifyContent="center">
            <IconButton className={classes.icon}>
              <VpnKey />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Container>
            <Typography variant="h5">
              {totp || '------'}
            </Typography>
            <Typography variant="subtitle1" className={classes.name}>
              {name}
            </Typography>
          </Container>
        </Grid>
        <Grid item xs={2}>
          <Box display="flex" justifyContent="center" mr={2}>
            <CircularProgressWithLabel max={30} min={0} value={validTime} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
