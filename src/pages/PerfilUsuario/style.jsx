import styled from "styled-components"

export const ContainerPerfil = styled.div`
    background: linear-gradient(135deg, #3b0764 0%, #4a2399 50%, #6538bd 100%);
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    gap: 40px;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-family: "Montserrat";
    overflow-y: auto;
`

export const BotaoLogout = styled.button`
    border: none;
    background-color: transparent;
    color: #ffffff;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover{
        opacity: 0.8;
        color: red;
    }
`