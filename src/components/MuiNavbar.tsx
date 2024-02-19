import { CatchingPokemon, KeyboardArrowDown } from '@mui/icons-material'
import { AppBar, Button, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function MuiNavbar() {
    const [anchorEl,setAnchorEl]=useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
   const handleClick=(event :React.MouseEvent<HTMLButtonElement>)=>{
    setAnchorEl(event.currentTarget)
   }
   const handleClose=()=>{
    setAnchorEl(null);
   }
    return (
        // The App Bar displays information and actions relating to the current screen.
        <AppBar position='static'>
            <Toolbar>
                {/* used for the logo of the Site */}
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CatchingPokemon />
                </IconButton>
                {/* Name of the site or title */}
                <Typography variant='h5' component={'div'} sx={{flexGrow:1}}>
                    POKEMONAPP
                </Typography>
                {/* side links which is present on right side of navbar */}
                <Stack direction={'row'} spacing={2}>
                    <Button color='inherit'>Feature</Button>
                    <Button color='inherit'>Pricing</Button>
                    <Button color='inherit' id='resources-button' 
                    onClick={handleClick}
                    aria-controls={open?'resources-menu':undefined}
                    aria-haspopup='true'
                    aria-expanded={open?'true':undefined} endIcon={<KeyboardArrowDown/>}>Resouces</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Login</Button>
                </Stack>
                <Menu id ='resouces-menu' anchorEl={anchorEl} open={open}
                MenuListProps={{
                    "aria-labelledby":"resources-button"
                }}
                onClose={handleClose}
                // go to PopOver on ReactMUI doc for getting perfect anchorOrigin and transformOrigin positions 
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'right'
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal:'right'
                }}>
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>

            </Toolbar>
        </AppBar>
    )
}
