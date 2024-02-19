import React from 'react'
import { Typography } from '@mui/material';

export default function MuiTypography() {
  return (
    <div>
        {/* Typography for headings  */}
      <Typography variant='h1'>H1 Heading </Typography>
      <Typography variant='h2'>H2 Heading </Typography>
      <Typography variant='h3'>H3 Heading </Typography>
      <Typography variant='h4' component='h1' gutterBottom>H4 Heading </Typography>
      <Typography variant='h5'>H5 Heading </Typography>
      <Typography variant='h6'>H6 Heading </Typography>

      {/* Subtitle Typography */}
      <Typography variant='subtitle1'>Subtitle1</Typography>
      <Typography variant='subtitle2'>Subtitle2</Typography>

        {/* Body Typography */}
      <Typography variant='body1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id consequatur eos eveniet voluptatem adipisci, sapiente quibusdam at similique ducimus libero voluptates praesentium perferendis minus a, ad repudiandae nihil! Quisquam, laudantium.</Typography>
      <Typography variant='body2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id culpa nihil, ratione vero eligendi adipisci odio hic perferendis amet cupiditate quibusdam quisquam labore molestiae temporibus distinctio non corporis repudiandae! Accusantium?</Typography>


    </div>
  )
}
