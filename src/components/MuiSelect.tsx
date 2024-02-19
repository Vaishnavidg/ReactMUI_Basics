import { Box, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'

export default function MuiSelect() {
    const [country, setCountry] = useState("");
    console.log(country);
    const handleCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value as string);
    }
    const [countries, setCountries] = useState<String[]>([]);
    console.log(countries);
    const handleCountries = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCountries(typeof value ==='string'? value.split(',') : value);
    }
    return (
        <>
        {/* Select anyone item from it */}
         <Box width='250px'>
            <TextField label='Select Country' select value={country} onChange={handleCountry} fullWidth >
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="US">USA</MenuItem>
                <MenuItem value="Aus">Austrilia</MenuItem>
            </TextField>
        </Box>
         {/* Select multiple items from it */}
         <Box width='250px'>
            <TextField label='Select Country' select value={countries} onChange={handleCountries} fullWidth SelectProps={{multiple:true}} >
                <MenuItem value="IN">India</MenuItem>
                <MenuItem value="US">USA</MenuItem>
                <MenuItem value="Aus">Austrilia</MenuItem>
            </TextField>
        </Box>
        </>
       
    )
}
