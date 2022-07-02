import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Paper, Grid, Typography, Container, TextField, CardActions } from '@material-ui/core';

import useStyles from '../Formp/styles';

import noteee from '../../images/note.png';
import { createPost, updatePost } from '../../actions/posts.js';


const FormPelanggan = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ namaPelanggan: '', merkMotor: '', plat: '', noPelanggan: '' });
    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if (post) setPostData(post);
    }, [post]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(createPost({ ...postData, name: user?.result?.name }));
        history.push('/');
        clear();

        console.log(postData);
    }

    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Sign in untuk booking Steam
                </Typography>
            </Paper>
        )
    }


    const clear = () => {
        setPostData({ namaPelanggan: '', merkMotor: '', plat: '', noPelanggan: '' });
    };


    return (
        <Container component="main" maxWidth="xs" >
            <Paper className={classes.Paper} >
                <Grid container justify="space-evenly" alignItems="stretch" spacing={2} >
                    <img className={classes.image} src={noteee} height="60" />
                </Grid>
                <br />
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography variant='h6'> {currentId ? 'Edit Booking Steam' : 'Booking Steam'} </Typography>
                    <TextField className={classes.Texttt} name="namaPelanggan" variant="outlined" label='Nama Pelanggan' fullWidth
                        value={postData.namaPelanggan} onChange={(e) => setPostData({ ...postData, namaPelanggan: e.target.value })} />
                    <CardActions>
                        <TextField name="merkMotor" variant="outlined" label='Merk Motor' fullWidth
                            value={postData.merkMotor} onChange={(e) => setPostData({ ...postData, merkMotor: e.target.value })} />
                        <TextField name="plat" variant="outlined" label='Plat Nomor' fullWidth
                            value={postData.plat} onChange={(e) => setPostData({ ...postData, plat: e.target.value })} />
                    </CardActions>
                    <TextField className={classes.Texttt} name="noPelanggan" variant="outlined" label='No Telpon' fullWidth
                        value={postData.noPelanggan} onChange={(e) => setPostData({ ...postData, noPelanggan: e.target.value })} />
                    <Button className={classes.buttonSubmit} variant="contained" color="primary" size="small" type="submit" fullWidth>Submit</Button>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                </form>
            </Paper>
        </Container>
    )
}

export default FormPelanggan;