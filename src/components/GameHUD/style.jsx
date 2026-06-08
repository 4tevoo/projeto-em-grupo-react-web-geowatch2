import styled from 'styled-components';

export const ButtonHud = styled.button`
    all: unset;
    z-index: 10;
    background-color: #22D57F;
    width: 25vw;
    height: 7.5vh;
    margin-top: 10px;
    border-radius: 50px;
    box-shadow: 0 0 16px rgba(34, 213, 127, 0.45);
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: #FEFFFE;
    font-size: 2rem;
    font-weight: bolder;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        transform: scale(1.05);
        background-color: #1EC06F;
    }
    
    &:active {
        background-color: #19A85F;
    }
`;

export const HudContainer = styled.div`
    position: absolute;
    right: 5%;
    bottom: 5%;
    display: flex;
    flex-direction: column;
`;