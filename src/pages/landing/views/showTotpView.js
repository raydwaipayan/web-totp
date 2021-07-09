import React, { useState } from 'react';
import {
  Box,
  Button,
  Menu,
  MenuItem,
  Grid,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
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
    marginBottom: theme.spacing(2),
  },
  borderButton: {
    border: '1px solid #CCCCCC',
  },
  noItems: {
    color: theme.palette.secondary.main,
    textAlign: 'center',
  },
}));

export default function ShowTotpView({
  data, handleViewChange, clearAllCodes, snackBarOpen,
}) {
  const classes = useStyles();
  const [filter, setFilter] = useState('');
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleSearchChange = (e) => {
    const { value } = e.target;
    setFilter(value.toLowerCase());
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const filteredData = data.filter((item) => item.name.toLowerCase().includes(filter));

  return (
    <>
      <div>
        <Grid container>
          <Grid item xs={8}>
            <div>
              <SearchBar onChange={handleSearchChange} placeholder="Search..." />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" justifyContent="space-around">
              <Button
                aria-label="settings"
                aria-controls="settings-menu"
                aria-haspopup="true"
                className={classes.iconButton}
                onClick={handleMenuClick}
              >
                <SettingsIcon />
              </Button>
              <Menu
                id="settings-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem
                  onClick={() => { clearAllCodes(); handleMenuClose(); }}
                >
                  Delete everything
                </MenuItem>
              </Menu>
              <Button
                aria-label="Add"
                className={`${classes.iconButton} ${classes.borderButton}`}
                onClick={() => handleViewChange('add')}
              >
                <AddIcon />
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box className={classes.cellBox} width={1}>
          { filteredData.length
            ? filteredData.map((item) => (
              <Box className={`${classes.cell} ${classes.borderCell}`} key={item.id}>
                <TotpCell
                  secret={item.secret}
                  id={item.id}
                  name={item.name}
                  snackbarOpen={snackBarOpen}
                />
              </Box>
            )) : (
              <Box className={classes.noItems} py={1}>
                {data.length
                  ? 'No totp entries found with given filter.'
                  : 'No shared secrets found.'}
              </Box>
            )}
        </Box>
      </div>
    </>
  );
}
