import styled from "styled-components";

export const Button = styled.button`
    padding: 10px 20px;
    border-radius: 6px;
    font-family: "Montserrat";
    font-size: 0.8rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ButtonEditar = styled(Button)`
    background-color: #7c3aed;
    color: #ffffff;
    border: 1px solid transparent;

    &:hover {
        background-color: #9061f9;
        box-shadow: 0 0 12px rgba(124, 58, 237, 0.5); 
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(1px); 
    }
`

export const ButtonExcluir = styled(Button)`
    background-color: transparent; 
    color: #f87171; 
    border: 1px solid rgba(248, 113, 113, 0.4); 

    &:hover {
        background-color: #B71813;
        color: #ffffff;
        border-color: #B71813;
        box-shadow: 0 0 12px rgba(220, 38, 38, 0.4);
    }
    
    &:active {
        transform: translateY(1.5px);
    }
`

export const BotaoSalvar = styled.button`
    height: 30px;
    border-radius: 8px;
    width: 100px;
    align-self: flex-end;
    background-color: #22d57f;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    border: none;
    opacity: 0.8;
    transition: 0.3s ease-in-out;

    &:hover {
        box-shadow:0 0px 12px rgba(0, 255, 136, 0.7);
        opacity: 1;
    }
`

export const BotaoAba = styled.button`
    background: ${props => props.ativo ? 'rgba(255, 255, 255, 0.15)' : 'transparent'};
    color: ${props => props.$ativo ? '#ffffff' : 'rgba(255, 255, 255, 0.6)'};
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    
    border-bottom: 2px solid ${props => props.ativo ? '#22d57f' : 'transparent'};
    
    box-shadow: ${props => props.ativo ? '0 4px 12px rgba(31, 228, 146, 0.2)' : 'none'};

    &:hover {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.08);
    }
`

export const BotaoFechar = styled.button`
    background-color: transparent;
    border: none;
    color: #22D57F;
    position: absolute;
    right: 5%;
    top: 5%;
    cursor: pointer;
    opacity: 0.8;
    transition: all 0.3s ease-in-out;
    &:hover {
        opacity: 1;
    }
`
