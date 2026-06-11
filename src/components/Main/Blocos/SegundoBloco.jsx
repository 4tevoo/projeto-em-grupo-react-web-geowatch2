import { Bloco, BlocoTexto, BlocoTitulo } from "../../../pages/Main/style";
import { colors } from "../../../pages/Main/style";
import FundoRj from "../../../assets/fundoRj.png"
import { BotaoJogar } from "../../../pages/Main/style";
import { useResult } from "../../../context/ResultContext"
import { useNavigate } from "react-router";

export default function SegundoBloco() {
    const { setCountryCode } = useResult();
    const jogarPais = useNavigate();

    function jogarBrasil() {
        setCountryCode("BR");
        jogarPais('/geowatch2');
    }

    return (
        <Bloco $bg={colors.yellow} $img={FundoRj}>
            <div style={{ width: '100%' }}>
                <BlocoTitulo>
                    ADVINHE E DESCUBRA
                </BlocoTitulo>
                <BlocoTexto>
                    Viaje por paisagens únicas e teste seus conhecimentos geográficos.
                </BlocoTexto>
                <BotaoJogar onClick={jogarBrasil}>JOGAR NO BRASIL</BotaoJogar>
            </div>
        </Bloco>
    );

}


    
    