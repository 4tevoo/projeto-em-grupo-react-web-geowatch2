import { Bloco, BlocoTitulo, BlocoTexto } from "../../../pages/Main/style";
import { colors } from "../../../pages/Main/style";
import City from "../../../assets/cityCyber.png"
import { BotaoJogar } from "../../../pages/Main/style";

export default function QuartoBloco() {
    return (
        <Bloco $bg={colors.grey} $img={City}>
            <div>
                <BlocoTitulo>
                    VOLTA AO MUNDO
                </BlocoTitulo>
                <BlocoTexto>
                    Viaje pelos seis continentes e descubra sua localização.
                </BlocoTexto>
                <BotaoJogar>JOGAR NO JAPÃO</BotaoJogar>
            </div>
        </Bloco>
    );
}