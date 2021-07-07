import React from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Container,
  Box,
  Button,
  InputBase,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import { alpha, makeStyles } from '@material-ui/core/styles';
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
  cellBox: {
    borderRadius: '4px',
    border: '1px solid #CCCCCC',
    height: '50vh',
    overflowY: 'scroll',
  },
  cell: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.background.main,
    },
    '&:active': {
      backgroundColor: theme.palette.background.dark,
    },
  },
  borderCell: {
    borderBottom: '1px dashed #CCCCCC',
  },
  iconButton: {
    border: '1px solid #CCCCCC',
    marginBottom: theme.spacing(2),
  },
  search: {
    position: 'absolute',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.secondary.main, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.secondary.main, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 'auto',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function Landing() {
  const classes = useStyles();

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

  return (
    <>
      <Container className={classes.root}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid container item xs={12} md={6} className={classes.cellContainer}>
            <Grid container className={classes.head}>
              <Grid item xs={8}>
                <Box>
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder="Search…"
                      classes={{
                        input: classes.inputInput,
                      }}
                      inputProps={{ 'aria-label': 'search' }}
                    />
                  </div>
                </Box>
              </Grid>
              <Grid item xs={4}>
                <Box display="flex" justifyContent="flex-end">
                  <Button aria-label="Add" className={classes.iconButton}>
                    <AddIcon />
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Box className={classes.cellBox} width={1}>
              {data.map((item) => (
                <Box className={`${classes.cell} ${classes.borderCell}`} key={item.id}>
                  <TotpCell secret={item.secret} id={item.id} name={item.name} />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
