import { BodyUsuario } from "./BodyUsuario"
import { HeaderUsuario } from "./HeaderUsuario"
import { ContainerPerfil } from "./style"
import { userService } from "../../services/usuariosService"
import { useAuth } from "../../context/AuthContext"
import { ModalUpdate } from "./ModalUpdate"
import { useState } from "react"

export const Perfil = () =>{

    const { usuario, loading, logout } = useAuth();
    const [ abreModal, setAbreModal ] = useState(false);

    const abrirModal = () => setAbreModal(true);
    const fecharModal = () => setAbreModal(false);

    const excluirPerfil = () => {
        const confirmar = window.confirm("Tem certeza que deseja deletar a sua conta?");

        if(confirmar){
            userService.deletar(usuario.id);
            alert("Conta excluída com sucesso.");
            logout();
        }
    }

    return(
        usuario ?
        (<ContainerPerfil>
            <HeaderUsuario onExcluirClick={excluirPerfil} onEditarClick={abrirModal}/>
            <BodyUsuario/>
            <button onClick={logout}> SAIR </button>
            <ModalUpdate abreModal={abreModal} fechaModal={fecharModal}/>
        </ContainerPerfil>) : 
        (<ContainerPerfil>
            <div>Você precisa estar logado para acessar essa página
            </div>
        </ContainerPerfil>)
    )
}