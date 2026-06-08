import styled from "styled-components";

export const colors = {
    red: '#B71813',
    white: '#FEFFFE',
    yellow: '#E6B43C',
    green: '#22D57F',
    purple: '#4A2399',
};

export const Bloco = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 0 5%;
    background-color: ${({ bg }) => bg || '#1a1a2e'};
`;

export const BlocoTitulo = styled.h2`
    font-size: 3rem;
    font-style: italic;
    font-weight: 900;
    color: ${colors.white};
`;

export const BlocoTexto = styled.p`
    margin-top: 1rem;
    max-width: 500px;
    color: ${colors.white};
    font-size: 1rem;
    line-height: 1.6;
`;

export const BlocoBotao = styled.button`
    margin-top: 1.5rem;
    padding: 0.6rem 1.5rem;
    border: 2px solid ${colors.white};
    background: transparent;
    color: ${colors.white};
    border-radius: 999px;
    cursor: pointer;
    font-weight: 600;

    &:hover {
        background: ${colors.white};
        color: #000;
    }
`;

