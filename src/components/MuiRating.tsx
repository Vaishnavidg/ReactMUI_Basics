import { Favorite, FavoriteBorderOutlined } from '@mui/icons-material';
import { Box, Rating } from '@mui/material'
import React, { useState } from 'react'

export default function MuiRating() {
    const[value,setValue]=useState<number| null>(null);
    console.log(value);
    const handleChange=(_event: React.ChangeEvent<{}>,newValue: number|null)=>{
        setValue(newValue);
    }
  return (
    <Box>
        <Rating value={value} onChange={handleChange} 
        // extra props can be used
        precision={0.5} 
        size='large'
        icon={<Favorite fontSize='inherit' color='error'/>}
        emptyIcon={<FavoriteBorderOutlined fontSize='inherit'/>}
        highlightSelectedOnly //for highlighting only selected one. It can be used for emojies only
        // readOnly -> can be used for only read.
         />
    </Box>
  )
}
