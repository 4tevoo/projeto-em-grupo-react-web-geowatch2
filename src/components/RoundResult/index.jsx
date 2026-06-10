import React from 'react'
import { StyledDistance, StyledRoundResult, StyledScore, StyledText } from './style'

export const RoundResult = ({ color, score, distance }) => {
  return (
    <>
      <StyledRoundResult>
        <StyledText>Pontuação da rodada </StyledText>
        <StyledScore color={color}>{score}</StyledScore>
      </StyledRoundResult>

      <StyledRoundResult>
        <StyledText>Distância da localização</StyledText>
        <StyledText>{distance} KM</StyledText>
      </StyledRoundResult>
    </>

  )
}
