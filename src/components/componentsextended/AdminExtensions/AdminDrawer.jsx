import {Box} from '@mui/material'
import LogoSvg from './LogoSvg'
import AccordionData from './SidebarExtension/AccordionData'

const AdminDrawer = () => {


  return (
    <Box sx={{height:{xs:'1800px', sm:'1200px'} , width:'300px', background:'#222222', display:{xs:'none', sm:'none', md:'block'}}}>
      <LogoSvg/>
      <AccordionData/>
      
    </Box>
  )
}

export default AdminDrawer