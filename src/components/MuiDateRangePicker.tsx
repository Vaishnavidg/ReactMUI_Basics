import { Box } from '@mui/material'
import React, { useState } from 'react'
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { DateRange } from '@mui/x-date-pickers-pro';

export default function MuiDateRangePicker() {
    const[value,setValue]=useState<DateRange<Date>>([null,null]);
 console.log(value);
    return (
   <Box width={'500px'}>
    <DateRangePicker localeText={{ start: 'Check-in', end: 'Check-out' }} 
    value={value}
    onChange={(newValue)=>{
        setValue(newValue)
    }}/>
   </Box>
  )
}
