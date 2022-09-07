import React from 'react'
import classes from '../../CssFiles/OfferHover.module.css'
import { Box, Typography } from "@mui/material";

const OfferCardCreator = (props) => {
  return (
    <Box sx={{paddingRight:{xs:'22px', sm:'26px'}}} pb={4} className={classes.container}>
          <Box className={classes.box}>
            <Box className={classes.imgBox}>
              {props.children}
            </Box>
            <Box className={classes.content}>
              <Typography variant='h6'>Karan</Typography>
              <Typography variant='p'>Designer</Typography>
            </Box>
          </Box>
        </Box>
)}

export default OfferCardCreator