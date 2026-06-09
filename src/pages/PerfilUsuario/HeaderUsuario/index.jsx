import {ButtonEditar, ButtonExcluir  } from "../components/Buttons/style"
import { AvatarHeaderUsuario, HeaderUsuarioStyle, InfosHeader, ButtonsHeader} from "./style"
import { useAuth } from "../../../context/AuthContext";
export const HeaderUsuario = ({onEditarClick, onExcluirClick}) => {

    const{ usuario, loading } = useAuth();

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
                
            </InfosHeader>
            <ButtonsHeader>
                <ButtonEditar onClick={onEditarClick}>
                        Editar perfil
                </ButtonEditar>
                <ButtonExcluir onClick={onExcluirClick}>
                        Excluir perfil
                </ButtonExcluir>
            </ButtonsHeader>
        </HeaderUsuarioStyle>
    )
}