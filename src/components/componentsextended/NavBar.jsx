import { AppBar, IconButton, Toolbar, Button, Stack, Box } from "@mui/material";
import DomainIcon from "@mui/icons-material/Domain";
import styled from "@emotion/styled";
import Drawers from "./Drawers";
import { Link } from "react-router-dom";

const StyledButton = styled(Button)({
  fontWeight: "10",
  fontSize: "0.9rem",
  color: "#dbc895",
"&:active": {
  color: "white",
  borderBottom: '1px solid #dbc895'
}});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Styledlogin = styled(Button)({
  background: "#dbc895",
  width: "7rem",
  height: '2rem',
  justifySelf: "flex-end",
  color: "black",
  marginBottom:'5px'
});

const NavBar = () => {
  return (
    <AppBar sx={{ background: "#222222"}} position= 'static'>
      <StyledToolbar>

        <Drawers />
        <Link style={{ textDecoration: "none"}} to="/home">
          <IconButton
            sx={{ display: { xs: "none", sm: "block" }, color: "white" }}
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <DomainIcon />
          </IconButton>
        </Link>


        <Stack
          ml='auto'
          mr='auto'
          direction="row"
          spacing={3}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Link style={{ textDecoration: "none"}} to="/home">
            <StyledButton>Home</StyledButton>
          </Link>
          <Link style={{ textDecoration: "none"}} to="/properties">
            <StyledButton>Properties</StyledButton>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/AboutUs">
            <StyledButton>About Us</StyledButton>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/ContactUs">
            <StyledButton>Contact Us</StyledButton>
          </Link>
        </Stack>
        <Box sx={{display: { xs: "none", sm: "block" }}}>
        <Link style={{ textDecoration: "none"}} to="/login">
          <Styledlogin>Login</Styledlogin>
        </Link>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
