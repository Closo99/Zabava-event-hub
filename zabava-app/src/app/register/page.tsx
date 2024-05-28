'use client'
import React, { useState } from 'react';
import { Button, FormControl, InputLabel, InputAdornment, IconButton, Input, Box, Link } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import './register.css';
import { useRouter } from 'next/navigation';
import PersonIcon from '@mui/icons-material/Person';
import Footer from '../components/Footer';

interface RegisterProps {
    onRegister: (fullname: string, username: string, password: string) => void;
}

const Register: React.FC<RegisterProps> = ({ onRegister }) => {
    const [fullname, setFullname] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleRegister = () => {
        // Aqui você pode realizar a autenticação, por exemplo, fazendo uma chamada de API
        if (password === confirmPassword) {
            onRegister(fullname, username, password);
        } else {
            // Exibir uma mensagem de erro sobre senhas não coincidentes
            alert('As senhas não coincidem.');
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const router = useRouter();

    return (
        <Box className='register-page-box'>
            <header className='go-back-header'>
                <Button className='go-back-button' variant='text' onClick={() => router.back()}><ArrowBackIosNewIcon color='disabled' />Voltar</Button>
            </header>
            <div className='register-form'>
                <PersonIcon color='disabled' sx={{ fontSize: 100 }} />
                <Box className='form-container'>
                <FormControl className='fullname-box'>
                    <InputLabel htmlFor="standard-adornment-fullname">Nome Completo</InputLabel>
                    <Input
                        id="standard-adornment-fullname"
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                    />
                </FormControl>
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
                <FormControl className='confirm-password-box'>
                    <InputLabel htmlFor="standard-adornment-confirm-password">Confirmar Password</InputLabel>
                    <Input
                        id="standard-adornment-confirm-password"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle confirm password visibility"
                                    onClick={handleClickShowConfirmPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <Button className='register-button' variant="contained" onClick={handleRegister}>Registrar</Button>
                <div className='register-bottom-div'>
                    <p>Já possui uma conta na Zabava?</p><Link className='login-link' href="#" variant="body2">Login</Link>
                </div>
                </Box>
            </div>
            <Footer />
        </Box>
    );
};

export default Register;