import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Stack, Typography } from '@mui/material';

import Sidebar  from './Sidebar';
import Videos from './Videos';

import { fetchfromAPI } from '../utils/fetchfromAPI';

const Feed = () => {

  const [selectedcategory, setselectedcategory] = useState('New');
  const [videos, setvideos] = useState([])

  useEffect(() => {
    fetchfromAPI(`search?part=snippet&q=${selectedcategory}`)
    .then((data) => setvideos(data.items))
    //now instead of sending array lets send real videos 

  }, [selectedcategory])


  return (
    <Stack sx ={{flexDirection: {sx: 'column', md:'row'}}}>
      <Box sx ={{height: {sx:'auto', md:'99vh'}, borderRight:'1px solid #3d3d3d', p:{sx:0, md: 2}}}>
        <Sidebar selectedcategory={selectedcategory}
        setselectedcategory ={setselectedcategory} />
        <Typography className='copyright'
        variant='body2' sx={{mt: 1.5, color:'#fff'}}>
          Copyright 2023  jsm media
        </Typography>
      </Box>
      <Box p={2} sx={{overflow: 'auto', height:'90vh', flex:2}}>
        
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}} >

          {selectedcategory} <span style={{color: '#f31503'}}> videos</span>
          
        </Typography>

        {/* <Videos videos={[]} /> */}
        {/* //now instead of sending array lets send real videos  */}
        <Videos videos={videos} />

      </Box>
    </Stack>
    
  )
}

export default Feed
