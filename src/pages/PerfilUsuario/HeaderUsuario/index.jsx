import {ButtonEditar, ButtonExcluir  } from "../components/Buttons/style"
import { AvatarHeaderUsuario, HeaderUsuarioStyle, InfosHeader, ButtonsHeader, ContainerElo} from "./style"
import { useAuth } from "../../../context/AuthContext";
import Bronze from "../../../assets/bronze.png"
import Prata from "../../../assets/prata.png"
import Ouro from "../../../assets/ouro.png"
import Diamante from "../../../assets/diamante.png"
import { usePartidas } from "../../../context/PartidasContext";
export const HeaderUsuario = ({onEditarClick, onExcluirClick}) => {

    const{ usuario, loading } = useAuth();
    const { elo } = usePartidas();

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
                <p>titulo</p>
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