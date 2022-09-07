import {  Box, Stack, styled } from "@mui/material";
import React from "react";
import { StyledOuterHomeStack } from "../../UI/StacknBoxes";
import { StyledHeading, StyledBoxText } from '../../UI/TypoGraphies';

const StyledStackInner = styled(Stack)(({ theme }) =>({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  textAlign:'center',
  [theme.breakpoints.up("sm")]: {
    width: "50%",
    textAlign:'none'
  },

}));

const StyledBox = styled(Box)({
    height: "65%",
    backgroundRepeat: "no-repeat",
    borderRadius: '3px',
    boxShadow: '10',
    backgroundSize:  "100%",
    backgroundPosition: 'center'
  });

const RandomDetails = () => {
    const image= "https://i.pinimg.com/736x/2e/c4/ca/2ec4ca6880388b8bd39e73859051db21.jpg";

  return (
    <StyledOuterHomeStack  direction='row' sx={{background: "#D3D3D3"}}>
      <StyledStackInner sx={{ paddingLeft: { xs: "none", sm: "6%"}}}>
        <StyledHeading pb={2}>
            Newly launched campaign in whitby agencies
        </StyledHeading>

        <StyledBoxText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, ut iure! Similique laborum, obcaecati esse deleniti ipsa accusamus cupiditate ea sint ullam qui delectus odio est et mollitia expedita minima.
        </StyledBoxText>


      </StyledStackInner>
      
      <StyledStackInner px={3} sx={{display:{xs:'none', sm:'block'}, paddingTop:{sm:'10%', md:'6%'}}}>
        <StyledBox
        sx={{
          position:'relative',
          backgroundImage: `url(${image})`}}>
        </StyledBox>
        </StyledStackInner>
       
    </StyledOuterHomeStack>
  );
};

export default RandomDetails;
