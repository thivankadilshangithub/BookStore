import React from 'react'
import { useState } from 'react';
import { AppBar, Tabs, Toolbar, Typography ,Tab } from '@mui/material';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [value , setValue] = useState();
    return (
        <div>
            <AppBar sx={{ backgroundColor: "#232F3D" }}  position="sticky">
                <Toolbar>
                    <NavLink style={{color:"white"}} to="/">
                    <Typography >
                        <LibraryBooksOutlinedIcon style={{height:"50px" , width:"35px"}} />
                        </Typography>
                        </NavLink>
                    <Tabs 
                    sx={{ml:'auto'}}
                    textColor='inherit' indicatorColor='secondary' value={value} onChange={(e,val)=>setValue(val)}>
                    <Tab sx={{mr:'1000px'}} textColor='inherit' indicatorColor='secondary' LinkComponent={NavLink} to="/" label="Home"/>
                    <Tab LinkComponent={NavLink} to="/add" label="Add Products" />
                    <Tab LinkComponent={NavLink} to="/books" label="Books" />
                    <Tab LinkComponent={NavLink} to="/about" label="About Us" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
 