import { Box, FormControlLabel, Switch } from '@mui/material'
import React, { useState } from 'react'

export default function MuiSwitch() {
  const[value,setValue]=useState(false);
  console.log(value);
  const handleChange=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setValue(!value);
  }
  return (
    <Box>
      <FormControlLabel label='dark mode' control={<Switch value={value} onChange={handleChange}/>}/>
    </Box>
  )
}
