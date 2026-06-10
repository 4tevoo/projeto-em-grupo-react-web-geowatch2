import React from 'react'
import { StyledFinalResult, StyledScore, StyledText } from './style'

export const FinalResult = ( { color,finalScore } ) => {
  return (
    <StyledFinalResult color={color}>
      <StyledText>Pontuação final</StyledText>
      <StyledScore>{finalScore}</StyledScore>
    </StyledFinalResult>
  )
}
