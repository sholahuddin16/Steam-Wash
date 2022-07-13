import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper, Container } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPostp, updatePostp } from '../../actions/postsp.js';

const Formp = ({ currentId, setCurrentId }) => {
  const [postpData, setPostpData] = useState({ namaPegawai: '', usia: '', noPegawai: '', selectedFile: '' });
  const postp = useSelector((state) => (currentId ? state.postsp.find((message) => message._id === currentId) : null));

  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if (postp) setPostpData(postp);
  }, [postp]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePostp(currentId, { ...postpData, name: user?.result?.name }));
      history.push('/postsp');
      clear();
    } else {
      dispatch(createPostp({ ...postpData, name: user?.result?.name }));
      history.push('/postsp');
      clear();
    }
    console.log(postpData);
  };


  const clear = () => {
    setCurrentId(null);
    setPostpData({ namaPegawai: '', usia: '', noPegawai: '', selectedFile: '' });
  }


  return (
    <Container component="main" maxWidth="xl" >

      {(user?.result?._id === "62729e1306510726d49b02a2") && (
        <Paper className={classes.Paper}>
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
            <Typography variant='h6'> {currentId ? 'Ubah Pegawai' : 'Tambah Pegawai'} </Typography>
            <TextField name="namaPegawai" variant="outlined" label='Nama Pegawai' fullWidth value={postpData.namaPegawai} onChange={(e) => setPostpData({ ...postpData, namaPegawai: e.target.value })} />
            <TextField name="usia" variant="outlined" label='usia' fullWidth value={postpData.usia} onChange={(e) => setPostpData({ ...postpData, usia: e.target.value })} />
            <TextField name="noPegawai" variant="outlined" label='Nomor Telpon' fullWidth value={postpData.noPegawai} onChange={(e) => setPostpData({ ...postpData, noPegawai: e.target.value })} />
            <div className={classes.fileInput}>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => setPostpData({ ...postpData, selectedFile: base64 })}
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

export default Formp;