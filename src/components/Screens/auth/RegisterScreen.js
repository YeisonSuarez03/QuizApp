import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import RegisterIcon from '../../../assets/unDraw/undraw_Mobile_login_re_9ntv.svg';
import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';


export const RegisterScreen = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(show => !show);
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <div className="login__container register-changes">
        <div className="login__card row">
            <div className="login__info animate__animated animate__slideInRight col-md-6 col-12">
                <div className="login__items animate__animated animate__fadeIn">
                    <h1 className="text-center">Sign In</h1>
                    <div className="login__form">
                        <span>Or create a new account from scratch!</span>
                        <form className="login__form-container" autoComplete="off" className="my-3">
                        <TextField
                            id="input-with-icon-textfield"
                            label="Username"
                            variant="filled"
                            className="w-100"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <AccountCircleIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                        <TextField
                            id="input-with-icon-textfield"
                            label="Email"
                            className="w-100 mt-2"
                            variant="filled"
                            InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <EmailIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                        <TextField
                            id="standard-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            autoComplete="off"
                            label="Password"
                            variant="filled"
                            className="mt-2"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                    <VpnKeyIcon />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                           
                        />


                            
                            <button type="submit" className="btn my-3 w-100 btn-primary">
                                Sign Up
                            </button>
                        </form>
                        
                    </div>
                </div>
            </div>
            <div className="login__overlay animate__animated animate__slideInLeft col-md-6 col-12">
                    <div className="login__overlay-info animate__animated animate__fadeIn">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <div className="login__overlay-img mb-4">
                            <img src={RegisterIcon} />
                        </div>
                        <div className="text-center mt-2">
                        <Link to="/auth/login">
                            <button className="btn btn-outline-secondary">
                                Sign Up
                            </button>
                        </Link>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    )
}
