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
  Tab,
  Tabs,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledBox = styled(Box)(({ theme }) => ({
  color: "white",
  height: "80px",
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-start",
  flexDirection: "column",
  paddingLeft: "2%",
  background: "linearGradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))",
  [theme.breakpoints.up("sm")]: {
    height: "180px",
  },
}));

const StyledParentSearch = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  color: "white",
  marginTop: "8px",
  [theme.breakpoints.up("sm")]: {
    height: "270px",
    paddingTop: "2%",
    marginTop: "none",
  },
}));

const StyledLowerItems = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("sm")]: {
    flexDirection: "row",
  },
}));

const StyledSearchButton = styled(Button)(({ theme }) => ({
  background: "#dbc895",
  justifySelf: "flex-end",
  width: "5rem",
  height: "2rem",
  color: "black",
  boxShadow: "30",
  [theme.breakpoints.up("sm")]: {
    width: "8rem",
    height: "2.3rem",
  },
}));

const StyledRentSale = styled(Tab)(({ theme }) => ({
  borderTopRightRadius: "5px",
  borderBottomRightRadius: "2px",
  borderTopLeftRadius: "5px",
  borderBottomLeftRadius: "2px",
  marginTop: "0",
  paddingTop: '-10px',
  [theme.breakpoints.up("sm")]: {
    marginTop: "6%",
  },
}));

const StyleInputBox = styled(Box)(({ theme }) => ({
  width: "240px",
  border: "3px solid #dbc895",
  height: "auto",
  [theme.breakpoints.up("sm")]: {
    width: "70%",
    marginLeft: "2%",
    borderRadius: "10px",
    padding: 10,
  },
}));

const StyledTextField = styled(TextField)({
  background: "#3A3B3C",
  input: {
    "&::placeholder": {
      color: "white",
    },
  },
});

const StyledStack = styled(Stack)(({ theme }) => ({
  position: "absolute",
  zIndex: "2",
  width: "82%",
  [theme.breakpoints.up("sm")]: {
    width: "92%",
  },
}));

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
  const [sale, setSale] = useState(false);
  const [type, setType] = useState("");
  const [saleOpened, setsaleOpened] = useState(true);
  const [rentOpened, setrentOpened] = useState(false);

  const focusHandler = () => {
    setSale(!sale);
  };

  const saleFocusHandler = () => {
    setsaleOpened(true);
    setrentOpened(false);
  };

  const rentFocusHandler = () => {
    setrentOpened(true);
    setsaleOpened(false);
  };

  return (
    <StyledStack>
      {/* Home page heading */}

      <StyledBox mb={0.5}>
        <StyledHeadingSmall>THE BEST WAY</StyledHeadingSmall>

        <StyledHeadingLarge>TO FIND YOUR PERFECT HOME.</StyledHeadingLarge>
      </StyledBox>

      {/* Below heading suff */}

      <StyledParentSearch>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ marginRight: { xs: "10%", sm: "30%", md: "40.8%" }}}
        >
          <Tabs
            value={sale}
            onChange={focusHandler}
            aria-label="simple tabs example"
          >

            <StyledRentSale
              sx={
                saleOpened
                  ? { background: "#dbc895", color: "black" }
                  : { color: "#dbc895", background: "#222222" }
              }
              onClick={saleFocusHandler}
              key="Sale"
              label="Sale"
            />
            <StyledRentSale
              sx={
                rentOpened
                ? { background: "#dbc895", color: "black" }
                  : { color: "#dbc895", background: "#222222" }
              }
              onClick={rentFocusHandler}
              key="Rent"
              label="Rent"
            />
          </Tabs>
        </Stack>

        {/* Home page search box */}
        <StyleInputBox>
          <Stack>
            <Box>
              {saleOpened && (
                <FormControl fullWidth>
                  <InputLabel
                    size="small"
                    id="demo-simple-select-label"
                    sx={{ color: "darkgrey" }}
                  >
                    Type
                  </InputLabel>
                  <Select
                    sx={{
                      ml: { xs: "6px", sm: "0" },
                      my: { xs: "1px", sm: "2px" },
                      width: { xs: "95.3%", sm: "100%" },
                      background: "#3A3B3C",
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={type}
                    onChange={(event) => {
                      setType(event.target.value);
                    }}
                    required
                    size="small"
                  >
                    <MenuItem value={"Commercial/Sale"}>
                      Commercial/Sale
                    </MenuItem>
                    <MenuItem value={"House/Sale"}>House/Sale</MenuItem>
                    <MenuItem value={"Farm/Sale"}>Farm House/Sale</MenuItem>
                    <MenuItem value={"Flat/Sale"}>Flat/Sale</MenuItem>
                  </Select>
                </FormControl>
              )}

              {rentOpened && (
                <FormControl fullWidth>
                  <InputLabel size="small" sx={{ color: "darkgrey" }}>
                    Type
                  </InputLabel>
                  <Select
                    sx={{
                      ml: { xs: "6px", sm: "0" },
                      my: { xs: "1px", sm: "2px" },
                      width: { xs: "95.3%", sm: "100%" },
                      background: "#3A3B3C",
                    }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    variant="outlined"
                    value={type}
                    onChange={(event) => {
                      setType(event.target.value);
                    }}
                    required
                    size="small"
                  >
                    <MenuItem value={"Commercial/Rent"}>
                      Commercial/Rent
                    </MenuItem>
                    <MenuItem value={"House/Rent"}>House/Rent</MenuItem>
                    <MenuItem value={"Farm/Rent"}>Farm House/Rent</MenuItem>
                    <MenuItem value={"Flat/Rent"}>Flat/Rent</MenuItem>
                  </Select>
                </FormControl>
              )}
            </Box>

            <StyledLowerItems>
              <StyledTextField
                sx={{
                  width: { xs: "95%", sm: "38.5%" },
                  my: { xs: "1px", sm: "none" },
                  marginRight: { xs: "none", sm: "6px" },
                }}
                id="standard-helpertext"
                variant="outlined"
                placeholder="Location"
                type="text"
                size="small"
                required
                disableunderline="true"
              />

              <StyledTextField
                sx={{
                  width: { xs: "95%", sm: "30%" },
                  my: { xs: "1px", sm: "none" },
                  color: "white",
                  marginRight: { xs: "none", sm: "6px" },
                }}
                id="standard-helpertext"
                variant="outlined"
                placeholder="No. of bedrooms"
                required
                type="number"
                size="small"
                disableunderline="true"
              />
              <StyledTextField
                sx={{
                  width: { xs: "95%", sm: "30%" },
                  my: { xs: "1px", sm: "none" },
                }}
                id="standard-helpertext"
                variant="outlined"
                placeholder="No. of bathrooms"
                type="number"
                required
                size="small"
                disableunderline="true"
              />
            </StyledLowerItems>
          </Stack>
        </StyleInputBox>

        {/* Search Button */}
        <Box pt={1} sx={{ paddingLeft: { xs: "none", sm: "24%", md:'40%' } }}>
          <Link
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "flex-end",
              marginLeft: '150px',
              marginTop: "2%",
            }}
            to="/properties"
          >
            <StyledSearchButton>Search</StyledSearchButton>
          </Link>
        </Box>
      </StyledParentSearch>
    </StyledStack>
  );
};

export default SliderItems;
