import { CardWrapper, CardTitulo, BotaoGoogle, BotaoApple, BotaoFacebook, BotaoEmail, Divisor, CardRodape, BotaoSessao } from "./style";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function CardLogin() {
    return(
        <CardWrapper>
            <CardTitulo>
                Inscreva-se para jogar
            </CardTitulo>
            <BotaoGoogle>
                <FcGoogle style={{ fontSize: '1.3rem' }} />
                Inscreva-se com conta Google
            </BotaoGoogle>
            <BotaoApple>
                <FaApple style={{ fontSize: '1.3rem' }} />
                Inscreva-se com conta Apple
            </BotaoApple>
            <BotaoFacebook>
                <FaFacebook style={{ fontSize: '1.3rem' }} />
                Inscreva-se com facebook
            </BotaoFacebook>
            <BotaoEmail>
                Inscreva-se com email
            </BotaoEmail>

            <Divisor />

            <CardRodape>
                Já tem uma conta?
                <BotaoSessao>INICIAR SESSÃO</BotaoSessao>
            </CardRodape>
        </CardWrapper>
    );
}