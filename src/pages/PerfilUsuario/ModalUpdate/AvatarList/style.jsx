import styled from "styled-components";

export const AvataresContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    gap: 20px;
    padding: 10px;
    justify-content: center;
    max-height: 200px;
    overflow-y: auto;
    overflow-x: auto;

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
    @media (min-width: 768px) {
        max-height: 400px;
    }
`

export const AvatarCard = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    padding: 4px;
    transition: all 0.2s ease-in-out;
    background-color: rgba(255, 255, 255, 0.03);

    border: 3px solid ${props => props.$selecionado ? '#22D57F' : 'transparent'};
    box-shadow: ${props => props.$selecionado ? '0 0 12px rgba(255, 255, 255, 0.5)' : 'none'};
    opacity: ${props => props.$selecionado ? '1' : '0.6'};

    &:hover {
        opacity: 1;
        transform: scale(1.05);
    }
    @media (min-width: 768px) {
        width: 100px;
        height: 100px;
    }
`;