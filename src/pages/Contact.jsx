
import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const Contact = () => {
  return (
       <Layout>
         <Box sx={{
            mx:3, my:8
          }}>
            <Typography variant='h5'>

              <h3> Contact details. </h3>

              <br></br>

              <p>
              Random contact details;  since this does NOT repsresent a real restaurant
              </p>
            
            </Typography>

         </Box>

        </Layout>
  )
}

export default Contact