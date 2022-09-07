import { Box, Stack, styled } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) =>({
    width: "100%",
    height: "230px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "120%",
    [theme.breakpoints.up("sm")]: {
      height: "500px",
      backgroundSize: "100%"
    },
  }));

export const StyledImageBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    paddingLeft: "13%",
    paddingRight: "13%",
    justifyContent: "center",
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
  }));

export const StyledOuterHomeStack = styled(Stack)(({ theme }) =>({
    height: "200px",
    [theme.breakpoints.up("sm")]: {
      height: "500px",
    },
  }));

  export const StyledOuterAlignedStack = styled(Stack)(({ theme }) =>({
    height: "200px",
    textAlign:'center',
    [theme.breakpoints.up("sm")]: {
      height: "500px",
    },
  }));


