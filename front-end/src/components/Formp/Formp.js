import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPostp, updatePostp } from '../../actions/postsp';

const Formp = ({ currentId, setCurrentId }) => {
  const postp = useSelector((state) => currentId ? state.postsp.find((p) => p._id === currentId) : null);
  const dispatch = useDispatch();
  useEffect(() => {
    if (postp) setPostpData(postp);
  }, [postp])

  const [postpData, setPostpData] = useState({
    namaPegawai: '', usia: '', noPegawai: '', selectedFile: ''
  });

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updatePostp(currentId, postpData));
    } else {
      dispatch(createPostp(postpData));
    }
    clear();
  }

  const clear = () => {
    setCurrentId(null);
    setPostpData({ namaPegawai: '', usia: '', noPegawai: '', selectedFile: '' });
  }

  return (
    <Paper className={classes.Paper}>
      <form autoComplete='"off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
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
  )
}

export default Formp