import styled from "styled-components";

export const BodyUsuarioStyle = styled.div`
    //background-color: #634b92;
    background-color: rgba(10, 5, 25, 0.3); 
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 20px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    @media (min-width: 768px) {
        width: 1020px; 
        
        flex-direction: row; 
        padding: 24px;
        margin-bottom: 50px;
    }
`

export const BodyUsuarioDadosGame = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 30px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 30px;


    // @media (min-width: 768px) {
    //     width: 100%; 
    // }

`
export const Label = styled.span`
    color: #c084fc;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px; 
`;

export const InfosGame = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    // width: 92%;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

export const CardInfosGame = styled.div`
    background-color: rgba(0, 0, 0, 0.25);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    width: 90%;
    border-radius: 8px;
    padding: 5px;  
    display: flex;
    align-items: center;
    gap: 16px;
    color: #FFFFFF;
    border: 2px solid rgba(140, 0, 255, 0.2);
`
export const LabelInfosGame = styled.div`
    font-size: 0.88rem;
    font-weight: bold;
`

export const ListHistorico = styled.ul`
    // background-color: purple;
    list-style: none;
    border-radius: 8px;
    overflow: hidden;
    height: 150px;
    overflow-y: auto;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);

     &::-webkit-scrollbar {
        width: 6px;           
    }

    &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.02); 
    border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.15); 
    border-radius: 4px;
    }
    
    &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.35); 
    }
`

export const ContainerLabelList = styled.div`
    background-color: rgba(255, 255, 255, 0.2);
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    display: flex;
    justify-content: space-around;
    // width: 100%;
`
export const ColData = styled.span`
    width: 25%;
    text-align: center;
`

export const ColOpcao = styled.span`
    width: 50%;
    text-align: center;
    display: none;
    @media (min-width: 768px){
    display: block;
    }
`

export const ColPontos = styled.span`
    width: 25%;
    text-align: center;
`

export const IconList = styled.div`
    position: absolute;
    left: 1.5%;
    top: 3%;
    
`

export const HistoricoItem = styled.li`
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    position: relative;
    display: flex;
    justify-content: space-around;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;

    &:hover{
        background-color: rgba(10, 10, 10, 0.2);
    }
`

export const ContainerHistorico = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
`
