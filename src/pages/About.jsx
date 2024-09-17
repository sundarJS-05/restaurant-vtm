
import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
       <Layout>
          <Box sx={{
            mx:3, my:8
          }}>
            <Typography variant='h5'>

              <h3>Info. about the website </h3>

              <br></br>

              <p>
              This is a fictional restaurant webiste created by me; This does not resprsent any real foods OR/& reataurants.
              </p>
            
            </Typography>

         </Box>
        </Layout>
  )
}

export default About