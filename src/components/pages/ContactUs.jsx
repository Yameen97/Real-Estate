import { Box } from '@mui/material'
import React from 'react'
import ContactsCard from '../componentsextended/ContactsExtensions/ContactsCard'
import HeaderContacts from '../componentsextended/ContactsExtensions/HeaderContacts'

const ContactUs = () => {
  return (
    <Box sx={{background:'#fff'}}>
      <HeaderContacts />
      <ContactsCard/>
    </Box>
  )
}

export default ContactUs