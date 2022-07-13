import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Paper, Grid, Typography, Container, TextField, CardActions } from '@material-ui/core';

import useStyles from '../Formp/styles';
import FileBase from 'react-file-base64';


import noteee from '../../images/note.png';
import { createPost, updatePost } from '../../actions/posts.js';

const FormAdmin = ({ currentId, setCurrentId }) => {
  const [postData, setPostData] = useState({ namaPelanggan: '', merkMotor: '', plat: '', noPelanggan: '', noSlot: '', statusKendaraan: '', namaPencuci: '', selectedFile: '' });
  const post = useSelector((state) => (currentId ? state.posts.posts.find((message) => message._id === currentId) : null));

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePost(currentId, { ...postData, name: user?.result?.name }));
      clear();
    } else {
      dispatch(createPost({ ...postData, name: user?.result?.name }));
      history.push('/');
      clear();
    }

    console.log(postData);
  }

  const clear = () => {
    setCurrentId(null);
    setPostData({ namaPelanggan: '', merkMotor: '', plat: '', noPelanggan: '', noSlot: '', statusKendaraan: '', namaPencuci: '', selectedFile: '' });
  };

  return (
    <Container component="main" maxWidth="md" >
      {(user?.result?._id === "62729e1306510726d49b02a2") && (
        <Paper className={classes.Paper} >
          <Grid container justify="space-evenly" alignItems="stretch" spacing={2} >
            <img className={classes.image} src={noteee} height="60" />
          </Grid>
          <br />
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant='h6'> {currentId ? 'Edit Booking Steam' : 'Booking Steam'} </Typography>
            <TextField className={classes.Texttt} name="namaPelanggan" variant="outlined" label='Nama Pelanggan' fullWidth
              value={postData.namaPelanggan} onChange={(e) => setPostData({ ...postData, namaPelanggan: e.target.value })} />
            <Grid className={classes.GridText} container justify="flex-start" alignItems="stretch" spacing={2} >
              <TextField name="merkMotor" variant="outlined" label='Merk Motor'
                value={postData.merkMotor} onChange={(e) => setPostData({ ...postData, merkMotor: e.target.value })} />
              <TextField name="plat" variant="outlined" label='Plat Nomor'
                value={postData.plat} onChange={(e) => setPostData({ ...postData, plat: e.target.value })} />
            </Grid>
            <TextField className={classes.Texttt} name="noPelanggan" variant="outlined" label='No Telpon' fullWidth
              value={postData.noPelanggan} onChange={(e) => setPostData({ ...postData, noPelanggan: e.target.value })} />
            <Grid className={classes.GridText} container justify="flex-start" alignItems="stretch" spacing={2} >
              <TextField name="noSlot" variant="outlined" label='No Slot'
                value={postData.noSlot} onChange={(e) => setPostData({ ...postData, noSlot: e.target.value })} />
              <TextField name="statusKendaraan" variant="outlined" label='Status Kendaraan'
                value={postData.statusKendaraan} onChange={(e) => setPostData({ ...postData, statusKendaraan: e.target.value })} />
            </Grid>
            <TextField className={classes.Texttt} name="namaPencuci" variant="outlined" label='Nama Pencuci' fullWidth
              value={postData.namaPencuci} onChange={(e) => setPostData({ ...postData, namaPencuci: e.target.value })} />
            <div className={classes.fileInput}>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
              />
            </div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
          </form>
        </Paper>
      )}
    </Container>
  )
}

export default FormAdmin