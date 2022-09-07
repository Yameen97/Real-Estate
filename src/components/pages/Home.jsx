import React from "react";
import Slider from "../componentsextended/HomeExtensions/Slider";
import RandomDetails from "../componentsextended/HomeExtensions/RandomDetails";
import OfferCards from "../componentsextended/HomeExtensions/OfferCards";
import Locations from "../componentsextended/HomeExtensions/Locations";
import Reviews from "../componentsextended/HomeExtensions/Reviews";
import BoxFifth from "../componentsextended/HomeExtensions/BoxFifth";

const Home = () => {
  return (
    <>
      <Slider />
      <RandomDetails/>
      <OfferCards/>
      <Locations/>
      <Reviews/>
      <BoxFifth/>
    </>
  );
};

export default Home;
