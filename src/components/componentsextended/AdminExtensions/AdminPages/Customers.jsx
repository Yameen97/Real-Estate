import { Box, Typography } from '@mui/material'
import React from 'react'

const Customers = () => {
  return (
    // Header
    <Box
      pt={2}
      sx={{ height: "65px", paddingLeft: { xs: "20px", sm: "32px" } }}
    >
      <Typography variant="h4" fontWeight="bold">
        Customers
      </Typography>
    </Box>
  )
}

export default Customers