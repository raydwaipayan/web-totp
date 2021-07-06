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
  ];

  return (
    <>
      <Container className={classes.root}>
        <Grid container alignItems="center" justify="center">
          <Grid container item xs={12} md={6} className={classes.cellContainer}>
            <Box className={classes.cellBox} width={1} py={2}>
              {data.map((item, index) => (
                index === 1
                  ? (
                    <Box className={classes.cell} width={1} py={1}>
                      <TotpCell secret={item.secret} id={item.id} name={item.name} />
                    </Box>
                  )
                  : (
                    <Box width={1} py={1}>
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
