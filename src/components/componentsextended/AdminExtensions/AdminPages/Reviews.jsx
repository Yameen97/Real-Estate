import { Box, Typography } from '@mui/material'
import React from 'react'

const Reviews = () => {
  return (
    // Header
    <Box
      pt={2}
      sx={{ height: "65px", paddingLeft: { xs: "20px", sm: "32px" } }}
    >
      <Typography variant="h4" fontWeight="bold">
        Reviews
      </Typography>
    </Box>
  )
}

export default Reviews