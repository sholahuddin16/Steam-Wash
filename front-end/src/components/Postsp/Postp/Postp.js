import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import useStyles from './styles';
import { deletePostp } from '../../../actions/postsp';

const Postp = ({ postp, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={postp.selectedFile} namaPegawai={postp.namaPegawai} />
      <div className={classes.overlay}>
        <Typography variant="h6">{postp.namaPegawai}</Typography>
        <Typography variant="body2">{moment(postp.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">no telpon : {postp.noPegawai}</Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>nama : {postp.namaPegawai}</Typography>
        <Typography className={classes.title} variant="h5" gutterBottom>usia : {postp.usia} tahun</Typography>
      </CardContent>
      <CardActions className={classes.cardActions} >
        <Button size="small" color="primary" onClick={() => setCurrentId(postp._id)}>
          <EditIcon fontSize="small" />
          Edit
        </Button>
        <Button size="small" color="secondary" onClick={() => dispatch(deletePostp(postp._id))}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Postp