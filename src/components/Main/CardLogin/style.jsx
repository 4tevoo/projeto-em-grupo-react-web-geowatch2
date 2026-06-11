import styled from "styled-components";
import { colors } from "../../../pages/Main/style";

export const CardWrapper = styled.div`
    background-color: ${colors.black};
    align-self: center;
    margin-left: auto;
    padding: 2rem;
    border-radius: 12px;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    z-index: 100;

    @media (min-width: 768px) {
        display: flex;
        background-color: ${colors.black};
        align-self: center;
        margin-left: auto;
        padding: 2rem;
        border-radius: 12px;
        width: 300px;
        flex-direction: column;
        gap: 0.8rem;
        z-index:
`;

export const CardTitulo = styled.h3`
    color: ${colors.white};
    font-family: 'Poppins', sans-serif;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.5rem;
`;

export const BotaoBase = styled.button`
    width: 100%;
    padding: 0.7rem;
    border-radius: 100px;
    border: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
`;

export const BotaoGoogle = styled(BotaoBase)`
    background-color: ${colors.white};
    color: black;
`;

export const BotaoApple = styled(BotaoBase)`
    background-color: black;
    color: ${colors.white};
`;

export const BotaoFacebook = styled(BotaoBase)`
    background-color: ${colors.blue};
    color: ${colors.white};
`;

export const BotaoEmail = styled(BotaoBase)`
    background-color: ${colors.red};
    color: ${colors.white};
    border: 2px solid ${colors.white};
`;

export const Divisor = styled.hr`
    border: none;
    border-top: 1px solid grey;
`;

export const CardRodape = styled.p`
    color: grey;
    font-family: 'Poppins', sans-serif;
    font-size: 0.85rem;
    text-align: center;
`;

export const BotaoSessao = styled.span`
    color: ${colors.white};
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    cursor: pointer;
    margin-left: 0.3rem;

    &:hover {
        text-decoration: underline;
    }
`;