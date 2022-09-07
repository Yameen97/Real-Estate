import { styled, Typography } from "@mui/material";

export const StyledHeading = styled(Typography)(({ theme }) =>({
    fontSize: "14px",
    fontWeight:'bold',
    [theme.breakpoints.up("sm")]: {
        fontSize: "25px",
    },
  }));

export const StyledBoxText = styled(Typography)(({ theme }) =>({
    paddingTop: '2px',
    paddingLeft: '12%',
    paddingRight: '12%',
    fontSize:"10px",
    [theme.breakpoints.up("sm")]: {
        paddingTop: '20px',
        paddingLeft: '1%',
        paddingRight: '1%',
        fontSize:"18px"
    },
  }));