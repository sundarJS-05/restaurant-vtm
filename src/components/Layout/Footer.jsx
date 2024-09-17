
import React from 'react'
import { Box, Typography } from '@mui/material'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export const Footer = () => {
  return (
    <>
      <Box sx={{textAlign:'center', bgcolor:'black', color:'whitesmoke'}}>

        <Box sx={{mx: 2, my: 2}}>
            {/* icon */}
            <GitHubIcon/>
            <InstagramIcon/>
            <YouTubeIcon/>

        </Box>

        <Typography variant='h5'>
            Website created by - Sundararajan

        </Typography>
        
        </Box>
    </>

  )
}
