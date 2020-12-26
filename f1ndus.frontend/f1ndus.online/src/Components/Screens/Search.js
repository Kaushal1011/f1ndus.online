import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import UserNav from "../Parts/UserNav";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft:"95px",
    marginRight:"20px"
  },
  paper1: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper3: {
    padding: theme.spacing(20),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper4: {
    padding: theme.spacing(10),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper5: {
    padding: theme.spacing(8),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper6: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <>
      <UserNav/>
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper1}>Tell everyone about you</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper2}>Where are you?</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper3} >Details about you</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper4}>Select Location on map</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper5}>Gig details and timing. List active until?</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper6}>List yourself as an experiance</Paper>
        </Grid>
      </Grid>
    </div>
    </>
    
  );
}