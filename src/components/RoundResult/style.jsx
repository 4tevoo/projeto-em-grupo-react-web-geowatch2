import styled from "styled-components";
import { estilosCores } from "../../pages/Results/style";

export const StyledRoundResult = styled.div`

    border: 1px solid #222;
    padding: 10px;
    margin: 10px 5px;
    border-radius: 25px;
    background-color:${estilosCores['--data-color']} 
`
export const StyledDistance = styled.div`
    padding: 10px;
    border: 1px solid #222;
    margin: 10px 5px;
    border-radius: 25px;
    background-color:${estilosCores['--data-color']} 
`
export const StyledScore = styled.div`
    color: ${props => props.color};
    font-size: 1.7rem;
    font-weight: bolder;
    
`
export const StyledText = styled.div`
    font-size: 1.7rem;
    font-weight: bolder;
`