import { BotoesAbaContainer, ModalContainer, ModalOverlay, 
     FormDados, InputDados, AbaAvatar } from "./style";

import { userService } from "../../../services/usuariosService";
import { useAuth } from "../../../context/AuthContext";
import { useState } from "react";
import { AvatarList } from "./AvatarList";
import { IoCloseOutline } from "react-icons/io5";

import { BotaoAba, BotaoSalvar, BotaoFechar } from "../components/Buttons/style";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import LoadingJson from "../../../assets/loading.json"

export const ModalUpdate = ({abreModal, fechaModal}) =>{
    const {usuario, login} = useAuth();
    const [nome, setNome] = useState(usuario?.nome || "");
    const [email, setEmail] = useState(usuario?.email || "");
    const [senha, setSenha] = useState(usuario?.senha || "");
    const [avatarSelecionado, setAvatarSelecionado] = useState(usuario?.avatarURL || "");
    const [aba, setAba] = useState('conta');
    const [loadingAtualizar, setLoadingAtualizar] = useState(false);

    if(!abreModal) {
        return null
    };


    const editarUsuario = async (e) =>{
        e.preventDefault();
        setLoadingAtualizar(true);
        const dadosAtualizados = {
            ...usuario,
            nome:  nome,
            email: email,
            senha: senha,
            avatarURL: avatarSelecionado
        };
        try{
            await new Promise(resolve => setTimeout(resolve, 1000));
            const {data} = await userService.atualizarToken(usuario.id, dadosAtualizados)
            alert("Dados atualizados com sucesso")
            login(data, localStorage.getItem('userToken'))
            fechaModal();
        }catch(erro){
            alert("Não foi possível atualizar os dados.")
        }finally{
            setLoadingAtualizar(false)
        }
    };

    

    return(
        <ModalOverlay onClick={fechaModal}>
            <ModalContainer onClick={(e) => e.stopPropagation()}>
                <BotaoFechar onClick={fechaModal}><IoCloseOutline  size={30}/></BotaoFechar>
                <BotoesAbaContainer>
                    <BotaoAba
                    ativo={aba === 'conta'}
                    onClick={() => setAba('conta')}>
                        CONTA
                    </BotaoAba>
                    <BotaoAba
                    ativo={aba === 'avatar'}
                    onClick={() => setAba('avatar')}>
                        AVATAR
                    </BotaoAba>
                </BotoesAbaContainer>
                {/* display para edição de dados cadastrais */}
                {aba === 'conta' && 
                (
                <FormDados>
                    
                    <label>Nome de usuário:</label>
                    <InputDados type="text" value={nome} onChange={(e) => setNome(e.target.value)} />

                    <label>E-mail de Acesso:</label>
                    <InputDados type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <label>Nova Senha:</label>
                    <InputDados type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
                    
                </FormDados>
                )}
                {/* display para edição do avatar */}
                {aba === 'avatar' && (
                    <AbaAvatar>
                    <AvatarList avatarSelecionado={avatarSelecionado} setAvatarSelecionado={setAvatarSelecionado}/>
                    </AbaAvatar>
                )}
                <BotaoSalvar onClick={editarUsuario}>{
                loadingAtualizar ? (<DotLottieReact
                     data={LoadingJson} 
                        loop
                        autoplay
                        
                    />) : ("SALVAR") }</BotaoSalvar>
                            
            </ModalContainer>
        </ModalOverlay>
    )
}