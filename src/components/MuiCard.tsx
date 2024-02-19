import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export default function MuiCard() {
  return (
  <Box width={'300px'}>
    <Card>
        <CardMedia
        component={'img'}
        height={'140'}
        image='https://source.unsplash.com/random'
        alt='unsplash image'
        />

        
        <CardContent>
            <Typography variant='h5' component={'div'} gutterBottom>
    React
            </Typography>
            <Typography variant='body2' color='text.secondary'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ipsa eum rem, fugit error facilis voluptates cupiditate qui delectus temporibus vero est iure! Illum nisi delectus voluptatum rerum quam minima!

            </Typography>
        </CardContent>
        <CardActions>
            <Button size='small'>Share</Button>
            <Button size='small'>Link</Button>
        </CardActions>
    </Card>
  </Box>
  )
}
