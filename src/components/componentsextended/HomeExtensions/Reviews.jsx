import { Stack } from '@mui/material'
import React from 'react'
import { StyledOuterAlignedStack } from "../../UI/StacknBoxes";
import { StyledHeading } from '../../UI/TypoGraphies';

const Reviews = () => {
  return (
    <StyledOuterAlignedStack  sx={{background: "#D3D3D3"}}>
        <Stack xs={1} pt={2}>
        <StyledHeading>
              Clients Feedback
        </StyledHeading>
        </Stack>
        <Stack xs={11}>
            
        </Stack>
        
    </StyledOuterAlignedStack>
  )
}

export default Reviews