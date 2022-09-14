import { Box, Button, Stack, styled } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { StyledOuterAlignedStack } from "../../../UI/StacknBoxes";
import { StyledHeading } from "../../../UI/TypoGraphies";
import OfferCardCreator from "./OfferCardCreator";

const StyledFiltersButton = styled(Button)({
  height: "2.7rem",
  width: "18rem",
  color: "black",
});

const OfferCards = () => {
  return (
    <StyledOuterAlignedStack alignItems="center">
      <Stack flex={1} mt={2}>
        <StyledHeading>Featured Properties</StyledHeading>
      </Stack>

      <Box flex={11} sx={{ width: { sm: "90%", md: "56rem" } }}>
        <OfferCardCreator />
      </Box>

      {/* <StyledButtonBox> */}
      <Box mt={8} mb={3}>
      <Link
        style={{ textDecoration: "none", height: "2.7rem", width: "18rem" }}
        to="/properties"
      >
        <StyledFiltersButton variant="outlined">Show More</StyledFiltersButton>
      </Link>
      {/* </StyledButtonBox> */}
      </Box>
    </StyledOuterAlignedStack>
  );
};

export default OfferCards;
