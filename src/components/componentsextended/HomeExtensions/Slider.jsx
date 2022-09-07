import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "../../CssFiles/Home.css";
// import required modules
import { Navigation, EffectFade } from "swiper";

import { Box, styled } from "@mui/material";
import SliderItems from './SliderItems';
import { StyledBox } from '../../UI/StacknBoxes';


const StyledParentBox = styled(Box)({
  display:'flex', 
  justifyContent:'center'
});

const Slider = () => {

  const image= "https://www.homestratosphere.com/wp-content/uploads/2020/06/luxury-house-july062020-min.jpg";
  
    return (
      <StyledParentBox>

        <SliderItems/>

        <Swiper
        effect
        speed={800}
        slidesPerView={1}
        navigation={true}
        modules={[Navigation, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <StyledBox
          sx={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${image})`}}/>
        </SwiperSlide>

        <SwiperSlide>
          <StyledBox
          sx={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${image})`}}/>
        </SwiperSlide>

        <SwiperSlide>
          <StyledBox
          sx={{backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${image})`}}/>
        </SwiperSlide>

      </Swiper>
      </StyledParentBox>

  )
}

export default Slider