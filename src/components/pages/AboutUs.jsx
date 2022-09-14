import { Box } from '@mui/material'
import React from 'react'
import AboutCard from '../componentsextended/AboutExtensions/AboutCard'
import HeaderAbout from '../componentsextended/AboutExtensions/HeaderAbout'
import Team from '../componentsextended/AboutExtensions/EmployeesExtension/Team'

const AboutUs = () => {
  return (
    <Box sx={{background:'#fff'}}>
      <HeaderAbout/>
      <AboutCard/>
      <Team/>
    </Box>
  )
}

export default AboutUs