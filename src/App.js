import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import { Box } from "@mui/material";

import {Navbar, Feed, Videodetail, Channeldetail, Searchfeed} from './components'



const App = () => {
  return (
    <BrowserRouter>

    <Box sx={{backgroundColor: '#000'}}>
        <Navbar />

        <Routes>
            <Route path ='/' exact element={<Feed />} />
            <Route path ='/video/:id' exact element={<Videodetail />} />
            <Route path ='/channel/:id' exact element={<Channeldetail />} />
            <Route path ='/search/:searchitem' exact element={<Searchfeed />} />
            <Route path ='/' exact element={<Feed />} />
        </Routes>

    </Box>
    
    </BrowserRouter>
  )
}

export default App
