import styled from "styled-components";
import { estilosCores } from "../../pages/Results/style";

export const StyledFinalResult = styled.div`
    padding: 10px;
    border: 1px solid #222;
    margin: 10px 5px;
    border-radius: 25px;
    text-transform: uppercase;
    background-color:${props => props.color} ;
`
export const StyledScore = styled.div`
    font-size: 2rem;
    font-weight: bolder;
    
`
export const StyledText = styled.div`
    font-size: 2rem;
    font-weight: bolder;
    
`