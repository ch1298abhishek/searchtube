import React from 'react';
import { Stack, Box } from '@mui/system';
import Videocard from './Videocard';
import Channelcard from './Channelcard';



const Videos = ({ videos, direction }) => {
  if(!videos?.length) return 'Loading...'

    // console.log(videos)
  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='start' 
    gap={2}>
       {videos.map((item, index) => (
        <Box key={index}>
            {item.id.videoId && <Videocard video={item} />}
            {item.id.channelId && <Channelcard channeldetail = {item}/>}

        </Box>
       ))}
    </Stack>
    
  )
}

export default Videos
