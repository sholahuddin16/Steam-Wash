import React, { useState, useEffect } from 'react';
import { AppBar, Typography, TextField, Button, CardActions, Grid, Grow, Container } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import ListAltIcon from '@material-ui/icons/ListAlt';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AddCirclecon from '@material-ui/icons/AddCircleOutline';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

const Menu = () => {
    const user = JSON.parse(localStorage.getItem('profile'));

    const classes = useStyles();

    return (
        <AppBar className={classes.appBarrrr} position="static" color="inherit">
            <Grow in>
                <Grid container justify="space-evenly" alignItems="stretch" spacing={2} >
                    <Grid item md="6">
                        <AppBar className={classes.appBar} position="static" color="inherit">
                            <div className={classes.brandContainer}>
                                <CardActions className={classes.cardActions} >
                                    <Button size="small" color="primary" >
                                        <HomeIcon fontSize="small" />
                                        Home
                                    </Button>
                                    <Button size="small" color="primary" component={Link} to="/pelanggan" >
                                        <ListAltIcon fontSize="small" />
                                        List Pelanggan
                                    </Button>
                                    <Button size="small" color="primary" component={Link} to="/postsp" >
                                        <AccountBoxIcon fontSize="small" />
                                        List Pegawai
                                    </Button>
                                    {(user?.result?._id === "62729e1306510726d49b02a2") && (
                                        <Button size="small" color="secondary" component={Link} to="/transaksi" >
                                            <ListAltIcon fontSize="small" />
                                            Data Transaksi
                                        </Button>
                                    )}
                                </CardActions>
                            </div>
                        </AppBar>
                    </Grid>
                    <Grid item md={3}>
                        <AppBar className={classes.appBar} position="static" color="inherit">
                            <div className={classes.brandContainer}>
                                <CardActions className={classes.cardActions} >
                                    <TextField name="search" variant="outlined" size="small" label="Search " />
                                    <Button variant="contained" size="small" color="primary">Search</Button>
                                </CardActions>
                            </div>
                        </AppBar>
                    </Grid>
                    <Grid item md={2}>
                        <AppBar className={classes.appBar} position="static" color="inherit">
                            <div className={classes.brandContainer}>
                                <CardActions className={classes.cardActions} >
                                    <Button component={Link} to="/formpelanggan" variant="outlined" size="small" color="secondary">
                                        <AddCirclecon fontSize="small" />
                                        Booking Steam
                                    </Button>
                                </CardActions>
                            </div>
                        </AppBar>
                    </Grid>
                </Grid>
            </Grow>
        </AppBar>


    )
}

export default Menu