import {
  Avatar,
  Box,
  Button,
  Card,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import DoughnutChart from "./Charts/DoughnutChart";
import OtherDoughnut from "./Charts/OtherDoughnut";
import HouseIcon from "@mui/icons-material/House";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import LineChart from "./Charts/LineChart";
import { VerticalChart } from "./Charts/VerticalChart";
import { HorizontalChart } from "./Charts/HorizontalChart";
// import ReactMapGL from 'react-map-gl';
// import { useState } from "react";

const data = {
  salesLabel: ["Total", "Sale", "Properties for sale"],
  rentLabel: ["Total", "Rent", "Properties for Rent"],
  totalLabel: ["Total", "Customers", "Total Cutomers"],
  cityLabel: ["Total", "Rent", "Total Cities"],
  peopleLabel: ["Customer", "Agents"],
  lineChartIcons: [<HouseIcon />, <HouseIcon />, <ArrowCircleUpIcon />],
  lineLabel: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  VerticalLabel: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  sale: [2000, 700],
  rent: [2000, 500],
  total: [2000, 800],
  city: [2000, 1500],
  people: [2000, 1200],
  lineChartTopText: ["Total Sale", "Total Rent", "than last week"],
  lineChartTopData: [100, 220, "0.8%"],
  lineChart: [100, 220, 400, 280, 550, 350, 1000],
  lineChart2: [300, 1100, 500, 300, 750, 450, 900],
  VerticalChartTopText: ["Total Revenue"],
  VerticalChartTopData: ["$60,000"],
  VerticalChart: [100, 200, 400, 100, 200, 400, 100, 200, 400, 100, 200, 400],
  VerticalChart2: [900, 800, 600, 900, 800, 600, 900, 800, 600, 900, 800, 600],
  HorizontalChart: [[600], [800], [700]],
  HorizontalChartTotal: [1000],
  HorizontalChartText: ["Properties Viewed", "Properties Listed", "Reviews"],
  HorizontalChartUnits: ["/days", "units", "comments"],
  HorizontalChartData: [800, 2456, 456],
};

const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  padding: 0,
  boxShadow: "1px 1px 10px  darkgrey",
});

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "8px",
  color: "darkgrey",
  [theme.breakpoints.up("sm")]: {
    fontSize: "12px",
  },
}));

const StyledLineTypography = styled(Typography)(({ theme }) => ({
  fontSize: "8px",
  color: "darkgrey",
  [theme.breakpoints.up("sm")]: {
    fontSize: "9px",
  },
}));

const StyledChartBox = styled(Box)(({ theme }) => ({
  height: "60px",
  width: "60px",
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    height: "100px",
    width: "100px",
  },
}));

const StyledCityChartBox = styled(Box)(({ theme }) => ({
  height: "50px",
  width: "50px",
  position: "relative",
  marginTop: "-6px",
  [theme.breakpoints.up("sm")]: {
    height: "55px",
    width: "55px",
  },
}));

const StyledCAChartBox = styled(Box)(({ theme }) => ({
  height: "50px",
  width: "50px",
  position: "relative",
  [theme.breakpoints.up("sm")]: {
    height: "180px",
    width: "180px",
  },
}));

const StyledButton = styled(Button)({
  width: "30px",
  height: "25px",
  fontSize: "8px",
  background: "grey",
  color: "black",
});

