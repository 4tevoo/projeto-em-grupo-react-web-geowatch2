import { ModalContainer, ModalOverlay } from "./style";

export const ModalUpdate = ({abreModal, fechaModal}) =>{

    if(!abreModal) {
        return null
    };

    return(
        <ModalOverlay onClick={fechaModal}>
            <ModalContainer>AAA</ModalContainer>
        </ModalOverlay>
    )
}