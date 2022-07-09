import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, CardActions } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import { getPosts } from '../../actions/posts';

import Pagination from '../Pagination';
import useStyles from '../PagePegawai/styles';
import FormAdmin from '../FormPelanggan/FormAdmin';
import Posts from '../Posts/Posts';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const usePagePelanggan = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);

    const classes = useStyles();

    return (
        <Grow in>

            <Container maxWidth="xl" >

                <Grid container justify="space-between" alignItems="stretch" spacing={3} >
                    <Grid item xs={12} sm={6} md={12}>
                        <FormAdmin currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={12}>
                        <Posts setCurrentId={setCurrentId} />
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

export default usePagePelanggan;