import React, { useState, useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Container,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ShowTotpView from './views/showTotpView';
import AddTotpView from './views/addTotpView';
import CustomSnackbar from '../../components/snackbar/snackbar';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  cellContainer: {
    backgroundColor: theme.palette.background.light,
    borderRadius: '5px',
    padding: theme.spacing(2),
  },
  contentBox: {
    height: '60vh',
  },
}));

const data = [
  {
    secret: 'GEZDGNBVGY3TQOJQ',
    id: '1',
    name: 'TestKey',
  },
  {
    secret: 'GEZDGNBVGY3TQOJA',
    id: '2',
    name: 'TestKey 2',
  },
];

const viewTypes = ['show', 'add'];

export default function Landing() {
  const classes = useStyles();
  const [activeContent, setActiveContent] = useState('show');
  const [snackbarText, setSnackbarText] = useState('');
  const snackbarRef = useRef();

  const handleViewChange = (newType) => {
    if (!viewTypes.includes(newType)) {
      return;
    }
    setActiveContent(newType);
  };

  const snackBarOpen = (text) => {
    setSnackbarText(text);
    snackbarRef.current.handleOpen();
  };

  const variableContent = () => {
    switch (activeContent) {
      case 'show':
        return (
          <ShowTotpView
            handleViewChange={handleViewChange}
            data={data}
            snackBarOpen={snackBarOpen}
          />
        );

      case 'add':
        return (
          <AddTotpView
            handleViewChange={handleViewChange}
            snackBarOpen={snackBarOpen}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <CustomSnackbar text={snackbarText} variant="success" ref={snackbarRef} />
      <Container className={classes.root}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid container item xs={12} md={6} className={classes.cellContainer}>
            <Box className={classes.contentBox} width={1}>
              {variableContent()}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
