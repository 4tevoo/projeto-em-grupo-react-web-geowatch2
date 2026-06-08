import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { toast } from 'react-toastify';
import { userService } from '../../services/usuariosService';
import { 
    LoginContainer, FormCard, Input, Button, Title, Subtitle, RegisterText, StyledLink 
} from '../../styles/AuthStyle';
import backgroundImage from '../../assets/background_auth.jpg';

export const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleCadastro = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const novoUsuario = { 
            nome, 
            email, 
            senha, 
            token: "", 
            inativo: false,
            dataCadastro: new Date().toISOString(), 
            // avatar fixo por enquanto, pode ser o padrão até ter avatares dinâmicos no perfil do patrick
            avatarURL: "https://cdn-icons-png.flaticon.com/512/149/149071.png"
        };
        
        await userService.cadastrar(novoUsuario);
        
        toast.success("Conta criada com sucesso!");
        navigate('/login');
    } catch (err) {
        toast.error("Erro ao cadastrar. Tente novamente.");
    } finally {
        setLoading(false);
    }
};

    return (
        <LoginContainer bgImage={backgroundImage}>
            <FormCard onSubmit={handleCadastro}>
                <Title>Bem-vindo ao Geowatch 2!</Title>
                <Subtitle>Crie sua conta gratuita!</Subtitle>

                <Input type="text" placeholder="Nome Completo" onChange={(e) => setNome(e.target.value)} required />
                <Input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required />
                <Input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required />

                <Button type="submit" disabled={loading}>
                    {loading ? "Cadastrando..." : "Cadastrar"}
                </Button>

                <RegisterText>
                    Já tem uma conta? <StyledLink to="/login">Entrar</StyledLink>
                </RegisterText>
            </FormCard>
        </LoginContainer>
    );
};