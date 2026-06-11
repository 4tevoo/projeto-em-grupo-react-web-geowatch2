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
        if (senha.length < 4 || senha.length > 12) {
            toast.warning("A senha deve ter entre 4 a 12 caracteres.");
            return;
        }

        if (!email.includes('@')) {
            toast.warning("Por favor, insira um e-mail válido.");
            return;
        }
        setLoading(true);

        try {
            const { data: usuarios } = await userService.listarTodos();
            const emailExiste = usuarios.find(u => u.email === email);
            if (emailExiste) {
                toast.error("Este e-mail já está cadastrado!");
                setLoading(false);
                return;
            }
            const novoUsuario = {
                nome,
                email,
                senha,
                token: "",
                inativo: false,
                dataCadastro: new Date().toISOString(),
                avatarURL: `https://api.dicebear.com/7.x/adventurer/svg?seed=${nome}`
            };
            await userService.cadastrar(novoUsuario);
            toast.success("Conta criada com sucesso!");
            navigate('/login');
        } catch (err) {
            toast.error("Erro fatal no servidor. Tente novamente mais tarde.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <LoginContainer $bgImage={backgroundImage}>
            <FormCard onSubmit={handleCadastro}>
                <Title>Bem-vindo ao Geowatch 2!</Title>
                <Subtitle>Crie sua conta gratuita!</Subtitle>

                <div style={{  
                    color: '#444', 
                    fontSize: '13px' }}>*Jogo ainda em desenvolvimento, por favor não utilize seus dados reais. Exemplo de login nos campos</div>

                <Input type="text" placeholder="Nome/NickName" onChange={(e) => setNome(e.target.value)} required />
                <Input type="email" placeholder="SeuNome@ficticio.com" onChange={(e) => setEmail(e.target.value)} required />
                <Input type="password" placeholder="Senha Ficticia" onChange={(e) => setSenha(e.target.value)} required />

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