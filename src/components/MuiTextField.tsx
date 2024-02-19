import { InputAdornment, Stack, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function MuiTextField() {
    const[value,setValue]=useState("");
    return (
        <Stack spacing={4}>
            {/* there are three different variants in TextField */}
            <Stack spacing={4} direction={'row'}>
                <TextField label="name" variant='outlined' />
                <TextField label="name" variant='filled' />
                <TextField label="name" variant='standard' />
            </Stack>
                {/* Different Form Props */}
            <Stack spacing={4} direction={'row'}>
                <TextField label="Required" variant='outlined' required />
                <TextField label="Disable" variant='outlined' disabled />
                <TextField label="Read Only" variant='outlined' InputProps={{readOnly:true}}/>
                <TextField label="Password" variant='outlined' type='password' />
                <TextField label="Number" variant='outlined' size='small' color='secondary' type='number'/>
                <TextField label="Search" variant='outlined' size='small' color='secondary' type='search' />
                <TextField label="Helper Text" variant='outlined'helperText="don't share password" />

            </Stack>
            
            <Stack spacing={4} direction={'row'}>
                {/* handle error */}
                <TextField label="Form Input" variant='outlined' error={!value} helperText={!value?"Required":"Enter password"} value={value} onChange={(e)=>setValue(e.target.value)} />
                <TextField label="Error" value={'outlined'} error />
              
            </Stack>
            {/* use of InputAdornment */}
            <Stack spacing={4} direction={'row'}>
                <TextField label="Number" variant='outlined' InputProps={{startAdornment:<InputAdornment position='start'>$</InputAdornment>}} />
                <TextField label="Weight" variant='outlined' InputProps={{endAdornment: <InputAdornment position='end'>Kg</InputAdornment>}}/>
                <TextField label="Read only" InputProps={{readOnly:true}} />
            </Stack>
        </Stack>
    )
}
