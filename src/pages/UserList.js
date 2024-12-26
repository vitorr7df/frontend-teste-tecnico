import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { Container, Typography, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import { toast } from 'react-toastify';

const UsersList = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await api.get('/users');
            setUsers(response.data);
        } catch (error) {
            toast.error('Erro ao carregar usuários.');
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Lista de Usuários
            </Typography>
            <Button variant="contained" color="primary" style={{ marginBottom: '16px' }}>
                Adicionar Usuário
            </Button>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Nome</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Ações</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <TableRow key={user.id}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>
                                <Button color="secondary">Editar</Button>
                                <Button color="error">Excluir</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </Container>
    );
};

export default UsersList;
