import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button, CardActions } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

const Menu = () => {
    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <CardActions className={classes.cardActions} >
                    <Button size="large" color="primary" >
                        <EditIcon fontSize="small" />
                        Home
                    </Button>
                    <Button size="large" color="primary" >
                        <DeleteIcon fontSize="small" />
                        List Pelanggan
                    </Button>
                    <Button size="large" color="primary" >
                        <DeleteIcon fontSize="small" />
                        List Pegawai
                    </Button>
                  
                </CardActions>
            </div>
        </AppBar>
    )
}

export default Menu