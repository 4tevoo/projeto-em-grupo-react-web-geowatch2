import styled from "styled-components";

export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6); /* Escurece o jogo atrás */
    backdrop-filter: blur(8px); /* Deixa o fundo borrado enquanto o modal está aberto */
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
    width: 450px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
`