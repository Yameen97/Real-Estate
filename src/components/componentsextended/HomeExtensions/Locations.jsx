import { Box, Stack, styled } from "@mui/material";
import React from "react";
import { StyledOuterAlignedStack, StyledImageBox } from "../../UI/StacknBoxes";
import { StyledHeading } from "../../UI/TypoGraphies";

const StyledLocationBox = styled(Box)(({ theme }) => ({
  height: "150px",
  backgroundRepeat: "no-repeat",
  borderRadius: "4px",
  boxShadow: "10",
  backgroundSize: "150%",
  backgroundPosition: "center",
  marginBottom: "6%",
  transition: 'all 0.5s ease-out',

  '&:hover': {
    backgroundSize: "180%",

  },
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
    height: "200px",
    marginBottom: "0",
  },
}));

const Locations = () => {
  const image =
    "https://i.pinimg.com/736x/2e/c4/ca/2ec4ca6880388b8bd39e73859051db21.jpg";

  return (
    <StyledOuterAlignedStack sx={{ height: { xs: "725px", sm: "515px" } }}>
      <Stack xs={1} p={1}>
        <StyledHeading>FIND OUR PROPERTIES IN THESE CITIES</StyledHeading>
      </Stack>

      <Stack xs={11} spacing={"2%"} pt={2}>
        <StyledImageBox>
          <StyledLocationBox
            mr={"2%"}
            sx={{
              backgroundImage: `url(${image})`,
              width: { xs: "100%", sm: "30%" },
            }}
          ></StyledLocationBox>

          <StyledLocationBox
            sx={{
              backgroundImage: `url(${image})`,
              width: { xs: "100%", sm: "65%" },
            }}
          ></StyledLocationBox>
        </StyledImageBox>

        <StyledImageBox>
          <StyledLocationBox
            mr={"2%"}
            sx={{
              backgroundImage: `url(${image})`,
              width: { xs: "100%", sm: "65%" },
            }}
          ></StyledLocationBox>

          <StyledLocationBox
            sx={{
              backgroundImage: `url(${image})`,
              width: { xs: "100%", sm: "30%" },
            }}
          ></StyledLocationBox>
        </StyledImageBox>
      </Stack>
    </StyledOuterAlignedStack>
  );
};

export default Locations;
