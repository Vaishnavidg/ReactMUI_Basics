import { CopyAll, Edit, Print, Share } from '@mui/icons-material'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import React from 'react'

// It is more suitable for mobile or tablet
// When pressed the component displays a few options in the form of a speed dial
export default function MuiSpeedDial() {
  return (
    <SpeedDial ariaLabel='Navigation speed dial'
    sx={{position:'absolute',bottom:16,right:16}}
    // icon when the speeddial is open
    icon={<SpeedDialIcon openIcon={<Edit/>}/>}>
        <SpeedDialAction icon={<CopyAll/>} tooltipTitle='Copy' tooltipOpen/>
        <SpeedDialAction icon={<Print/>} tooltipTitle='Print'/>
        <SpeedDialAction icon={<Share/>} tooltipTitle='Share'/>
    </SpeedDial>
  )
}
