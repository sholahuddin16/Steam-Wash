import React, { useState } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Postp from './Postp/Postp';
import useStyles from './styles';

const Postsp = ({ setCurrentId }) => {
  const postsp = useSelector((state) => state.postsp);
  const classes = useStyles();

  return (
    !postsp.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {postsp.map((postp) => (
          <Grid key={postp._id} item xs={12} sm={12} md={6} lg={3} >
            <Postp postp={postp} setCurrentId={setCurrentId} />
          </Grid>
        ))}
    </Grid>
    )
  )
}

export default Postsp