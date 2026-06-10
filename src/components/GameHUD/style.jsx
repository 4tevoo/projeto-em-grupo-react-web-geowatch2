import styled from 'styled-components';
import { MapWrapper, StyledMapContainer } from './GameMap/style';

export const ButtonHud = styled.button`
    all: unset;
    z-index: 10;
    background-color: ${({ $isClicked }) => 
    $isClicked ? '#22D57F' : '#444'};
    width: 100%;
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
    opacity: 0.7;
    cursor: pointer;
    transition: all 0.3s ease;

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
`;