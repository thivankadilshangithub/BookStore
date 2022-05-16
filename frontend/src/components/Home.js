import { Box, Button } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';
import "./Book/Book.css";

const Home = () => {
  
  return (
    <div className='Imagebody'>
      <Box display="flex" flexDirection="column" alignItems="center" className='btn'>
    <Button className="styl" LinkComponent={Link} to="/books" variant='' color='warning' sx={{marginTop:12,fontSize:'40px',fontFamily:"revert"}} >
      Viwe All Products HERE
    </Button>
    <div style={{fontSize:"14px",marginTop:'10px',fontFamily:"inhetite"}}>
    {/* <p>Book reading was very interstiong thisgs.</p>
    <p style={{textAlign:"center"}}>Nothing the special thing...</p> */}
    </div>
   
      </Box>
    </div>
  )
}

export default Home;
