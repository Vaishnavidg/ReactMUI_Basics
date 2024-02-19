import { Menu, MenuOpenOutlined } from '@mui/icons-material';
import { Box, Drawer, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
//  The navigation drawers (or "sidebars") provide ergonomic access to destinations 
//   in a site or app functionality such as switching accounts.
export default function MuiDrawer() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return (
        <>
            <IconButton size='large' edge='start' color='inherit' aria-label='logo' onClick={() => setIsDrawerOpen(true)}>
                <Menu />
            </IconButton>
            {/* there are four anchor - left,right,top,bottom */}
            <Drawer anchor='top' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} >
                <Box p={2} width={'250px'} textAlign={'center'} role='presentation'>
                    <Typography variant='h6' component={'div'}>
                        Side Pannel
                    </Typography>
                </Box>

            </Drawer>
        </>
    )
}
