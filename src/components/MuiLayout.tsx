import { Box, Divider, Grid, Paper, Stack } from '@mui/material'
import React from 'react'

export default function MuiLayout() {
    return (
        //elevation helps to give the shadow
        <Paper sx={{padding: '42px'}} elevation={4}> 
        {/* Stack is a container component for arranging elements vertically or horizontally. */}
         <Stack sx={{border:'1px solid'}}
        direction={'row'}
        spacing={2}
        divider={<Divider orientation='vertical' flexItem/>}>
            {/* The Box component is a generic, theme-aware container with access to CSS utilities from MUI System. */}
            <Box component='span'>CodeEvolution</Box>
            <Box sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                height: '100px',
                padding: '16px',
                width:'100px',
                '&:hover': {
                    backgroundColor: 'primary.light',
                }
            }}>Learn React MUI</Box>
            <Box display={'flex'} 
            height={'100px'}
            width={'100px'}
            bgcolor={'success.light'}
            p={2}>TypeScript</Box>
        </Stack>
        {/* The Material Design responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts. */}
        <Grid container my={2} 
        // spacing={2} 
        rowSpacing={2} columnSpacing={1}>
            <Grid item xs={3}sm={6} ><Box bgcolor={'primary.light'} p={2}>
            Item1  </Box ></Grid>
            <Grid item xs={3}sm={6}><Box bgcolor={'primary.light'} p={2} >Item2</Box></Grid>
            <Grid item xs={3} sm={6}><Box bgcolor={'primary.light'} p={2}>Item3</Box></Grid>
            <Grid item xs={3} sm={6}><Box bgcolor={'primary.light'} p={2}>Item4</Box></Grid>
        </Grid>
        </Paper>
       
    )
}
