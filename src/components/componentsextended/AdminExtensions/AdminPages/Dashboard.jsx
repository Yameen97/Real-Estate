import { Box, Card, Stack, styled, Typography } from "@mui/material";
import React from "react";

const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  padding:0,
  boxShadow:'1px 1px 10px  darkgrey'
});

const Dashboard = () => {
  return (
    // Header
    <Stack sx={{width:'100%', height:'100%', backgroundColor:'#fff'}}>
    <Box
      flex={1}
      pt={2}
      sx={{ height: "65px", paddingLeft: { xs: "20px", sm: "32px" } }}
    >
      <Typography variant="h4" fontWeight="bold">
        Dashboard
      </Typography>
    </Box>

    {/* Data Stacks */}

    <Stack flex={11} mt={1} >

    <Box flex={3} mx={2} sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}}}>
        <Stack flex={7} spacing={2}>

            <Stack flex={9} direction='row' spacing={2} >
              <StyledCard sx={{width:'32%', height:{xs:'100px', sm:'100%'}, borderRadius:'20px'}}>
                zzz
              </StyledCard>

              <StyledCard sx={{width:'32%',borderRadius:'20px'}}>
                zzz
              </StyledCard>

              <StyledCard sx={{width:'32%', borderRadius:'20px'}}>
                zzz
              </StyledCard>

            </Stack>


            <Stack flex={3}>
              <StyledCard sx={{width:'100%', height:{xs:'60px', sm:'100%'}, borderRadius:'20px'}}>
                zzz
              </StyledCard>
            </Stack>

        </Stack>

        <Stack flex={5} sx={{marginLeft:{xs:'none', sm:'16px'}, marginTop:{xs:'16px', sm:'0px'}}}>

        <StyledCard sx={{height:{xs:'220px', sm:'100%'}, width:'100%', borderRadius:'20px'}}>
                zzz
        </StyledCard>
        </Stack>

      {/* </Stack> */}
      </Box>

      <Box flex={9} mx={2} sx={{display:'flex', flexDirection:{xs:'column', sm:'row'}}}>

      <Box flex={3} mt={3}  sx={{display:'flex', flexDirection:{xs:'row', sm:'column'}, marginRight:{xs:'0px', sm:'16px'}}}>
        
      <StyledCard sx={{height:{xs:'180px', sm:'200px'}, width:{xs:'50%', sm:'100%'}, borderRadius:'20px'}}>
                zzz
        </StyledCard>

        <Stack sx={{ width:{xs:'50%', sm:'100%'}, marginTop:{xs:'none', sm:'16px'}, marginLeft:{xs:'8px', sm:'0px'}}}>
        <StyledCard sx={{height:{xs:'180px', sm:'200px'}, borderRadius:'20px'}}>
                zzz
        </StyledCard>
        </Stack>

      </Box>

      <Stack flex={5} mt={3} spacing={2} sx={{marginRight:{xs:'0px', sm:'16px'}}}>
      <StyledCard sx={{height:{xs:'220px', sm:'260px'}, width:'100%', borderRadius:'20px'}}>
                zzz
        </StyledCard>

        <StyledCard sx={{height:{xs:'220px', sm:'260px'}, width:'100%', borderRadius:'20px'}}>
                zzz
        </StyledCard>
      </Stack>

      <Box flex={3} my={3}  sx={{marginRight:{xs:'0px', sm:'16px'}, display:'flex', flexDirection:{xs:'row', sm:'column'}}}>
      <StyledCard sx={{height:{xs:'280px',sm:'350px'}, width:'100%', marginBottom:'16px', borderRadius:'20px'}}>
                zzz
        </StyledCard>

        <Stack sx={{width:'100%', marginLeft:{xs:'8px', sm:'0px'}}}>
        <StyledCard sx={{height:{xs:'280px',sm:'350px'}, borderRadius:'20px'}}>
                zzz
        </StyledCard>
        </Stack>
      </Box>

      </Box>
    </Stack>
    </Stack>
    
  );
};

export default Dashboard;
