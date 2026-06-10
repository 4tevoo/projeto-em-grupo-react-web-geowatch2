import React from 'react'
import { StyledFinalResult } from './style'

export const FinalResult = ( { finalScore } ) => {
  return (
    <StyledFinalResult>Resultado final: {finalScore}</StyledFinalResult>
  )
}
