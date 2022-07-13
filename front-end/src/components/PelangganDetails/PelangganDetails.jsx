import React, { useState, useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider, CardActions } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';

//import { getPost, getPostsBySearch } from '../../actions/posts';
import useStyles from './styles';
import axios from 'axios';


const PelangganDetails = () => {

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



  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{namaPelanggan}</Typography>
          <Typography gutterBottom variant="subtitle1" color="inherit" component="h2">{noPelanggan}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <div className={classes.imageSection}>
            <img className={classes.media} src={selectedFile} alt={namaPelanggan} />
          </div>
          <CardActions className={classes.cardActions} >
            <Typography variant="subtitle1" color="inherit">Slot:  {noSlot}</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="subtitle1" color="inherit">{statusKendaraan}</Typography>
          </CardActions>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="body1">{moment(createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <CardActions className={classes.cardActions} >
            <Typography variant="subtitle1" color="inherit">{merkMotor}</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="subtitle1" color="inherit">{plat}</Typography>
          </CardActions>
          <Divider style={{ margin: '20px 0' }} />
          <CardActions className={classes.cardActions} >
            <Typography variant="h6" color="inherit">Pencuci {namaPencuci}</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="subtitle1" color="inherit">Rp.10.000</Typography>
          </CardActions>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="h6">Created by: {name}</Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
        
      </div>
    </Paper>
  )
}

export default PelangganDetails;