import {
  Drawer,
  ListItem,
  List,
  IconButton,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { Fragment, useState } from "react";
import { Home, Search, Menu, Info, Mail, Login } from "@mui/icons-material";
import { Link } from "react-router-dom";


const StyledButton = styled(Button)({
  color: "white",
  '&:isactive': {
    color: '#dbc895',
    borderBottom: '1px solid #dbc895',
  },
});

const Drawers = () => {
  const [openDrawer, setOpenDrawer] = useState(false);


  return (
    <Fragment>
      <Drawer
        PaperProps={{
          sx: {
            width: "60%",
            textAlign: "center",
            paddingTop: "10%",
            background: "#222222",
            color: "white",
          },
        }}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Typography variant="h4" py={2} sx={{ color: "#dbc895" }}>
          Site Title
        </Typography>
        <Typography variant="h4" py={2} sx={{ color: "#dbc895" }}>
          Site Title
        </Typography>
        <List>


          <ListItem>
            <Home />
            <Link style={{ textDecoration: "none" }} to="/home">
              <StyledButton autoFocus={true} onClick={() => setOpenDrawer(false)}>Home</StyledButton>
            </Link>
          </ListItem>

          <ListItem>
            <Login />
            <Link style={{ textDecoration: "none" }} to="/login">
              <StyledButton autoFocus={true} onClick={() => setOpenDrawer(false)}>Login</StyledButton>
            </Link>
          </ListItem>

          <ListItem>
            <Search />
            <Link style={{ textDecoration: "none" }} to="/properties">
              <Button sx={{ color: "white" }} onClick={() => setOpenDrawer(false)}>Properties</Button>
            </Link>
          </ListItem>

          <ListItem>
            <Mail />
            <Link style={{ textDecoration: "none" }} to="/ContactUs">
              <Button sx={{ color: "white" }} onClick={() => setOpenDrawer(false)}>Contact Us</Button>
            </Link>
          </ListItem>

          <ListItem>
            <Info />
            <Link style={{ textDecoration: "none" }} to="/AboutUs">
              <Button sx={{ color: "white" }} onClick={() => setOpenDrawer(false)}>About Us</Button>
            </Link>
          </ListItem>

        </List>
      </Drawer>

      <IconButton
        sx={{ display: { xs: "block", sm: "none", color: "white" } }}
        onClick={() => setOpenDrawer(!openDrawer)}
      >
        <Menu />
      </IconButton>

    </Fragment>
  );
};

export default Drawers;
