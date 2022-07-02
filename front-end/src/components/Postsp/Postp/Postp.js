import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import moment from 'moment';

import useStyles from './styles';
import { deletePostp } from '../../../actions/postsp';

const Postp = ({ postp, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={postp.selectedFile} />
      <div className={classes.overlay}>
        <Typography variant="h6">{postp.name}</Typography>
        <Typography variant="body2">{moment(postp.createdAt).fromNow()}</Typography>
      </div>
      <div className={classes.details}>
        <Typography variant="subtitle1" color="inherit">no telpon : {postp.noPegawai}</Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>nama : {postp.namaPegawai}</Typography>
        <Divider />
        <Typography className={classes.title} variant="h5" gutterBottom>usia : {postp.usia} tahun</Typography>
      </CardContent>
      <CardActions className={classes.cardActions} >
        {(user?.result?._id === "62729e1306510726d49b02a2" ) && (
          <Button size="small" color="primary" disabled={!user?.result} onClick={() => setCurrentId(postp._id)}>
            <EditIcon fontSize="small" />
            Edit
          </Button>
        )}
        {console.log(user?.result?._id)}
        {(user?.result?._id === "62729e1306510726d49b02a2" ) && (
          <Button size="small" color="secondary" disabled={!user?.result} onClick={() => dispatch(deletePostp(postp._id))}>
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        )}
      </CardActions>
    </Card>
  )
}

export default Postp