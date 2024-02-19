import { Delete } from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'
import React from 'react'

export default function MuiTooltip() {
    return (
        // pops: placement ->helps to place the title, arrow makes the arrow towards the icon, enterDelay and leaveDelay is used for delay of ms during entering and leaving
        <Tooltip title='Delete' placement='top' arrow enterDelay={500} leaveDelay={200}>
            <IconButton>
                <Delete />
            </IconButton>
        </Tooltip>
    )
}
