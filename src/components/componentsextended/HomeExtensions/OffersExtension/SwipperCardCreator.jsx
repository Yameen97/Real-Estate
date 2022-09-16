import React from 'react'
import { Box } from "@mui/material";
import data from '../../SearchExtensions/DummyData';
import FeaturedCard from './FeaturedCard';
import { SwiperSlide } from "swiper/react";

const SwiperCardCreator = (props) => {
    const products = data.products;

    if (products.length > 0) {
        return (<SwiperSlide>
        {/* {products.slice(0,1).map(prod => ( */}
          
          {/* <FeaturedCard
            key={prod.id}
            id={prod.id}
            image={prod.image}
            location={prod.location}
            city={prod.city}
            price={prod.Price}
          /> */}<p>1</p>
          
          
        {/* ))} */}
        </SwiperSlide>
  )}
  }

export default SwiperCardCreator;