
import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import {MenuList} from '../data/Data'

const Menu = () => {
  return (
      <Layout>
        
        <Box sx={{display:'flex', justifyContent:'center'}}>
          {MenuList.map( (menu)=> (

            <Card sx={{ maxHeight: '670px', display: 'flex', m:3}}>
              <CardActionArea>
                <CardMedia component={'img'} src={menu.image}>

                </CardMedia>

                <CardContent>
                  <Typography variant='h6'>
                    {menu.name}
                  </Typography>

                </CardContent>
              </CardActionArea>
            </Card>

          )

          )}

        </Box>

        </Layout>
  )
}

export default Menu