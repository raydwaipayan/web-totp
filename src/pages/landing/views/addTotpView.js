import React from 'react';
import { Box, Button, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import TextFieldLabelled from '../../../components/textfield/textfield';

const useStyles = makeStyles((theme) => ({
  addTotpBox: {
    borderRadius: '4px',
    height: '50vh',
  },
  goBackText: {
    color: theme.palette.primary.main,
    textTransform: 'none',
    paddingLeft: theme.spacing(1),
  },
  goBackIcon: {
    color: theme.palette.primary.main,
  },
  addBtnBox: {
    paddingTop: theme.spacing(2),
  },
  addBtn: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
    textTransform: 'none',
  },
  addBtnText: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
}));

export default function AddTotpView({ handleViewChange }) {
  const classes = useStyles();
  return (
    <>
      <Box width={1} className={classes.addTotpBox}>
        <Box width={1}>
          <Button onClick={() => handleViewChange('show')}>
            <ArrowBackIcon className={classes.goBackIcon} />
            <Typography variant="h5" className={classes.goBackText}>
              Go Back
            </Typography>
          </Button>
        </Box>
        <Box p={2}>
          <Typography>
            You can add authenticator accounts by entering the code provided by the
            service in which you want to enable 2FA below.
          </Typography>
        </Box>
        <Box p={2}>
          <form autoComplete="off">
            <Box mb={2}>
              <TextFieldLabelled placeholder="Eg. GEZDGNBVGY3TQOJQ" label="Shared secret: " onChange={() => null} />
            </Box>
            <Box mb={2}>
              <TextFieldLabelled placeholder="Eg. My vault key" label="Name: " onChange={() => null} />
            </Box>
            <Box className={classes.addBtnBox}>
              <Button className={classes.addBtn}>
                <AddIcon />
                <Typography className={classes.addBtnText}>
                  Add
                </Typography>
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </>
  );
}
