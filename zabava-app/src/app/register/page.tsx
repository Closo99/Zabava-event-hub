'use client';
import React, { useState } from 'react';
import { Button, FormControl, InputLabel, InputAdornment, IconButton, Input, Box, Typography } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import './register.css';
import ArrowBackIosNewIcon  from '@mui/icons-material/ArrowBackIosNew';
import Footer from '../components/Footer';

interface User {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const UserRegistration: React.FC = () => {
  const [user, setUser] = useState<User>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Partial<User>>({});

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const validate = () => {
    const newErrors: Partial<User> = {};
    if (!user.username) newErrors.username = 'O nome de usuário é obrigatório.';
    if (!user.email) newErrors.email = 'O email é obrigatório.';
    if (!user.password) newErrors.password = 'A senha é obrigatória.';
    if (user.password !== user.confirmPassword) newErrors.confirmPassword = 'As senhas não coincidem.';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validate();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form submitted:', user);
      // API call
    } else {
      setErrors(formErrors);
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <Box className='registration-page-box'>
      <header className='go-back-header'>
        <Button className='go-back-button' variant='text' onClick={() => router.back()}>
          <ArrowBackIosNewIcon color='disabled' />Voltar
        </Button>
      </header>
      <div className='register-form'>
        <PersonAddIcon color='disabled' sx={{ fontSize: 100 }} />
        <Box className='form-container'>
          <form onSubmit={handleSubmit}>
            <FormControl className='input-box' fullWidth margin="normal">
              <InputLabel htmlFor="standard-adornment-username">Nome de Usuário</InputLabel>
              <Input
                id="standard-adornment-username"
                name="username"
                value={user.username}
                onChange={handleChange}
              />
              {errors.username && <Typography className="error">{errors.username}</Typography>}
            </FormControl>
            <FormControl className='input-box' fullWidth margin="normal">
              <InputLabel htmlFor="standard-adornment-email">Email</InputLabel>
              <Input
                id="standard-adornment-email"
                name="email"
                value={user.email}
                onChange={handleChange}
              />
              {errors.email && <Typography className="error">{errors.email}</Typography>}
            </FormControl>
            <FormControl className='input-box' fullWidth margin="normal">
              <InputLabel htmlFor="standard-adornment-password">Senha</InputLabel>
              <Input
                id="standard-adornment-password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                value={user.password}
                onChange={handleChange}
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
              {errors.password && <Typography className="error">{errors.password}</Typography>}
            </FormControl>
            <FormControl className='input-box' fullWidth margin="normal">
              <InputLabel htmlFor="standard-adornment-confirm-password">Confirme a Senha</InputLabel>
              <Input
                id="standard-adornment-confirm-password"
                name="confirmPassword"
                type={showPassword ? 'text' : 'password'}
                value={user.confirmPassword}
                onChange={handleChange}
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
              {errors.confirmPassword && <Typography className="error">{errors.confirmPassword}</Typography>}
            </FormControl>
            <Button className='register-button' variant="contained" type="submit">Registrar</Button>
          </form>
        </Box>
      </div>
    </Box>
  );
};

export default UserRegistration;
