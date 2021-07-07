import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Container, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
    borderBottom: '1px solid #CCCCCC',
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
            <Box className={classes.cellBox} width={1}>
              {data.map((item, index) => (
                index !== (data.length - 1)
                  ? (
                    <Box className={`${classes.cell} ${classes.borderCell}`} key={item.id}>
                      <TotpCell secret={item.secret} id={item.id} name={item.name} />
                    </Box>
                  )
                  : (
                    <Box className={classes.cell} key={item.id}>
                      <TotpCell secret={item.secret} id={item.id} name={item.name} />
                    </Box>
                  )
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
