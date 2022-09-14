import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Box,
  Tabs,
  Tab,
} from "@mui/material";
import DomainIcon from "@mui/icons-material/Domain";
import styled from "@emotion/styled";
import Drawers from "./Drawers";
import { Link } from "react-router-dom";
import { useState } from "react";

const StyledTab = styled(Tab)({
  color: "#dbc895",
  textDecoration: 'none',
});

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Styledlogin = styled(Button)({
  background: "#dbc895",
  width: "7rem",
  height: "2rem",
  justifySelf: "flex-end",
  color: "black",
  marginBottom: "5px",
});

const NavBar = () => {
  const [value, setValue] = useState(0)

  return (
    <AppBar sx={{ background: "#222222" }} position="static">
      <StyledToolbar>
        <Drawers />
        <Link style={{ textDecoration: "none" }} to="/home">
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

        <Tabs
          ml="auto"
          mr="auto"
          sx={{ display: { xs: "none", sm: "block" } }}
          value={value}
          onChange={(e, value) =>{setValue(value)}}
          textColor='#fff'
          TabIndicatorProps={{
            sx: { backgroundColor: "white"}
          }}
          aria-label="secondary tabs example"
        >
          <StyledTab key='Home' label='Home' component={Link} to='home'/>
          <StyledTab key='Properties' label='Properties' component={Link} to='properties'/>
          <StyledTab key='About Us' label='About Us' component={Link} to='AboutUs'/>
          <StyledTab key='Contact Us' label='Contact Us' component={Link} to='/ContactUs'/>
        </Tabs>

        {/* <Stack
          ml="auto"
          mr="auto"
          direction="row"
          spacing={3}
          sx={{ display: { xs: "none", sm: "block" } }}
          // value={value}
          // onChange={(e,value)=>{setValue(value)}}
        >
          <Link style={{ textDecoration: "none" }} to="/home">
            <StyledButton>Home</StyledButton>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/properties">
            <StyledButton>Properties</StyledButton>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/AboutUs">
            <StyledButton>About Us</StyledButton>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/ContactUs">
            <StyledButton>Contact Us</StyledButton>
          </Link>
        </Stack> */}

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Link style={{ textDecoration: "none" }} to="/login">
            <Styledlogin>Login</Styledlogin>
          </Link>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default NavBar;
