import styled from "styled-components";

export const Button = styled.button`
    //background-color: ${props => props.corFundo || '#3a3a3a'};
    padding: 10px 20px;
    border-radius: 6px;
    font-family: "Montserrat";
    font-size: 14px;
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
`;

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
`;