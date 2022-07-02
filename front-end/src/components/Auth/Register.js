import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOpenOutlined';

import useStyles from './styles';
import { signup } from '../../actions/auth';
//import icon from './icon';
import Input from './Input';

const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Register = () => {
    const [formData, setFormData] = useState(initialState);
    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setSignUp] = useState(false);

    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signup(formData, history))

        //console.log(formData);

    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const user = JSON.parse(localStorage.getItem('profile'));


    return (
        <Container component="main" maxWidth="xs" >
            {(user?.result?._id === "62729e1306510726d49b02a2") && (
                <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography variant="h5">Sign Up</Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <>
                                <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                            <Input name="email" label="Username" handleChange={handleChange} type="email" />
                            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
                            <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} >
                            Register
                        </Button>
                    </form>
                </Paper>
            )}
        </Container>
    )
}

export default Register;