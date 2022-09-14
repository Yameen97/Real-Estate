import { Box, styled } from "@mui/material";
import React, { useState } from "react";
import FilterButtons, { FilterLargeButtons } from "../componentsextended/PropertiesExtensions/FilterButtons";
import HeaderProperties from "../componentsextended/PropertiesExtensions/HeaderProperties";
import Results from "../componentsextended/PropertiesExtensions/Results";
import SearchFilter from "../componentsextended/PropertiesExtensions/SearchFilter";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
    flexDirection: "row",
  },
}));

const StyledCardBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginLeft: '-20px',
  marginTop:'-60px',
  width: '105%',
  [theme.breakpoints.up("sm")]: {
    margin: '0',
    width: '35%'
  },
}));

const Properties = () => {
  const [filter, setfilter] = useState(true);

  const filterHandler = () => {
    setfilter(!filter);
  };

  return (
    <Box sx={{background:'#fff'}}>
      <HeaderProperties />

      {/* Small screen filter button */}
      
      <FilterButtons click={filterHandler}/>

      <StyledBox>
        <StyledCardBox
          flex={3}
        >
        
        {/* Large screen filter button */}
          
          <FilterLargeButtons click={filterHandler}/>

          {filter && <SearchFilter />}
          
          
        </StyledCardBox>
        

        <Results />

      </StyledBox>
    </Box>
  );
};

export default Properties;
