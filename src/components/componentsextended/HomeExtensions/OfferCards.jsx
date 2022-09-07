import { Stack } from "@mui/material";
import React from "react";
import { StyledOuterAlignedStack, StyledImageBox } from "../../UI/StacknBoxes";
import { StyledHeading } from "../../UI/TypoGraphies";
import OfferCardCreator from "./OfferCardCreator";

const OfferCards = () => {
  const image= "https://img.freepik.com/free-photo/portrait-handsome-young-man-makes-okay-gesture-demonstrates-agreement-likes-idea-smiles-happily-wears-optical-glasses-yellow-hat-t-shirt-models-indoor-its-fine-thank-you-hand-sign_273609-30676.jpg?size=626&ext=jpg"
  return (
    <StyledOuterAlignedStack sx={{ height: { xs: "1130px", sm: "640px" } }}>
      <Stack xs={1} mt={2}>
        <StyledHeading>Featured Properties</StyledHeading>
      </Stack>
      
        
      <Stack xs={11} pl={3}>
        <StyledImageBox p={3}>
      <OfferCardCreator >
          <img src={image} alt=""/>
        </OfferCardCreator>

        <OfferCardCreator>
        <img src={image} alt=""/>  
        </OfferCardCreator>

        <OfferCardCreator>
        <img src={image} alt=""/>
        </OfferCardCreator>

        <OfferCardCreator>
        <img src={image} alt=""/>
        </OfferCardCreator>
        
        </StyledImageBox>


        <StyledImageBox pb={3} sx={{display:{xs:'none', sm:'flex'}}}>
          
        <OfferCardCreator>
        <img src={image} alt=""/>
        </OfferCardCreator>

        <OfferCardCreator>
        <img src={image} alt=""/>
        </OfferCardCreator>

        <OfferCardCreator>
        <img src={image} alt=""/>
        </OfferCardCreator>

        <OfferCardCreator>
        <img src={image} alt=""/>
        </OfferCardCreator>
        
        </StyledImageBox>
        
      </Stack>
    </StyledOuterAlignedStack>
  );
};

export default OfferCards;
