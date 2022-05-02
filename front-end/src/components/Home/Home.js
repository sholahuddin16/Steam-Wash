import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPostsp } from '../../actions/postsp';

import Postsp from '../Postsp/Postsp';
import Formp from '../Formp/Formp';
import useStyles from './styles';

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPostsp());
    }, [dispatch]);

    const classes = useStyles();

    return (
        <Grow in>
            <Container maxWidth="xl">
                <Grid container justify="space-between" alignItems="stretch" spacing={3} >
                    <Grid item xs={12} sm={6} md={9}>
                        <Postsp setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Formp currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default Home