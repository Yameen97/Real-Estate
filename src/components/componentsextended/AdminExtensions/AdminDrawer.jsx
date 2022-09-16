import { Accordion, AccordionDetails, AccordionSummary, Box, Button, styled, Typography } from '@mui/material'
import React, { useState } from 'react'
import LogoSvg from './LogoSvg'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const StyledButton= styled(Button)({
  width:'100%',
  background:'#444444',
  color:'white',
  borderBottom:'1px solid #222222',
  borderRadius:'0'
});

const StyledAccordion= styled(Accordion)({
  background:'#343434',
  color:'white',
  opacity:'0.8',
});

const AdminDrawer = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (isExpanded, panel) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box sx={{background:'#222222'}}>
      <LogoSvg/>

      <StyledAccordion 
      TransitionProps={{ unmountOnExit: true }}
       expanded={expanded === 'panel1'} onChange={(e, isExpanded)=>handleChange(isExpanded, 'panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white', background:'#343434'}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>Personal data</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0 !important'}}>
          <StyledButton>Button 1</StyledButton>
          <StyledButton>Button 2</StyledButton>
          <StyledButton>Button 3</StyledButton>
          <StyledButton>Button 4</StyledButton>
        </AccordionDetails>
      </StyledAccordion>

      <StyledAccordion 
      TransitionProps={{ unmountOnExit: true }}
       expanded={expanded === 'panel2'} onChange={(e, isExpanded)=>handleChange(isExpanded, 'panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white', background:'#343434'}}/>}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ flexShrink: 0 }}>Other data</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{padding:'0 !important'}}>
          <StyledButton>Button 1</StyledButton>

        </AccordionDetails>
      </StyledAccordion>
    </Box>
  )
}

export default AdminDrawer