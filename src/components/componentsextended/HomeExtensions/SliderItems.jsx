import React from "react";
import {
  Box,
  styled,
  Typography,
  Stack,
  Button,
  Divider,
  TextField,
  MenuItem,
  Select,
} from "@mui/material";
import { Link } from "react-router-dom";

const StyledBox = styled(Box)(({ theme }) => ({
  color: "white",
  height: "80px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  flexDirection: "column",
  paddingLeft: "12%",
  background: "linearGradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
  [theme.breakpoints.up("sm")]: {
    height: "180px",
  },
}));

const StyledParentSearch = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: "2%",
  color: "white",
  height: "130px",
  [theme.breakpoints.up("sm")]: {
    height: "270px",
  },
}));

const StyledSearchButton = styled(Button)({
  background: "#dbc895",
  justifySelf: "flex-end",
  width: "8rem",
  color: "black",
  boxShadow: "30",
});

const StyledRentSale = styled(Button)({
  background: "#dbc895",
  color: "black",
  borderTopRightRadius: "5px",
  borderBottomRightRadius: "2px",
  borderTopLeftRadius: "5px",
  borderBottomLeftRadius: "2px",
});

const StyleInputBox = styled(Box)({
  width: "65%",
  marginLeft: "2%",
  height: "auto",
  border: "3px solid #dbc895",
  borderRadius: "10px",
  padding: 10,
});

const StyledTextField = styled(TextField)({
  background: "#3A3B3C",
  input: {
    "&::placeholder": {
      color: "white",
    },
  },
});

const StyledStack = styled(Stack)({
  position: "absolute",
  zIndex: "2",
  width: "92%",
});

const StyledHeadingSmall = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  fontWeight: "80",
  [theme.breakpoints.up("sm")]: {
    fontSize: "20px",
  },
}));

const StyledHeadingLarge = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  [theme.breakpoints.up("sm")]: {
    fontSize: "35px",
  },
}));

const SliderItems = () => {
  return (
    <StyledStack>
      {/* Home page heading */}

      <StyledBox>
        <StyledHeadingSmall>THE BEST WAY</StyledHeadingSmall>

        <StyledHeadingLarge>TO FIND YOUR PERFECT HOME.</StyledHeadingLarge>
      </StyledBox>

      {/* Below heading suff */}

      <StyledParentSearch sx={{ display: { xs: "none", sm: "flex" } }}>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ marginRight: "40%" }}
        >
          <StyledRentSale>Rent</StyledRentSale>
          <StyledRentSale>Sale</StyledRentSale>
        </Stack>

        {/* Home page search box */}
        <StyleInputBox>
          <Stack spacing={1}>
            <Box>
              <Select
                sx={{ ml: "14px", width: "95%", background: "#3A3B3C" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                required
                size="small"
              >
                <MenuItem>Commercial</MenuItem>
                <MenuItem>House</MenuItem>
              </Select>
            </Box>

            <Stack direction="row" pl={2} spacing={1.3}>
              <StyledTextField
                sx={{ width: "33.8%" }}
                id="standard-helpertext"
                variant="outlined"
                placeholder="Location"
                type="text"
                size="small"
                required
                disableunderline="true"
              />

              <StyledTextField
                sx={{ width: "30%", color: "white" }}
                id="standard-helpertext"
                variant="outlined"
                placeholder="Date of birth"
                required
                type="date"
                size="small"
                disableunderline="true"
              />
              <StyledTextField
                sx={{ width: "30%" }}
                id="standard-helpertext"
                variant="outlined"
                placeholder="Number of adults"
                type="number"
                required
                size="small"
                disableunderline="true"
              />
            </Stack>
          </Stack>
        </StyleInputBox>

        {/* Search Button */}
        <Link
          style={{
            textDecoration: "none",
            marginLeft: "auto",
            marginRight: "20%",
            marginTop: "2%",
          }}
          to="/properties"
        >
          <StyledSearchButton>Search</StyledSearchButton>
        </Link>
      </StyledParentSearch>

      {/* Smaller screen search component */}

      <StyledParentSearch
        sx={{
          marginTop: "37%",
          marginLeft: "4.5%",
          position: "absolute",
          zIndex: "2",
          width: "92%",
          display: { xs: "flex", sm: "none" },
        }}
      >
        <Link style={{ textDecoration: "none" }} to="/properties">
          <StyledSearchButton>Search</StyledSearchButton>
        </Link>
      </StyledParentSearch>
    </StyledStack>
  );
};

export default SliderItems;
