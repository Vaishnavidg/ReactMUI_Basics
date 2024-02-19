import React, { MouseEventHandler, ReactEventHandler, useState } from 'react'
import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material'
import AdbIcon from '@mui/icons-material/Adb';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

export default function MuiButton() {
    const [formats,setFormats] = useState<String[]>([]);
    const [format,setFormat] =  useState<String | null>(null);
    console.log(formats)
    console.log(format)
    const handleFormats=(_events: React.MouseEvent<HTMLElement>,updatedFormats: string[])=>{
        setFormats(updatedFormats);
    }
    const handleFormat=(_events: React.MouseEvent<HTMLElement>,updatedFormat: string | null)=>{
        setFormat(updatedFormat);
    }
    return (
        // use of Stack
        <Stack spacing={2}>
            {/* Buttons with different variant */}
            <Stack direction={'row'} spacing={2}>
                <Button variant='text'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>

            {/* Buttons with different colors */}
            <Stack direction={'row'} spacing={2}>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='success'>Success</Button>
                <Button variant='contained' color='info'>Info</Button>
            </Stack>

            {/* Buttons with diiferent sizes */}
            <Stack display={'block'} direction={'row'} spacing={2}>
                <Button variant='contained' size='small'>Small</Button>
                <Button variant='contained' size='medium'>Medium</Button>
                <Button variant='contained' size='large'>Large</Button>
            </Stack>

            {/* Buttons with using icons in different styles */}
            <Stack display={'block'} direction={'row'} spacing={2}>
                {/* put icons on start or end of text */}
                {/* use disableElevation for disble the shadow of contained button */}
                {/* use disableRipple for disable the hover of button */}
                <Button variant='contained' startIcon={<AdbIcon />} disableElevation>AdbIcon</Button>
                <Button variant='contained' endIcon={<AdbIcon />} disableRipple onClick={() => alert("clicked")}>AdbIcon</Button>
                {/* used for just using icon */}
                <IconButton color='success' aria-label='icon'>
                    <AdbIcon />
                </IconButton>
            </Stack>

            {/* normal button ,disable and button with link */}
            <Stack direction={'row'}>
                <Button>Normal</Button>
                <Button disabled >Disable Button</Button>
                <Button href='www.google.com'>Link</Button>
            </Stack>

            {/* Button-Group  */}
            <ButtonGroup variant='contained' arial-label='buttons'>
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>
            <ButtonGroup variant='contained' arial-label='buttons' color='secondary'>
                <Button>Left</Button>
                <Button>Center</Button>
                <Button>Right</Button>
            </ButtonGroup>

            {/* Toggle Button */}
           
            <Stack direction={'row'}>
                {/* choose  multiple options */}
                <ToggleButtonGroup value={formats} onChange={handleFormats}>
                    <ToggleButton value={'bold'} aria-label='bold'><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value={'italic'} aria-label='italic'><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value={'underline'} aria-label='underline'><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>

            <Stack direction={'row'}>
                {/* choose one options only -> use exclusive prop  and can make vertical using orientation */}
                <ToggleButtonGroup value={format} onChange={handleFormat} exclusive orientation='vertical'>
                    <ToggleButton value={'bold'} aria-label='bold'><FormatBoldIcon/></ToggleButton>
                    <ToggleButton value={'italic'} aria-label='italic'><FormatItalicIcon/></ToggleButton>
                    <ToggleButton value={'underline'} aria-label='underline'><FormatUnderlinedIcon/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </Stack>
    )
}
