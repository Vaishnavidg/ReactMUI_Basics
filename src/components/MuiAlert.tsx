import { Check } from '@mui/icons-material'
import { Alert, AlertTitle, Button, Stack } from '@mui/material'
import React from 'react'

export default function MuiAlert() {
    return (
        <Stack spacing={2}>
            {/* severity:seriousness, severity shows the seriousness of the Alert 
- it is of four types: error, warning, info, success */}
            <Alert severity='error'>Error</Alert>
            <Alert severity='warning'>Warning</Alert>
            <Alert severity='info'>INFO</Alert>
            <Alert severity='success'>Success</Alert>

            {/* There are two types of variants : filled and outlined   */}
            <Alert variant='outlined' severity='error'>Error</Alert>
            <Alert variant='outlined' severity='warning'>Warning</Alert>
            <Alert variant='outlined' severity='info'>INFO</Alert>
            <Alert variant='outlined' severity='success'>Success</Alert>
{/* add close button */}
            <Alert variant='filled' severity='error' onClose={()=>alert("close clicked")}>
                <AlertTitle>
                    ERROR</AlertTitle>Error</Alert>
            <Alert variant='filled' severity='warning'>  <AlertTitle>
                WARNING</AlertTitle>Warning</Alert>
            <Alert variant='filled' severity='info'> <AlertTitle>
                INFO</AlertTitle>INFO</Alert>
                {/* can add icons  */}
            <Alert variant='filled' severity='success' icon={<Check fontSize='inherit'/>} 
            // add button using action prop
            action={
                <Button color='inherit' size='small'>
                    UNDO
                </Button>
            } >
                 
            <AlertTitle>
                SUCCESS</AlertTitle>Success</Alert>
        </Stack>
    )
}
