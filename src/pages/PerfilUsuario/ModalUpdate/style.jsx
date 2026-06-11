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
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 25px;
`

export const BotoesAbaContainer = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 10px;
    justify-content: center;
`



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


export const AbaAvatar = styled.div`
    display: flex;
    flex-direction: column
`