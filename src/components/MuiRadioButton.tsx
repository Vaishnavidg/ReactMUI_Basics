import { Box, FormControl, FormControlLabel, FormHelperText, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useState } from 'react'

export default function MuiRadioButton() {
    const[value, setValue] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value);
    }
  return (
   <Box>
    <FormControl>
        <FormLabel>Years of Experience</FormLabel>
        <RadioGroup name='job-experience-group' aria-labelledby='job-experience' value={value} onChange={handleChange}>
            <FormControlLabel control={<Radio/>} label='0-2' value={'0-2'}></FormControlLabel>
            <FormControlLabel control={<Radio/>} label='3-5' value={'3-5'}></FormControlLabel>
            <FormControlLabel control={<Radio/>} label='6-10' value={'6-10'}></FormControlLabel>
        </RadioGroup>
    </FormControl>
    {/* used in row */}
    <FormControl>
        <FormLabel>Years of Experience</FormLabel>
        <RadioGroup name='job-experience-group' aria-labelledby='job-experience' value={value} onChange={handleChange} row  color='secondary'>
            <FormControlLabel control={<Radio/>} label='0-2' value={'0-2'}></FormControlLabel>
            <FormControlLabel control={<Radio/>} label='3-5' value={'3-5'}></FormControlLabel>
            <FormControlLabel control={<Radio/>} label='6-10' value={'6-10'}></FormControlLabel>
        </RadioGroup>
        <FormHelperText>Select proper Years</FormHelperText>
    </FormControl>
   </Box>
  )
}
