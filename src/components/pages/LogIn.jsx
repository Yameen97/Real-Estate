import React from "react";
import {
  Button,
  CardActions,
  CardContent,
  TextField,
  Typography,
  Box,
  Card,
  styled
} from "@mui/material";
import { Link } from "react-router-dom";

const StyledBox = styled(Box)({
    height: "629px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#D3D3D3",
  });

  const StyledCard = styled(Card)({
    borderRadius: "6px",
    border: "3px solid #f1f1f1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#FFFFFF",
  });

const LogIn = () => {
  return (
    <StyledBox>
      <StyledCard sx={{ height: "350px", width:{xs:"300px", sm:"350px"} }}>
        <CardContent>
          <Typography variant="h3" p={3}>
            LOG IN
          </Typography>
          <TextField
            sx={{ width: "250px", marginBottom: "10px" }}
            id="email-input"
            label="E-mail"
            type="email"
          />
          <TextField
            sx={{ width: "250px" }}
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
        </CardContent>
        <CardActions>
          <Link style={{ textDecoration: "none" }} to="/admin">
            <Button
              sx={{ width: "250px", height: "38px", marginBottom: "5px" }}
              variant="contained"
              type="submit"
            >
              Log In
            </Button>
          </Link>
        </CardActions>
      </StyledCard>
    </StyledBox>
  );
};

export default LogIn;