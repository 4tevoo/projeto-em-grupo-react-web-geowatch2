import { Bloco, BlocoTitulo, BlocoTexto } from "../../../pages/Main/style";
import { colors } from "../../../pages/Main/style";
import City from "../../../assets/cityCyber.png"
import { BotaoJogar } from "../../../pages/Main/style";
import { useNavigate } from "react-router";
import { useResult } from "../../../context/ResultContext";

export default function QuartoBloco() {
    const { setCountryCode } = useResult();
    const jogarPais = useNavigate();

    function jogarJapao() {
        setCountryCode("JP");
        jogarPais('/geowatch2');
    }

    return (
        <Bloco $bg={colors.grey} $img={City}>
            <div style={{ width: '100%' }}>
                <BlocoTitulo>
                    VOLTA AO MUNDO
                </BlocoTitulo>
                <BlocoTexto>
                    Viaje pelos seis continentes e descubra sua localização.
                </BlocoTexto>
                <BotaoJogar onClick={jogarJapao}>JOGAR NO JAPÃO</BotaoJogar>
            </div>
        </Bloco>
    );
}