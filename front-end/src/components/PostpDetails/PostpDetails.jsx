import React, { useEffect, useState } from 'react';
import { Paper, Typography, CircularProgress, Divider, CardActions } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';

import { getPost, getPostsBySearch } from '../../actions/posts';
import useStyles from '../PelangganDetails/styles';
import Boy from '../../images/boy.png';
import axios from 'axios';

const PostpDetails = () => {
  //const user = JSON.parse(localStorage.getItem('profile'));

  const [selectedFile, setSelectedFile] = useState('');
  const [name, setName] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [noPegawai, setNoPegawai] = useState('');
  const [namaPegawai, setNamaPegawai] = useState('');
  const [usia, setUsia] = useState('');

  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  const getPegawaiById = async () => {
    const response = await axios.get(`http://192.168.1.3:5000/pegawai/${id}`);
    setSelectedFile(response.data.selectedFile);
    setCreatedAt(response.data.createdAt);
    setName(response.data.name);
    setNoPegawai(response.data.noPegawai);
    setNamaPegawai(response.data.namaPegawai);
    setUsia(response.data.usia);
  }

  useEffect(() => {
    getPegawaiById();
  }, [])

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{namaPegawai}</Typography>
          <Typography gutterBottom variant="subtitle1" color="inherit" component="h2">{noPegawai}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <div className={classes.imageSection}>
            <img className={classes.media} src={selectedFile} alt={namaPegawai} />
          </div>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="h6" color="inherit">Usia : {usia} </Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="h6" color="inherit">mulai kerja : {createdAt} </Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Typography variant="h6">Created by: {name}</Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
      </div>
    </Paper>
  )
}

export default PostpDetails;