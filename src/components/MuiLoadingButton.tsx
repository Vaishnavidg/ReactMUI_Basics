import { Save } from '@mui/icons-material'
import { LoadingButton } from '@mui/lab'
import { Stack } from '@mui/material'
import React from 'react'

export default function MuiLoadingButton() {
  return (
   <Stack spacing={2} direction={'row'}>
    <LoadingButton variant='outlined'>Submit</LoadingButton>
    <LoadingButton loading variant='outlined' >Submit</LoadingButton>
    <LoadingButton variant='outlined' loadingIndicator='Loading..'>Fetch Data</LoadingButton>
    <LoadingButton loading variant='outlined'loadingIndicator='Loading..'>Fetch Data</LoadingButton>
   <LoadingButton variant='outlined' 
   loadingPosition='start' 
   startIcon={<Save/>}>Save</LoadingButton>
    <LoadingButton loading variant='outlined' 
   loadingPosition='start' 
   startIcon={<Save/>}>Save</LoadingButton>
   </Stack>
  )
}