const Dashboard = () => {
  // const [viewport, setViewPort] = useState({
  //   latitude: 45.4211,
  //   longitude: -75.6903,
  //   width:'100vw',
  //   height:'100vh', zoom:'10'
  // })
  return (
    // Header
    <Stack sx={{ width: "100%", height: "100%", backgroundColor: "#fff" }}>
      <Box
        flex={1}
        pt={2}
        sx={{ height: "65px", paddingLeft: { xs: "20px", sm: "32px" } }}
      >
        <Typography variant="h4" fontWeight="bold">
          Dashboard
        </Typography>
      </Box>

      {/* Data Stacks */}

      <Stack flex={11} mt={1} textAlign="flex-start">
        <Box
          flex={3}
          mx={2}
          sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
        >
          <Stack flex={7} spacing={2}>
            <Stack
              flex={9}
              direction="row"
              sx={{ height: { xs: "220px", sm: "260px" } }}
              spacing={2}
            >
              <StyledCard
                sx={{
                  width: "32%",
                  height: { xs: "110px", sm: "100%" },
                  borderRadius: "16px",
                }}
              >
                <Stack pt={0.2} pr={0.3} sx={{ width: "82%" }}>
                  <StyledTypography>{data.salesLabel[2]}</StyledTypography>
                  <Typography fontWeight="bold">{data.sale[1]}</Typography>

                  <Stack sx={{ width: "110%" }} alignItems="flex-end">
                    <StyledChartBox>
                      <DoughnutChart
                        xLabels={data.salesLabel}
                        values={data.sale}
                      />
                    </StyledChartBox>
                  </Stack>
                </Stack>
              </StyledCard>

              <StyledCard
                sx={{
                  width: "32%",
                  height: { xs: "110px", sm: "100%" },
                  borderRadius: "16px",
                }}
              >
                <Stack pt={0.2} pr={0.3} sx={{ width: "82%" }}>
                  <StyledTypography>{data.rentLabel[2]}</StyledTypography>
                  <Typography fontWeight="bold">{data.rent[1]}</Typography>

                  <Stack sx={{ width: "110%" }} alignItems="flex-end">
                    <StyledChartBox>
                      <DoughnutChart
                        xLabels={data.rentLabel}
                        values={data.rent}
                      />
                    </StyledChartBox>
                  </Stack>
                </Stack>
              </StyledCard>

              <StyledCard
                sx={{
                  width: "32%",
                  height: { xs: "110px", sm: "100%" },
                  borderRadius: "16px",
                }}
              >
                <Stack pt={0.2} pr={0.3} sx={{ width: "82%" }}>
                  <StyledTypography>{data.totalLabel[2]}</StyledTypography>
                  <Typography fontWeight="bold">{data.total[1]}</Typography>

                  <Stack sx={{ width: "110%" }} alignItems="flex-end">
                    <StyledChartBox>
                      <DoughnutChart
                        xLabels={data.totalLabel}
                        values={data.total}
                      />
                    </StyledChartBox>
                  </Stack>
                </Stack>
              </StyledCard>
            </Stack>

            <Stack flex={3}>
              <StyledCard
                sx={{
                  width: "100%",
                  height: { xs: "60px", sm: "100%" },
                  borderRadius: "16px",
                }}
              >
                <Stack p={1} mt={1} direction="row" sx={{ width: "100%" }}>
                  <Box sx={{ width: { xs: "80px", sm: "120px" } }}>
                    <StyledTypography>{data.cityLabel[2]}</StyledTypography>
                    <Typography fontWeight="bold">{data.city[1]}</Typography>
                  </Box>
                  <Box sx={{ width: "70%" }} />
                  <StyledCityChartBox>
                    <DoughnutChart
                      xLabels={data.cityLabel}
                      values={data.city}
                    />
                  </StyledCityChartBox>
                </Stack>
              </StyledCard>
            </Stack>
          </Stack>

          <Stack
            flex={5}
            sx={{
              marginLeft: { xs: "none", sm: "16px" },
              marginTop: { xs: "16px", sm: "0px" },
            }}
          >
            <StyledCard
              sx={{
                height: { xs: "220px", sm: "100%" },
                width: "100%",
                borderRadius: "16px",
              }}
            >
              <Stack
                px={1}
                pt={1}
                direction="row"
                sx={{ width: "100%" }}
                justifyContent="space-between"
              >
                <Stack>
                  <StyledTypography>
                    {data.VerticalChartTopText}
                  </StyledTypography>
                  <Typography fontWeight="bold">
                    {data.VerticalChartTopData}
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <StyledButton variant="contained">Today</StyledButton>
                  <StyledButton variant="contained">Weekly</StyledButton>
                  <StyledButton variant="contained">Monthly</StyledButton>
                </Stack>
              </Stack>
              <Stack alignItems="center">
                <Box
                  pt={0.4}
                  sx={{
                    height: { xs: "160px", sm: "160px", md: "200px" },
                    width: { xs: "280px", sm: "300px", md: "400px" },
                    position: "relative",
                  }}
                >
                  <VerticalChart
                    xLabels={data.VerticalLabel}
                    values={data.VerticalChart}
                    values2={data.VerticalChart2}
                  />
                </Box>
              </Stack>
            </StyledCard>
          </Stack>

          {/* </Stack> */}
        </Box>

        <Box
          flex={9}
          mx={2}
          sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
        >
          <Box
            flex={3}
            mt={3}
            sx={{
              display: "flex",
              flexDirection: { xs: "row", sm: "column" },
              marginRight: { xs: "0px", sm: "16px" },
            }}
          >
            <StyledCard
              sx={{
                height: { xs: "180px", sm: "200px" },
                width: { xs: "50%", sm: "100%" },
                borderRadius: "16px",
              }}
            >
              <Stack>
                <Stack>
                  <Stack
                    px={1}
                    spacing={3}
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Typography sx={{ fontSize: "11px", fontWeight: "bold" }}>
                      {data.HorizontalChartText[0]}
                    </Typography>
                    <Typography sx={{ fontSize: "9px" }}>
                      {data.HorizontalChartData[0]}
                      {data.HorizontalChartUnits[0]}
                    </Typography>
                  </Stack>
                  <Stack
                    sx={{ height: "30px", width: "100%" }}
                    alignItems="center"
                  >
                    <HorizontalChart
                      xlabels={['none']}
                      values={data.HorizontalChart[0]}
                      values2={data.HorizontalChartTotal}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </StyledCard>

            <Stack
              sx={{
                width: { xs: "50%", sm: "100%" },
                marginTop: { xs: "none", sm: "16px" },
                marginLeft: { xs: "8px", sm: "0px" },
              }}
            >
              <StyledCard
                sx={{
                  height: { xs: "180px", sm: "200px" },
                  borderRadius: "16px",
                }}
              >
                <StyledCAChartBox>
                  <OtherDoughnut
                    xLabels={data.peopleLabel}
                    values={data.people}
                  />
                </StyledCAChartBox>
              </StyledCard>
            </Stack>
          </Box>

          <Stack
            flex={5}
            mt={3}
            spacing={2}
            sx={{ marginRight: { xs: "0px", sm: "16px" } }}
          >
            <StyledCard
              sx={{
                height: { xs: "220px", sm: "260px" },
                width: "100%",
                borderRadius: "16px",
              }}
            >
              <Stack px={1} pt={2} spacing={1} sx={{ width: "100%" }}>
                <Stack direction="row">
                  <Box sx={{ width: "22%" }} />
                  <Box sx={{ width: "24%" }}>
                    <Stack direction="row">
                      <Avatar
                        sx={{
                          height: "30px",
                          width: "30px",
                          background: "#3974B6",
                        }}
                      >
                        {data.lineChartIcons[0]}
                      </Avatar>
                      <Box>
                        <StyledLineTypography>
                          {data.lineChartTopText[0]}
                        </StyledLineTypography>
                        <Typography
                          sx={{ fontSize: "11px", fontWeight: "bold" }}
                        >
                          {data.lineChartTopData[0]}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                  <Box sx={{ width: "24%" }}>
                    <Stack direction="row">
                      <Avatar
                        sx={{
                          height: "30px",
                          width: "30px",
                          background: "#0FFF50",
                        }}
                      >
                        {data.lineChartIcons[1]}
                      </Avatar>
                      <Box>
                        <StyledLineTypography>
                          {data.lineChartTopText[1]}
                        </StyledLineTypography>
                        <Typography
                          sx={{ fontSize: "11px", fontWeight: "bold" }}
                        >
                          {data.lineChartTopData[1]}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                  <Box sx={{ width: "30%" }}>
                    <Stack direction="row">
                      <Avatar
                        sx={{
                          height: "30px",
                          width: "30px",
                          background: "#0FFF50",
                        }}
                      >
                        {data.lineChartIcons[2]}
                      </Avatar>
                      <Box>
                        <StyledLineTypography>
                          {data.lineChartTopText[2]}
                        </StyledLineTypography>
                        <Typography
                          sx={{ fontSize: "11px", fontWeight: "bold" }}
                        >
                          {data.lineChartTopData[2]}
                        </Typography>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
                <Stack alignItems="center">
                  <Box
                    pt={1}
                    sx={{
                      height: { xs: "160px", sm: "200px" },
                      width: { xs: "280px", sm: "300px", md: "380px" },
                      position: "relative",
                    }}
                  >
                    <LineChart
                      xLabels={data.lineLabel}
                      values={data.lineChart}
                      values2={data.lineChart2}
                    />
                  </Box>
                </Stack>
              </Stack>
            </StyledCard>

            <StyledCard
              sx={{
                height: { xs: "220px", sm: "260px" },
                width: "100%",
                borderRadius: "16px",
              }}
            >
              <Stack alignItems="center">
                <Box
                  pt={1}
                  sx={{
                    height: { xs: "200px", sm: "240px" },
                    width: { xs: "280px", sm: "300px", md: "380px" },
                    position: "relative",
                  }}
                >
                  {/* <ReactMapGL {...viewport}>
                      Markers here
                    </ReactMapGL> */}
                </Box>
              </Stack>
            </StyledCard>
          </Stack>

          <Box
            flex={3}
            my={3}
            sx={{ display: "flex", flexDirection: { xs: "row", sm: "column" } }}
          >
            <StyledCard
              sx={{
                height: { xs: "280px", sm: "350px" },
                width: "100%",
                marginBottom: "16px",
                borderRadius: "16px",
              }}
            >
              zzz
            </StyledCard>

            <Stack sx={{ width: "100%", marginLeft: { xs: "8px", sm: "0px" } }}>
              <StyledCard
                sx={{
                  height: { xs: "280px", sm: "350px" },
                  borderRadius: "16px",
                }}
              >
                zzz
              </StyledCard>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default Dashboard;
