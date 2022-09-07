import { Stack } from '@mui/material'
import React from 'react'
import { StyledOuterAlignedStack } from "../../UI/StacknBoxes";
import { StyledHeading } from '../../UI/TypoGraphies';

const BoxFifth = () => {
  return (
    <StyledOuterAlignedStack>
    <Stack xs={1} pt={2}>
    <StyledHeading>
    Latest News Feeds
    </StyledHeading>
    </Stack>
    <Stack xs={11}>
        
    </Stack>
    
</StyledOuterAlignedStack>
  )
}

export default BoxFifth