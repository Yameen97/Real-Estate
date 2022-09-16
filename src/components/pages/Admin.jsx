import { Box, styled } from '@mui/material'
import React from 'react'
import AdminDrawer from '../componentsextended/AdminExtensions/AdminDrawer'
import AdminPanel from '../componentsextended/AdminExtensions/AdminPanel'

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  // [theme.breakpoints.up("sm")]: {
  //   display: "flex",
  //   flexDirection: "row",
  // },
}));

const Admin = () => {
  return (
    <StyledBox style={{background: '#fff'}}>
        <Box flex={3}>
          <AdminDrawer/>
        </Box>
        <Box flex={9}>
          <AdminPanel/>
        </Box>
    </StyledBox>
  )
}

export default Admin