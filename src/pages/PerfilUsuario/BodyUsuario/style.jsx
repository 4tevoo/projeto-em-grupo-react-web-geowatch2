import styled from "styled-components";

export const BodyUsuarioStyle = styled.div`
    //background-color: #634b92;
    background-color: rgba(10, 5, 25, 0.3); 
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 10px;
    width: 90%;
    display: flex;
    flex-direction: column;
    padding: 16px;
    gap: 20px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    @media (min-width: 768px) {
        width: 60%; 
        flex-direction: row; 
        padding: 24px;
    }
`

export const BodyUsuarioDadosCad = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    border-radius: 10px;
    padding: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 768px) {
        width: 30%;
    }
`
export const UserEmail = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`
export const InfoCad = styled.div`
    background-color: rgba(0, 0, 0, 0.25);
    width: 90%;
    border-radius: 8px;
    padding: 5px;  
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.05);
`
export const BodyUsuarioDadosGame = styled.div`
    background-color: rgba(0, 0, 0, 0.2);
    width: 100%;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (min-width: 768px) {
        width: 70%; 
    }

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
    gap: 10px;
    width: 92%;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`