import { TextField, Box, Typography } from '@mui/material'
import React from 'react'
import { Controller } from 'react-hook-form'

const CustomTextField = ({ label, name, control, errors, type }) => {
    return (
        <>
            <Controller name={name} control={control}
                render={({ field }) => (
                    <TextField {...field} label={label} name={name} variant='outlined' type={type}/>
                )} />
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                mt: '6px'
            }}>
                <Typography color='error.main' variant='span' fontSize='14px'>
                    {errors[name]?.message}
                </Typography>
            </Box>
        </>
    )
}

export default CustomTextField