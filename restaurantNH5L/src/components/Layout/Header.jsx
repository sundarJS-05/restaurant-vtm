
import React, { useState } from 'react'
import { AppBar, Box,Divider,Drawer,IconButton,Toolbar,Typography } from '@mui/material'
import RiceBowlTwoToneIcon from '@mui/icons-material/RiceBowlTwoTone';
import {Link, NavLink}  from 'react-router-dom'
import '../../styles/HeaderStyles.css'
import MenuBookIcon from '@mui/icons-material/MenuBook';


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  // handle menu click
  let handleDraerToggle = ()=>{
    setMobileOpen(!mobileOpen)
  }

  // menu drawer toggle function

  let drawerFn = ()=> (
    <Box onclick={handleDraerToggle} sx={{textAlign: 'center'}}>

      <Typography component={'div'} color='goldenrod' variant='h5' sx={{flexGrow: 1}}>
          <RiceBowlTwoToneIcon/>
          Restaurant-vtm
        </Typography>


        <ul className='mobile-navigation'>

          <li>
            <NavLink activeClassName='active' to={'/'}>Home</NavLink>
          </li>

          <li>
            <NavLink to={'/about'}>About</NavLink>
          </li>

          <li>
            <NavLink to={'/contact'}>Contact</NavLink>
          </li>

          <li>
            <NavLink to={'/menu'}>Menu</NavLink>
          </li>

        </ul>


    </Box>
  )



  return (
    <>
    <Box>
      <AppBar className='navigation-menu' sx= {{bgcolor:'black'}}>
        <Toolbar className='p-3 m-2'> 

          <IconButton color='inherit' 
          aria-label='open drawer' 
          edge='start' 
          sx={{mr:2 , display:{sm:'none'}}}
          onClick={handleDraerToggle}
          >
            <MenuBookIcon/>

          </IconButton>

        <Typography component={'div'} color='goldenrod' variant='h5' sx={{flexGrow: 1}}>
          <RiceBowlTwoToneIcon/>
          Restaurant5HL
        </Typography>

        <Divider/>

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

      <Box component={'nav'}>
        <Drawer 
        variant='temporary'
        open={mobileOpen}
        onClose={handleDraerToggle}
        sx={{display:{xs:'block', sm:'none', width:'300px'}}}
        >
          </Drawer>

      </Box>

      <Toolbar/>

      </Box>
    </>
  )
}

export default Header