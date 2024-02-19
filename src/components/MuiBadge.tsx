import { Mail } from '@mui/icons-material'
import { Badge, Stack } from '@mui/material'
import React from 'react'

export default function MuiBadge() {
    // Badge generates a small badge to the top-right of its child(ren).
  return (
    <Stack spacing={2} direction={'row'}>
        <Badge badgeContent={5} color='primary'>
            <Mail/>
        </Badge>
       {/* showZero: it will show zero too */}
        <Badge badgeContent={0} color='success' showZero  >
            <Mail/>
        </Badge>
        {/* default maximum number is 99 to change it use max */}
        <Badge badgeContent={100} color='success'  max={999} >
            <Mail/>
        </Badge>
        <Badge variant='dot' color='primary' invisible={true}>
            <Mail/>
        </Badge>

    </Stack>
  )
}
