import Slider from "../componentsextended/HomeExtensions/Slider";
import RandomDetails from "../componentsextended/HomeExtensions/RandomDetails";
import OfferCards from "../componentsextended/HomeExtensions/OffersExtension/OfferCards";
import Locations from "../componentsextended/HomeExtensions/Locations";
import Reviews from "../componentsextended/HomeExtensions/ReviewsExtension/Reviews";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box style={{background: 'secondary'}}>
      <Slider />
      <RandomDetails/>
      <OfferCards/>
      <Locations/>
      <Reviews/>
    </Box>
  );
};

export default Home;
