import { Face } from '@mui/icons-material'
import { Avatar, Chip, Stack } from '@mui/material'
import React, { useState } from 'react'

export default function MuiChip() {
    const [chips, setChips] = useState<string[]>(['chip1', 'chip2', 'chip3'])
    const handleDelete = (chiptoDelete: string) => {
        setChips(chips => chips.filter(chip => chip !== chiptoDelete))
    }
    return (
        <Stack spacing={2}>
            <Stack direction={'row'} spacing={2}>
                {/* color:default primary,success,secondary,error,info,warning */}
                {/* size: medium, small */}
                {/* variant: filled, outlined */}
                {/* icon: icon, none */}
                <Chip label='Chip' color='primary' size='small' />
                <Chip label='Chip' variant='outlined' color='primary' size='small' />
                <Chip label='Chip' variant='outlined' icon={<Face />} />
                <Chip label='Chip' variant='outlined' avatar={<Avatar>V</Avatar>} />
                <Chip label='Chip' onClick={() => alert('clicked')} onDelete={() => alert('deleted')} />
            </Stack>
            <Stack direction={'row'} spacing={2}>
                {chips.map((chip) => (
                    <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
                )
                )}
            </Stack>

        </Stack>
    )
}
