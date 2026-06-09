import { BodyUsuarioDadosCad, BodyUsuarioDadosGame, BodyUsuarioStyle, InfoCad, UserEmail, Teste, Label} from "./style"
import { useAuth } from "../../../context/AuthContext"
export const BodyUsuario = () => {
    const { usuario, loading } = useAuth();
    if (loading) {
        return <p>Carregando dados do jogador...</p>;
    }
    return(
    <BodyUsuarioStyle>
        <BodyUsuarioDadosCad>
            <h2>Dados Cadastrais</h2>
            <UserEmail> 
                <InfoCad>
                    <Label>Usuário</Label>
                    {usuario.nome}
                </InfoCad>
                <InfoCad>
                    <Label>Email</Label>
                    {usuario.email}
                </InfoCad>
            </UserEmail>   
        </BodyUsuarioDadosCad>
        <BodyUsuarioDadosGame>
            <h2>Painel do Jogador</h2>
            <Teste>
                <InfoCad>Recorde</InfoCad>
                <InfoCad>Partidas Jogadas</InfoCad>
                <InfoCad>Maior precisão</InfoCad>
            </Teste>
            <InfoCad>Histórico das últimas partidas</InfoCad>
        </BodyUsuarioDadosGame>
    </BodyUsuarioStyle>
)
}