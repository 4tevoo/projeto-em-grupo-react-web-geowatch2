import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { toast } from 'react-toastify';
import { useAuth } from '../../context/AuthContext';
import { userService } from '../../services/usuariosService';
import { LoginContainer, FormCard, Input, Button, ErrorMessage, Title, Subtitle, RegisterText, StyledLink } from '../../styles/AuthStyle';
import backgroundImage from '../../assets/background_auth.jpg';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [loading, setLoading] = useState(false);

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data } = await userService.listarTodos();
            const usuarioEncontrado = data.find(u => u.email === email && u.senha === senha);

            if (usuarioEncontrado) {
                const token = Math.random().toString(36).substring(2);
                await userService.atualizarToken(usuarioEncontrado.id, { ...usuarioEncontrado, token });
                login(usuarioEncontrado, token);
                navigate('/geowatch2');
            } else {
                toast.error("E-mail ou senha incorretos.");
            }
        } catch (err) {
            toast.error("Erro ao conectar com o servidor.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <LoginContainer bgImage={backgroundImage}>
            <FormCard onSubmit={handleLogin}>
                <Title>Bem-vindo de volta ao GeoWatch 2!</Title>
                <Subtitle>Entrar</Subtitle>

                <Input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} required />
                <Input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} required />

                <Button type="submit" disabled={loading}>
                    {loading ? "Entrando..." : "Entrar"}
                </Button>

                <RegisterText>
                    Não tem conta? <StyledLink to="/cadastro">Cadastre-se</StyledLink> 
                    {}
                </RegisterText>
            </FormCard>
        </LoginContainer>
    );
};