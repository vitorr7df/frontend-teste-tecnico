import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify'; // Importando o ToastContainer e a função toast
import api from '../services/api';
import 'react-toastify/dist/ReactToastify.css'; // Estilos necessários para o Toastify

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validação das senhas
        if (password !== confirmPassword) {
            toast.error("Passwords don't match"); // Exibindo erro com Toast
            return;
        }

        try {
            const response = await api.post('/users', {
                name,
                email,
                password, // Enviando a senha também (certifique-se de criptografar a senha no backend!)
            });
            toast.success("Usuário cadastrado com sucesso!"); // Exibindo sucesso com Toast
        } catch (err) {
            toast.error('Erro ao cadastrar usuário. Tente novamente.'); // Exibindo erro com Toast
        }
    };

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 3,
                    borderRadius: 2,
                    boxShadow: 3,
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Signup
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <TextField
                        label="Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <TextField
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        sx={{ mt: 2 }}
                    >
                        Sign Up
                    </Button>
                </form>
            </Box>

            {/* Adicionando o ToastContainer, que vai gerenciar as notificações */}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Container>
    );
};

export default SignupForm;
