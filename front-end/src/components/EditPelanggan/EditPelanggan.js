import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { Button, Paper, Grid, Typography, Container, TextField, CardActions } from '@material-ui/core';

import useStyles from '../Formp/styles';
import FileBase from 'react-file-base64';


import noteee from '../../images/note.png';
import axios from 'axios';
//import { updatePost } from '../../actions/posts.js';



const EditPelanggan = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  const [namaPelanggan, setNamaPelanggan] = useState('');
  const [noPelanggan, setNoPelanggan] = useState('');
  const [noSlot, setNoSlot] = useState('');
  const [statusKendaraan, setStatusKendaraan] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [merkMotor, setMerkMotor] = useState('');
  const [plat, setPlat] = useState('');
  const [namaPencuci, setNamaPencuci] = useState('');
  const [name, setName] = useState('');
  const [selectedFile, setSelectedFile] = useState('');

  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  const getPelangganById = async () => {
    const response = await axios.get(`http://192.168.1.3:5000/pelanggan/${id}`);
    setNamaPelanggan(response.data.namaPelanggan);
    setNoPelanggan(response.data.noPelanggan);
    setNoSlot(response.data.noSlot);
    setStatusKendaraan(response.data.statusKendaraan);
    setCreatedAt(response.data.createdAt);
    setMerkMotor(response.data.merkMotor);
    setPlat(response.data.plat);
    setNamaPencuci(response.data.namaPencuci);
    setName(response.data.name);
    setSelectedFile(response.data.selectedFile);
  }

  useEffect(() => {
    getPelangganById();
  }, []);

  const updatePelanggan = async (e) => {
    e.preventDefault();
    await axios.patch(`http://192.168.1.3:5000/pelanggan/${id}`, {
      namaPelanggan: namaPelanggan,
      noPelanggan: noPelanggan,
      noSlot: noSlot,
      statusKendaraan: statusKendaraan,
      setMerkMotor: merkMotor,
      plat: plat,
      namaPencuci: namaPencuci,
      selectedFile: selectedFile
    });
    history.push("/pelanggan")
  }


  return (
    <Container component="main" maxWidth="md" >
      {(user?.result?._id === "62729e1306510726d49b02a2") && (
        <Paper className={classes.Paper} >
          <Grid container justify="space-evenly" alignItems="stretch" spacing={2} >
            <img className={classes.image} src={noteee} height="60" />
          </Grid>
          <br />
          <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={updatePelanggan}>
            <Typography variant='h6'> Edit Booking Steam </Typography>
            <TextField className={classes.Texttt} name="namaPelanggan" variant="outlined" label='Nama Pelanggan' fullWidth
              value={namaPelanggan} onChange={(e) => setNamaPelanggan(e.target.value)} />
            <Grid className={classes.GridText} container justify="flex-start" alignItems="stretch" spacing={2} >
              <TextField name="merkMotor" variant="outlined" label='Merk Motor'
                value={merkMotor} onChange={(e) => setMerkMotor(e.target.value)} />
              <TextField name="plat" variant="outlined" label='Plat Nomor'
                value={plat} onChange={(e) => setPlat(e.target.value)} />
            </Grid>
            <TextField className={classes.Texttt} name="noPelanggan" variant="outlined" label='No Telpon' fullWidth
                value={noPelanggan} onChange={(e) => setNoPelanggan(e.target.value)} />
            <Grid className={classes.GridText} container justify="flex-start" alignItems="stretch" spacing={2} >
              <TextField name="noSlot" variant="outlined" label='No Slot'
                value={noSlot} onChange={(e) => setNoSlot(e.target.value)} />
              <TextField name="statusKendaraan" variant="outlined" label='Status Kendaraan'
                value={statusKendaraan} onChange={(e) => setStatusKendaraan(e.target.value)} />
            </Grid>
            <TextField className={classes.Texttt} name="namaPencuci" variant="outlined" label='Nama Pencuci' fullWidth
                value={namaPencuci} onChange={(e) => setNamaPencuci(e.target.value)} />
            <div className={classes.fileInput}>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) => setSelectedFile({ selectedFile: base64 })}
              />
            </div>
            <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit" fullWidth>Submit</Button>
            <Button variant="contained" color="secondary" size="small" fullWidth>Clear</Button>
          </form>
        </Paper>
      )}
    </Container>
  )
}

export default EditPelanggan;