import {ButtonEditar, ButtonExcluir  } from "../components/Buttons/style"
import { AvatarHeaderUsuario, HeaderUsuarioStyle, InfosHeader, ButtonsHeader, ContainerElo, DataHeader} from "./style"
import { useAuth } from "../../../context/AuthContext";
import Bronze from "../../../assets/bronze.png"
import Prata from "../../../assets/prata.png"
import Ouro from "../../../assets/ouro.png"
import Diamante from "../../../assets/diamante.png"
import { usePartidas } from "../../../context/PartidasContext";
export const HeaderUsuario = ({onEditarClick, onExcluirClick}) => {

    const{ usuario, loading } = useAuth();
    const { elo } = usePartidas();

    const formatarDataBR = (dataString) => {
        if (!dataString) return "--/--/----";
        const data = new Date(dataString);
        return new Intl.DateTimeFormat('pt-BR').format(data);
    };
    
    if (loading) {
        return <p>Carregando dados do jogador...</p>;
    }

    const avatarUrl = usuario?.avatarURL || "https://api.dicebear.com/7.x/adventurer/svg?seed=Julio";
    return(
        <HeaderUsuarioStyle>
            <InfosHeader>
                <AvatarHeaderUsuario 
                src={avatarUrl}
                />
                <div>
                <h1>{usuario.nome}</h1>
                <DataHeader>Explorando desde: {formatarDataBR(usuario.dataCadastro)}</DataHeader>
                </div>
                <ContainerElo>
                    {elo === "Bronze" && <img src={Bronze}/>}
                    {elo === "Prata" && <img src={Prata}/>}
                    {elo === "Ouro" && <img src={Ouro}/>}
                    {elo === "Diamante" && <img src={Diamante}/>}
                </ContainerElo>
            </InfosHeader>
            <ButtonsHeader>
                <ButtonEditar onClick={onEditarClick}>
                        Editar Conta
                </ButtonEditar>
                <ButtonExcluir onClick={onExcluirClick}>
                        Excluir Conta
                </ButtonExcluir>
            </ButtonsHeader>
        </HeaderUsuarioStyle>
    )
}