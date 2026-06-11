import { Bloco, BlocoTitulo, BlocoTexto } from "../../../pages/Main/style";
import { colors } from "../../../pages/Main/style";
import Russia from "../../../assets/russia.png"
import { BotaoJogar } from "../../../pages/Main/style";
import { useNavigate } from "react-router";
import { useResult } from "../../../context/ResultContext";

export default function TerceiroBloco() {
    const { setCountryCode } = useResult();
    const jogarPais = useNavigate();

    function jogarRussia() {
        setCountryCode("RU");
        jogarPais('/geowatch2');
    }

    return (
        <Bloco $bg={colors.blue} $img={Russia}>
            <div style={{ width: '100%' }}>
                <BlocoTitulo>
                    PREPARADO PARA UM DESAFIO?
                </BlocoTitulo>
                <BlocoTexto>
                    Se aventure pelas ruas! Você consegue identificar?
                </BlocoTexto>
                <BotaoJogar onClick={jogarRussia}>JOGAR NA RÚSSIA</BotaoJogar>
            </div>
        </Bloco>
    );
}