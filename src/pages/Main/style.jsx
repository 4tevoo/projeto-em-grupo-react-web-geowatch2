import styled from "styled-components";

export const colors = {
    red: '#B71813',
    white: '#FEFFFE',
    yellow: '#E6B43C',
    green: '#22D57F',
    purple: '#4A2399',
    blue: '#105cad',
    grey: '#2B2D31',
};

export const Bloco = styled.section`
    min-height: 95vh;
    display: flex;
    align-items: center;
    padding: 0 5%;
    position: relative;

    background-image: ${({ $img }) => $img ? `url(${$img})` : 'none'};
    background-size: cover;
    background-position: center 40%;
    background-color: ${({ $bg }) => $bg || '#1a1a2e'};

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: ${({ $bg }) => $bg || '#1a1a2e'};
        opacity: 0.50;
        z-index: 0;
    }

    & > * {
        position: relative;
        z-index: 1;
    }
`;

export const BlocoTitulo = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 5rem;
    font-style: italic;
    font-weight: 900;
    color: ${colors.white};
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
`;

export const BlocoTexto = styled.p`
    margin-bottom: 1rem;
    max-width: 500px;
    color: ${colors.white};
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    line-height: 1.6;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.8);
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

export const MainWrapper = styled.div`
    overflow-y: auto;
    height: 100vh;
`

export const LogoImg = styled.img`
    width: 220px;
    margin-bottom: 1.5rem;
`;

export const TituloUm = styled.h1`
    font-family: 'Poppins', sans-serif;
    font-size: 5rem;
    font-style: italic;
    font-weight: 1000;
    color: ${colors.white};
    text-transform: uppercase;
    line-height: 1;
    margin-top: -1rem;
    margin-bottom: 1.7rem;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, 1);
`;

export const InfoPlataformas = styled.div`
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;
    align-items: center;
    flex-wrap: wrap;
`;

export const InfoTexto = styled.p`
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.8rem;
    font-family: 'Poppins', sans-serif;
    margin-top: 0.3rem;
`;
