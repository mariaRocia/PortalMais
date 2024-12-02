import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import React from "react";
import { format } from 'date-fns';
import {
    Typography,
    Box,
    Button
} from "@mui/material";

export default function NoticeShow({ notice }) {
    if (!notice) {
        return <div>Loading...</div>;
    }

    console.log('Notice:', notice);

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Vizualizar
                </h2>
            }
        >
            <Head title="Vizualizar" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <Box>
                                <Typography variant="h6" sx={{ marginBottom: 2 }}>
                                    Detalhes do Aviso
                                </Typography>
                                <Box sx={{ marginBottom: 2 }}>
                                    <Typography variant="body1"><strong>ID:</strong> {notice.id}</Typography>
                                    <Typography variant="body1"><strong>Título:</strong> {notice.title}</Typography>
                                    <Typography variant="body1"><strong>Descrição:</strong> {notice.description}</Typography>
                                    <Typography variant="body1"><strong>Autor</strong> {notice.author}</Typography>

                                    <Typography variant="body1"><strong>Publicado em:</strong> {format(new Date(notice.created_at), 'dd/MM/yyyy HH:mm')}</Typography>
                                    <Typography variant="body1"><strong>Atualizado em:</strong> {format(new Date(notice.updated_at), 'dd/MM/yyyy HH:mm')}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    <Link href={route('notices.index')}>
                                        <Button variant="outlined" sx={{ color: '#3182CE', borderColor: '#3182CE' }}>
                                            Voltar para a lista
                                        </Button>
                                    </Link>
                                    <Link href={route('notices.edit', { id: notice.id })}>
                                        <Button variant="outlined" sx={{ color: '#3182CE', borderColor: '#3182CE' }}>
                                            Editar
                                        </Button>
                                    </Link>
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
