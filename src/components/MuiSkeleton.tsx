import { Avatar, Box, Skeleton, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

export default function MuiSkeleton() {
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        })
    },[])
    return (
        //    <Stack spacing={1} width={'250px'}>
        //     <Skeleton variant='text' animation={false}/>
        //     <Skeleton variant='circular' width={40} height={40} animation='wave'/>
        //     <Skeleton variant='rectangular' width={250} height={125} animation='wave'/>
        //    </Stack>
        <Box sx={{ width: '250px' }}>
            {loading ? (
                <Skeleton variant='rectangular' width={256} height={144}
                    animation='wave' />
            ) : (
                <img src='https://source.unsplash.com/random/256x144' alt='skeleton'
                    width={256} height={144} />
            )}
            <Stack direction={'row'} spacing={1} sx={{ width: '100%', marginTop: '12px' }}>
                {loading ? (
                    <Skeleton variant='circular' width={40} height={40} animation='wave' />
                ) : (
                    <Avatar>V</Avatar>
                )}
            </Stack>
            <Stack sx={{ width: '80%' }}>
                {loading ? (
                    <><Typography variant='body1'>
                        <Skeleton variant='text' animation='wave' width={'100%'} />
                    </Typography><Typography variant='body2'>
                            <Skeleton variant='text' animation='wave' width={'100%'} />
                        </Typography></>
                ) :
                    <Typography variant='body1'>React MUI Typography</Typography>}
            </Stack>
        </Box>
    )
}
