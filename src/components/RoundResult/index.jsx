import React from 'react'
import { StyledDistance, StyledRoundResult } from './style'

export const RoundResult = ({score,distance}) => {
  return (
    <>
    <StyledRoundResult>Pontuação da rodada: {score}</StyledRoundResult>
    <StyledDistance>Distância da localização: {distance}
      <span> KM</span>
    </StyledDistance>
    </>
  )
}
