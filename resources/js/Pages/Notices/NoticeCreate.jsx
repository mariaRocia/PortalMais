import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import React from "react";
import {
    Typography,
    Box,
    Button,
    TextField
} from "@mui/material";

export default function NoticeCreate() {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('notices.store'));
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Criar Aviso
                </h2>
            }
        >
            <Head title="Criar Aviso" />

            <div className="py-12">
                <div className="mx-auto max-w-4xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-gray-100 shadow-md sm:rounded-lg dark:bg-gray-900">
                        <div className="p-8">
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 3,
                                    backgroundColor: '#1A202C',
                                    padding: 4,
                                    borderRadius: 2
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: '#63B3ED',
                                        fontWeight: 'bold',
                                        marginBottom: 2
                                    }}
                                >
                                    Novo Aviso
                                </Typography>
                                <TextField
                                    label="Título"
                                    variant="outlined"
                                    fullWidth
                                    value={data.title}
                                    onChange={(e) => setData('title', e.target.value)}
                                    error={!!errors.title}
                                    helperText={errors.title}
                                    sx={{
                                        backgroundColor: '#2D3748',
                                        borderRadius: 1,
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': { borderColor: '#63B3ED' },
                                            '&:hover fieldset': { borderColor: '#90CDF4' },
                                            '&.Mui-focused fieldset': { borderColor: '#63B3ED' },
                                        },
                                        '& .MuiInputLabel-root': { color: '#A0AEC0' },
                                        '& .MuiInputBase-input': { color: '#E2E8F0' },
                                    }}
                                />
                                <TextField
                                    label="Descrição"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={4}
                                    value={data.description}
                                    onChange={(e) => setData('description', e.target.value)}
                                    error={!!errors.description}
                                    helperText={errors.description}
                                    sx={{
                                        backgroundColor: '#2D3748',
                                        borderRadius: 1,
                                        '& .MuiOutlinedInput-root': {
                                            '& fieldset': { borderColor: '#63B3ED' },
                                            '&:hover fieldset': { borderColor: '#90CDF4' },
                                            '&.Mui-focused fieldset': { borderColor: '#63B3ED' },
                                        },
                                        '& .MuiInputLabel-root': { color: '#A0AEC0' },
                                        '& .MuiInputBase-input': { color: '#E2E8F0' },
                                    }}
                                />
                                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                                    <Link href={route('notices.index')}>
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                color: '#63B3ED',
                                                borderColor: '#63B3ED',
                                                '&:hover': {
                                                    backgroundColor: '#3182CE',
                                                    color: '#FFFFFF',
                                                },
                                            }}
                                        >
                                            Voltar para a lista
                                        </Button>
                                    </Link>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        disabled={processing}
                                        sx={{
                                            backgroundColor: '#3182CE',
                                            color: '#FFFFFF',
                                            '&:hover': { backgroundColor: '#2B6CB0' },
                                        }}
                                    >
                                        Criar
                                    </Button>
                                </Box>
                            </Box>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
