import { Drafts, Inbox, Mail } from '@mui/icons-material'
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

export default function MuiList() {
    return (
        <Box sx={{ width: '400px', bgcolor: '#efefef' }}>
            <List>
                {/* disablePadding helps to remove padding which is there due to ListItemButton */}
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <Mail />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary='List Item 1' secondary="secondary text" />
                    </ListItemButton>
                    {/* ListItemIcon helps to add icon before list text */}
                </ListItem>
                {/* Add divider to divide the lists present  */}
                <Divider/>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <Drafts />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary='List Item 2' secondary="secondary text" />
                    </ListItemButton>
                </ListItem>
                <Divider/>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <Inbox />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary='List Item 3' secondary="secondary text" />
                    </ListItemButton>
                </ListItem>
            </List>

        </Box>
    )
}
