
import React, { useState } from 'react'
import { AppBar, Box,IconButton,Toolbar,Typography } from '@mui/material'
import RiceBowlTwoToneIcon from '@mui/icons-material/RiceBowlTwoTone';
import {Link}  from 'react-router-dom'
import '../../styles/HeaderStyles.css'
import MenuBookIcon from '@mui/icons-material/MenuBook';


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  return (
    <>
    <Box/>
      <AppBar className='navigation-menu' sx= {{bgcolor:'black'}}>
        <Toolbar className='p-3 m-2'> 

          <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr:2 , display:{sm:'none'}}}>
            <MenuBookIcon/>

          </IconButton>

        <Typography component={'div'} color='goldenrod' variant='h5' sx={{flexGrow: 1}}>
          <RiceBowlTwoToneIcon/>
          Restaurant5HL
        </Typography>

        <Box sx={{display:{ xs:'none', sm:'block'}}}>
        <ul className='navigation-menu'>

          <li>
            <Link to={'/'}>Home</Link>
          </li>

          <li>
            <Link to={'/about'}>About</Link>
          </li>

          <li>
            <Link to={'/contact'}>Contact</Link>
          </li>

          <li>
            <Link to={'/menu'}>Menu</Link>
          </li>

        </ul>

        </Box>

        </Toolbar>

      </AppBar>

    </>
  )
}

export default Header