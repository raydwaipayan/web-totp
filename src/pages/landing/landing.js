import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import {
  Container,
  Box,
  Button,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import TotpCell from '../../components/totpcell/totpcell';
import SearchBar from '../../components/search/searchbar';

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
  noItems: {
    color: theme.palette.secondary.main,
    textAlign: 'center',
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

export default function Landing() {
  const classes = useStyles();
  const [filter, setFilter] = useState('');

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setFilter(value.toLowerCase());
  };

  const filteredData = data.filter((item) => item.name.toLowerCase().includes(filter));

  return (
    <>
      <Container className={classes.root}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid container item xs={12} md={6} className={classes.cellContainer}>
            <Grid container className={classes.head}>
              <Grid item xs={8}>
                <SearchBar onChange={handleSearchChange} placeholder="Search..." />
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
              { filteredData.length
                ? filteredData.map((item) => (
                  <Box className={`${classes.cell} ${classes.borderCell}`} key={item.id}>
                    <TotpCell secret={item.secret} id={item.id} name={item.name} />
                  </Box>
                )) : (
                  <Box className={classes.noItems} py={1}>
                    {data.length
                      ? 'No totp entries found with given filter.'
                      : 'No shared secrets found.'}
                  </Box>
                )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
