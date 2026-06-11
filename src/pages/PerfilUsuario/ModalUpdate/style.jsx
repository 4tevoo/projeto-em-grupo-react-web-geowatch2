import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6); 
    backdrop-filter: blur(8px); 
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
`
export const ModalContainer = styled.div`
    background-color: rgba(15, 7, 34, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 30px;
    width: 600px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    color: #ffffff;
    position: relative;
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
export const BotoesAbaContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 10px;
    justify-content: center;
`

export const BotaoAba = styled.button`
    background: ${props => props.$ativo ? 'rgba(255, 255, 255, 0.15)' : 'transparent'};
    color: ${props => props.$ativo ? '#ffffff' : 'rgba(255, 255, 255, 0.6)'};
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    
    border-bottom: 2px solid ${props => props.$ativo ? '#22d57f' : 'transparent'};
    
    box-shadow: ${props => props.$ativo ? '0 4px 12px rgba(31, 228, 146, 0.2)' : 'none'};

    &:hover {
        color: #ffffff;
        background: rgba(255, 255, 255, 0.08);
    }
`;

export const FormDados = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const InputDados = styled.input`
    height: 30px;
    font-size: 16px;
    padding: 5px;
    border-radius: 8px;
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

export const AbaAvatar = styled.div`
    display: flex;
    flex-direction: column
`