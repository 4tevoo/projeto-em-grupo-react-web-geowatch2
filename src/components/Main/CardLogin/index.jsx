import { CardWrapper, CardTitulo, BotaoGoogle, BotaoApple, BotaoFacebook, BotaoEmail, Divisor, CardRodape, BotaoSessao } from "./style";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { BotaoJogar } from "../../../pages/Main/style";
import { useAuth } from '../../../context/AuthContext.jsx';
import { useResult } from "../../../context/ResultContext";


export default function CardLogin() {


    const botoesFuncao = useNavigate();
    const { setCountryCode } = useResult();
    const jogarPais = useNavigate();
    const { usuario } = useAuth()

    function jogar() {
        setCountryCode("");
        jogarPais('/geowatch2');
    }

    return (
        <>
            {!usuario ? (
                <CardWrapper>
                    < CardTitulo >
                        Inscreva - se para jogar
                    </CardTitulo >

                    <BotaoGoogle onClick={() => botoesFuncao('/cadastro')}>
                        <FcGoogle style={{ fontSize: '1.3rem' }} />
                        Inscreva-se com conta Google
                    </BotaoGoogle>
                    <BotaoApple onClick={() => botoesFuncao('/cadastro')}>
                        <FaApple style={{ fontSize: '1.3rem' }} />
                        Inscreva-se com conta Apple
                    </BotaoApple>
                    <BotaoFacebook onClick={() => botoesFuncao('/cadastro')}>
                        <FaFacebook style={{ fontSize: '1.3rem' }} />
                        Inscreva-se com facebook
                    </BotaoFacebook>
                    <BotaoEmail onClick={() => botoesFuncao('/cadastro')}>
                        Inscreva-se com email
                    </BotaoEmail>

                    <Divisor />

                    <CardRodape>
                        Já tem uma conta?
                        <BotaoSessao onClick={() => botoesFuncao('/login')}>INICIAR SESSÃO</BotaoSessao>
                    </CardRodape>
                </CardWrapper >)

                 : (<BotaoJogar onClick={() => jogar()}>JOGAR</BotaoJogar>)}
        </>
    );
}