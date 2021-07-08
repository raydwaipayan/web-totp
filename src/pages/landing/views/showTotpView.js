import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Box, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import SearchBar from '../../../components/search/searchbar';
import TotpCell from '../../../components/totpcell/totpcell';

const useStyles = makeStyles((theme) => ({
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

export default function ShowTotpView({ data, handleViewChange }) {
  const classes = useStyles();

  const [filter, setFilter] = useState('');

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setFilter(value.toLowerCase());
  };

  const filteredData = data.filter((item) => item.name.toLowerCase().includes(filter));

  return (
    <>
      <Box width={1}>
        <Grid container>
          <Grid item xs={8}>
            <SearchBar onChange={handleSearchChange} placeholder="Search..." />
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" justifyContent="flex-end">
              <Button aria-label="Add" className={classes.iconButton} onClick={() => handleViewChange('add')}>
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
      </Box>
    </>
  );
}
