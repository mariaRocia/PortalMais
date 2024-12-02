import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import React from "react";
import { format } from 'date-fns';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Typography,
    Box,
    IconButton
} from "@mui/material";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import Pagination from '@/Components/Pagination';

export default function NoticesIndex({ notices }) {
    console.log('Notices:', notices);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Avisos
                </h2>
            }
        >
            <Head title="Avisos" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
                                <Typography variant="h6">
                                    Total de Registros: {notices.total}
                                </Typography>
                                <Link href={route('notices.create')}>
                                    <Button variant="contained" color="primary">
                                        Criar Aviso
                                    </Button>
                                </Link>
                            </Box>
                            <TableContainer component={Paper} sx={{ backgroundColor: '#E2E8F0' }}>
                                <Table>
                                    <TableHead>
                                        <TableRow sx={{ backgroundColor: '#4A5568' }}>
                                            <TableCell sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>#</TableCell>
                                            <TableCell sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>Título</TableCell>
                                            <TableCell sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>Publicação</TableCell>
                                            <TableCell sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>Autor</TableCell>
                                            <TableCell sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>Vizualizar</TableCell>
                                            <TableCell sx={{ color: '#FFFFFF', fontWeight: 'bold' }}>Editar</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {notices.data.map((notice) => (
                                            <TableRow
                                                key={notice.id}
                                                sx={{
                                                    '&:nth-of-type(odd)': { backgroundColor: '#CBD5E0' },
                                                    '&:nth-of-type(even)': { backgroundColor: '#E2E8F0' },
                                                }}
                                            >
                                                <TableCell sx={{ color: '#2D3748' }}>{notice.id}</TableCell>
                                                <TableCell sx={{ color: '#2D3748' }}>{notice.title}</TableCell>
                                                <TableCell sx={{ color: '#2D3748' }}>
                                                    {format(new Date(notice.created_at), 'dd/MM/yyyy HH:mm')}
                                                </TableCell>
                                                <TableCell sx={{ color: '#2D3748' }}>{notice.author}</TableCell>
                                                <TableCell>
                                                    <Link href={route('notices.show', { id: notice.id })}>
                                                        <IconButton sx={{ color: '#4A5568' }}>
                                                            <VisibilityIcon />
                                                        </IconButton>
                                                    </Link>
                                                </TableCell>
                                                <TableCell>
                                                    <Link href={route('notices.edit', { id: notice.id })}>
                                                        <IconButton sx={{ color: '#4A5568' }}>
                                                            <EditIcon />
                                                        </IconButton>
                                                    </Link>
                                                </TableCell>

                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            {/* Paginação */}
                            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
                                <Pagination links={notices.links} currentPage={notices.current_page} />
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
