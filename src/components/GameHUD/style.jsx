import styled from 'styled-components';
import { MapWrapper, StyledMapContainer } from './GameMap/style';

export const ButtonHud = styled.button`
    all: unset;
    z-index: 10;
    background-color: ${({ $isClicked }) => 
    $isClicked ? '#22D57F' : '#444'};
    width: 80%;
    height: 7.5vh;
    margin-top: 10px;
    border-radius: 50px;
    box-shadow: ${({ $isClicked }) => 
    $isClicked ? '0 0 16px #22D57F' : '0 0 16px #444'};
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    color: #FEFFFE;
    font-size: 2rem;
    font-weight: bolder;
    cursor: pointer;
    transition: all 0.3s ease;
    
    @media (min-width: 992px) {
        width: 100%;
        opacity: 0.7;
    }

    &:hover {
        transform: ${({ $isClicked }) => 
        $isClicked ? 'scale(1.05)' : null};
        background-color: ${({ $isClicked }) => 
        $isClicked ? '#1EC06F' : '#444'};
    }
    
    &:active {
        background-color: ${({ $isClicked }) => 
        $isClicked ? '#19A85F' : '#444'};
    }
`;

export const HudContainer = styled.div`
    position: absolute;
    right: 5%;
    bottom: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 992px) {
        &:hover ${MapWrapper} {
        width: 35vw;
        height: 35vh;
        }
    
        &:hover ${StyledMapContainer} {
            opacity: 1;
        }
    
        &:hover ${ButtonHud} {
            opacity: 1;
        }
    }
`;

export const Points = styled.div`
    z-index: 10;
    margin-bottom: 10px; 
    height: 5vh;
    width: 80%;
    display: grid;
    place-items: center;
    background-color: #00000080;
    box-shadow: 0 0 16px #444;
    border-radius: 25px;
    color: #FEFFFE;
    font-size: 1.25rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;

    @media (min-width: 992px) {
        width: 100%;
    }
`;

export const Round = styled.div`
    z-index: 10;
    margin-bottom: 10px; 
    height: 5vh;
    width: 80%;
    display: grid;
    place-items: center;
    background-color: #00000080;
    box-shadow: 0 0 16px #444;
    border-radius: 25px;
    color: #FEFFFE;
    font-size: 1.25rem;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;

    @media (min-width: 992px) {
        width: 100%;
    }
`;