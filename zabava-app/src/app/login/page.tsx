'use client'
import React, { useState } from 'react';
import { TextField, Button, FormControl, InputLabel, InputAdornment, IconButton, Input, Box, Link } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './login.css';
import {useRouter } from 'next/navigation'

interface LoginProps {
    onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = () => {
        // Aqui você pode realizar a autenticação, por exemplo, fazendo uma chamada de API
        onLogin(username, password);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const router = useRouter();

    return (
        <Box className='login-page-box'>
            <header>
                <Button className='go-back-button' variant='text' onClick={() => {router.push('/')}}><ArrowBackIosNewIcon />Voltar</Button>
            </header>
            <Box className='form-container'>
            <FormControl className='username-box'>
                <InputLabel htmlFor="standard-adornment-username">Username</InputLabel>
                <Input
                    id="standard-adornment-username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </FormControl>
            <FormControl className='password-box'>
                <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                <Input
                    id="standard-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <Link className='forgot-link' href="#" variant="body2">Esqueceu a senha?</Link>
            <Button className='login-button' variant="contained" onClick={handleLogin}>Login</Button>
            <div className='login-bottom-div'>
                <p>Ainda não possui cadastro na Zabava?</p><Link className='register-link' href="#" variant="body2">Cadastrar</Link>
            </div>
            </Box>
        </Box>
    );
};

export default Login;
