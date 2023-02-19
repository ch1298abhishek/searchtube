import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import {Videos, Channelcard} from './';
import { fetchfromAPI } from '../utils/fetchfromAPI';

const Channeldetail = () => {
  const [channeldetail, setchanneldetail] = useState(null);
  const [videos, setvideos] = useState([])
  const {id} = useParams();

  // console.log(Channeldetail) will get a object which provides subscribers and all

  useEffect(() => {
    fetchfromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setchanneldetail(data?.items[0]))

    fetchfromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setvideos(data?.items))

  } , [id])



  return (
    <Box minHeight='95vh'>
      <Box>
        <div style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)',
          zIndex: 10,
          height: '300px'
        }}>
           
        </div>
        <Channelcard channeldetail={channeldetail} marginTop='-93px'/>
      </Box>

      <Box display='flex' p='2'>
        <Box sx={{mr: {sm: '100px'}}} />
          <Videos videos={videos} />
          
      </Box>

    </Box>
    
  )
}

export default Channeldetail
