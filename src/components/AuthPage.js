import React, { useState } from 'react';
import LoginForm from './LoginForm';  // Importando o componente de login
import SignupForm from './SignupForm';  // Importando o componente de cadastro
import { Button, Box, Typography } from '@mui/material';

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);  // Estado para alternar entre login e cadastro

    const toggleForm = () => {
        setIsLogin(!isLogin);  // Função que alterna entre as telas
    };

    return (
        <Box sx={{ textAlign: 'center', marginTop: 5 }}>
            <Typography variant="h4" gutterBottom>
                {isLogin ? 'Login' : 'Create an Account'}  {/* Título dinâmico */}
            </Typography>
            {isLogin ? <LoginForm /> : <SignupForm />}  {/* Exibe o formulário de login ou cadastro */}
            <Button onClick={toggleForm} sx={{ mt: 2 }}>
                {isLogin ? 'Don’t have an account? Sign up' : 'Already have an account? Login'}  {/* Botão para alternar */}
            </Button>
        </Box>
    );
};

export default AuthPage;
