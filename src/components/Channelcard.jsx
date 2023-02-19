import React from 'react';
import { Box, CardContent, CardMedia, Typography } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../utils/Constants';


const Channelcard = ({channeldetail, marginTop}) => {
    // console.log(channeldetail);
  return (
    <Box sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: {xs: '365px', md:'320px'},
        height:'326px',
        margin: 'auto',
        marginTop
    }}>
        <Link to={`/channel/${channeldetail?.id?.channelId}`}>
        <CardContent sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', 
            textAlign: 'center', color: '#fff'
        }}>
            <CardMedia image={channeldetail?.snippet?.thumbnails?.high?.url || demoProfilePicture} 
            alt={channeldetail?.snippet?.title} 
            sx = {{borderRadius: '50%', height: '180px', width: '180px'}}>

            </CardMedia>

            <Typography variant='h6'>
            {channeldetail?.snippet?.title}
            <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: '5px'}}></CheckCircle>

            </Typography>

            {channeldetail?.statistics?.subscriberCount && (
                <Typography>
                    {parseInt(channeldetail?.statistics?.subscriberCount).toLocaleString()} subscribers
                </Typography>
            )}
        </CardContent>
        
        </Link>
    </Box>

  )
}

export default Channelcard