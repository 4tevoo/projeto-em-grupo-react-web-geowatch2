import { BotoesAbaContainer, ModalContainer, ModalOverlay, BotaoAba, FormDados, InputDados, BotaoSalvar, AbaAvatar } from "./style";
import { userService } from "../../../services/usuariosService";
import { useAuth } from "../../../context/AuthContext";
import { useState } from "react";
import { AvatarList } from "./AvatarList";

export const ModalUpdate = ({abreModal, fechaModal}) =>{
    const {usuario, login} = useAuth();
    const [nome, setNome] = useState(usuario?.nome || "");
    const [email, setEmail] = useState(usuario?.email || "");
    const [senha, setSenha] = useState(usuario?.senha || "");
    const [avatarSelecionado, setAvatarSelecionado] = useState(usuario?.avatarURL || "");
    const [aba, setAba] = useState('conta');

    if(!abreModal) {
        return null
    };

    const editarUsuario = async (e) =>{
        e.preventDefault();

        const dadosAtualizados = {
            ...usuario,
            nome:  nome,
            email: email,
            senha: senha,
            avatarURL: avatarSelecionado
        };

        const {data} = await userService.atualizarToken(usuario.id, dadosAtualizados)
        alert("Dados atualizados com sucesso")
        login(data, localStorage.getItem('userToken'))

        fechaModal();
    }

    

    return(
        <ModalOverlay onClick={fechaModal}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <BotoesAbaContainer>
                    <BotaoAba
                    $ativo={aba === 'conta'}
                    onClick={() => setAba('conta')}>
                        CONTA
                    </BotaoAba>
                    <BotaoAba
                    $ativo={aba === 'avatar'}
                    onClick={() => setAba('avatar')}>
                        AVATAR
                    </BotaoAba>
                </BotoesAbaContainer>
                {/* display para edição de dados cadastrais */}
                {aba === 'conta' && 
                (
                <FormDados onSubmit={editarUsuario}>
                    
                    <label>Nome de usuário:</label>
                    <InputDados type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

                    <label>E-mail de Acesso:</label>
                    <InputDados type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label>Nova Senha:</label>
                    <InputDados type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    <BotaoSalvar>SALVAR</BotaoSalvar>
                </FormDados>
                )}
                {/* display para edição do avatar */}
                {aba === 'avatar' && (
                    <AbaAvatar>
                    <AvatarList avatarSelecionado={avatarSelecionado} setAvatarSelecionado={setAvatarSelecionado}>

                    </AvatarList>
                    <BotaoSalvar onClick={editarUsuario}>SALVAR</BotaoSalvar>
                    </AbaAvatar>
                )}
            </ModalContainer>
        </ModalOverlay>
    )
}