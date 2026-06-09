import styled from "styled-components";
import { colors } from "../../../pages/Main/style";

export const CardWrapper = styled.div`
    position: fixed;
    top: 50%;
    right: 12%;
    transform: translateY(-50%);
    background-color: #1e1e3a;
    padding: 2rem;
    border-radius: 12px;
    width: 325px;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    z-index: 100;

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const CardTitulo = styled.h3`
    color: ${colors.white};
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0.5rem;
`;

export const BotaoBase = styled.button`
    width: 100%;
    padding: 0.75rem;
    border-radius: 999px;
    border: none;
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
    color: #000;
`;

export const BotaoApple = styled(BotaoBase)`
    background-color: #000;
    color: ${colors.white};
`;

export const BotaoFacebook = styled(BotaoBase)`
    background-color: #3b5998;
    color: ${colors.white};
`;

export const BotaoEmail = styled(BotaoBase)`
    background-color: transparent;
    color: ${colors.white};
    border: 2px solid ${colors.white};
`;

export const Divisor = styled.hr`
    border: none;
    border-top: 1px dashed #555;
`;

export const CardRodape = styled.p`
    color: #aaa;
    font-size: 0.85rem;
    text-align: center;
`;

export const BotaoSessao = styled.span`
    color: ${colors.white};
    font-weight: 700;
    cursor: pointer;
    margin-left: 0.3rem;

    &:hover {
        text-decoration: underline;
    }
`;