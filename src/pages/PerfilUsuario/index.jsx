import { BodyUsuario } from "./BodyUsuario"
import { HeaderUsuario } from "./HeaderUsuario"
import { BotaoLogout, ContainerPerfil } from "./style"
import { userService } from "../../services/usuariosService"
import { useAuth } from "../../context/AuthContext"
import { ModalUpdate } from "./ModalUpdate"
import { useEffect, useState } from "react"
import { RiLogoutCircleLine } from "react-icons/ri";
import { pontuacaoService } from "../../services/pontuacaoService";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import DataSecurity from "../../assets/dataSecurity.json";
import LoadingMap from "../../assets/loadingMap.json";

export const Perfil = () =>{

    const { usuario, loading, logout } = useAuth();
    const [ abreModal, setAbreModal ] = useState(false);

    const abrirModal = () => setAbreModal(true);
    const fecharModal = () => setAbreModal(false);

    const [pageLoading, setPageLoading] = useState(true);


    useEffect(() => {
        const timer = setTimeout(() => {
            setPageLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const excluirPerfil = async () => {

        const confirmar = window.confirm("Tem certeza que deseja deletar a sua conta?");
        z
        if(confirmar){
            try{
                const dados = await pontuacaoService.listarPorUsuario(usuario.id);
                const partidas = dados.data;
                partidas.map(p => pontuacaoService.deletar(p.id))
                userService.deletar(usuario.id);
                alert("Conta excluída com sucesso.");
                logout();
            }catch(erro){
            alert("Erro ao excluir a conta!")
            }
        }
    };  

    if (loading || pageLoading) {
        return (
            <ContainerPerfil>
                <div style={{ color: "white", textAlign: "center" }}>
                    <DotLottieReact data={LoadingMap} loop autoplay />       
                    Carregando dados do perfil...
                </div>
            </ContainerPerfil>
        );
    }

    return(
        usuario ?
        (<ContainerPerfil>
            <HeaderUsuario onExcluirClick={excluirPerfil} onEditarClick={abrirModal}/>
            <BodyUsuario/>
            <ModalUpdate abreModal={abreModal} fechaModal={fecharModal}/>
        </ContainerPerfil>) : 
        (<ContainerPerfil>
            <div style={{color: "white", textAlign: "center"}}>
                <DotLottieReact data={DataSecurity} loop autoplay/>       
                Você precisa estar logado para acessar essa página
            </div>
        </ContainerPerfil>)
    )
}