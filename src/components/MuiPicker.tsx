import { FilledTextFieldProps, OutlinedTextFieldProps, Stack, StandardTextFieldProps, TextField, TextFieldVariants } from '@mui/material'
import { DatePicker, DateTimePicker, TimePicker } from '@mui/x-date-pickers'
import React, { useState } from 'react'
import { JSX } from 'react/jsx-runtime';

export default function MuiPicker() {
    const[selectedDate,setSelectedDate]=useState<Date|null>(null);
    const[selectedTime,setSelectedTime]=useState<Date|null>(null);
    const[selectedDateTime,setSelectedDateTime]=useState<Date|null>(null);
  console.log(selectedTime);
    return (
   <Stack spacing={4} sx={{width:'250px'}}>
    <DatePicker
    label='Date Picker'
    value={selectedDate}
    onChange={(newValue)=>{
        setSelectedDate(newValue);
    }}/>
    <TimePicker
    label='Time Picker'
    value={selectedTime}
    onChange={(newValue)=>{
        setSelectedTime(newValue);
    }}/>
    <DateTimePicker
    label='Date and Time Picker'
    value={selectedDateTime}
    onChange={(newValue)=>{
        setSelectedDateTime(newValue);
    }}/>
   </Stack>
  )
}