import React from 'react'
import { Box, AppBar, Typography, Toolbar, Button } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
     <Box>
      <AppBar component={'nav'} sx={ {bgcolor: 'black'} }>
        <Toolbar>
          
          <Typography color={'goldenrod'} component={'div'} variant='h6' sx={{flexGrow : 1}}>   
          <StorefrontIcon />
            My Restaurant 
          </Typography>  
          
          <Box>
          <Button variant="text" component={Link} to="/">
            Home
          </Button>

          <Button variant="text" component={Link} to="/about">
            About
          </Button>

          <Button variant="text" component={Link} to="/contact">
            Contact
          </Button>

          <Button variant="text" component={Link} to="/Menu">
            Menu 
          </Button>

          </Box>
          

      {/* <Box>
            <ul>

              <li>
                <Link to="/">Home</Link>
              </li>

              <li>
              <Link to='/about'>About</Link>
              </li>
              
              <li>
              <Link to='/contact'>Contact</Link>
              </li>

              <li>
              <Link to='/menu'>Menu</Link>  
              </li>

            </ul>
      </Box> */}
          
        </Toolbar>
      
      

      </AppBar>
     </Box>
    </>
  )
}
