import { Link, Stack, Typography } from '@mui/material'
import React from 'react'

export default function MuiLinks() {
  return (
    <Stack spacing={2} direction={'row'} m={4}>
        <Link href='#' variant='body2'>
            Link
        </Link>
        <Typography variant='h6'>
            {/* variant can be added using Typography or dorectly on Link */}
            {/* underline can be none or hover */}
            <Link href='#' color={'secondary'} underline='hover'>
                Secondary
            </Link>
        </Typography>
    </Stack>
  )
}
