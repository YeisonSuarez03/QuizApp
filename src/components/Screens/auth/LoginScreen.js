import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import loginIcon from '../../../assets/unDraw/undraw_Swipe_profiles_re_tvqm.svg';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

export const LoginScreen = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(show => !show);
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };


    return (
        <div className="login__container login__register-changes">
        <div className="login__card row">
        <div className="login__overlay animate__animated animate__slideInRight col-md-6 col-12">
                    <div className="login__overlay-info animate__animated animate__fadeIn">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <div className="login__overlay-img mb-4">
                            <img src={loginIcon} />
                        </div>
                        <div className="text-center mt-2">
                        <Link to="/auth/register">
                            <button className="btn btn-outline-secondary">
                                Sign In
                            </button>
                        </Link>
                        </div>
                    </div>
            </div>
            <div className="login__info animate__animated animate__slideInLeft col-md-6 col-12">
                <div className="login__items animate__animated animate__fadeIn">
                    <h1 className="text-center">Sign Up</h1>
                    <div className="login__social-networks my-2">
                        <div>
                            <i class="fab fa-facebook-f"></i>
                        </div>
                        <div>
                            <i class="fab fa-google"></i>
                        </div>
                        
                    </div>
                    <div className="login__form">
                        <span className="text-center my-2">Or Log in with your personal email and password!</span>
                        <form className="login__form-container" autoComplete="off">
                        <TextField
                            id="input-with-icon-textfield"
                            label="Email"
                            className="w-100"
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
                            className="mt-2 w-100"
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
            
        </div>
    </div>
    )
}
