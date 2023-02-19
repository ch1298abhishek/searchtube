import React from 'react';
import { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

// import Sidebar  from './Sidebar';
import Videos from './Videos';

import { fetchfromAPI } from '../utils/fetchfromAPI';

const Searchfeed = () => {

  // const [selectedcategory, setselectedcategory] = useState('New');
  const [videos, setvideos] = useState([]);
  const { searchitem } = useParams();


  useEffect(() => {
    fetchfromAPI(`search?part=snippet&q=${searchitem}`)
    .then((data) => setvideos(data.items))
    //now instead of sending array lets send real videos 

  }, [searchitem])


  return (
    <Box p={2} sx={{overflow: 'auto', height:'90vh', flex:2}} >
        
        <Typography variant='h4' fontWeight='bold' mb={2} sx={{color:'white'}} >

          search results for: <span style={{color: '#f31503'}}> {searchitem} </span> videos
          
        </Typography>

        
        <Videos videos={videos} />

      </Box>
    
  )
}

export default Searchfeed
