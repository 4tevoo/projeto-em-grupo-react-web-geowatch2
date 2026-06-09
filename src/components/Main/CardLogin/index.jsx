import { CardWrapper, CardTitulo, BotaoGoogle, BotaoApple, BotaoFacebook, BotaoEmail, Divisor, CardRodape, BotaoSessao } from "./style";

export default function CardLogin() {
    return(
        <CardWrapper>
            <CardTitulo>
                Inscreva-se para jogar
            </CardTitulo>
            <BotaoGoogle>
                "Adicionar símbolo" Continuar com "teste"
            </BotaoGoogle>
            <BotaoApple>
                "Adicionar símbolo" Continuar com "teste"
            </BotaoApple>
            <BotaoFacebook>
                "Adicionar símbolo" Continuar com "teste"
            </BotaoFacebook>
            <BotaoEmail>
                "Adicionar símbolo" Continuar com "teste"
            </BotaoEmail>

            <Divisor />

            <CardRodape>
                Já tem uma conta?
                <BotaoSessao>INICIAR SESSÃO</BotaoSessao>
            </CardRodape>
        </CardWrapper>
    );
}