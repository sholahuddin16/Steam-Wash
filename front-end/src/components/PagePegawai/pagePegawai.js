import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, CardActions } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { getPostsp } from '../../actions/postsp';

import Postsp from '../Postsp/Postsp';
import Pagination from '../Pagination';
import Formp from '../Formp/Formp';
import useStyles from './styles';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const usePagePegawai = () => {
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    useEffect(() => {
        dispatch(getPostsp());
    }, [dispatch]);

    const classes = useStyles();

    return (
        <Grow in>

            <Container maxWidth="xl" >

                <Grid container justify="space-between" alignItems="stretch" spacing={3} >
                    <Grid item xs={12} sm={6} md={12}>
                        <Formp currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={12}>
                        <Postsp setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={12}>
                    <Paper className={classes.pagination} elevation={6}>
                        <Pagination />
                    </Paper>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    );
}

export default usePagePegawai;