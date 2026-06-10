import { Bloco, BlocoTitulo, BlocoTexto } from "../../../pages/Main/style";
import { colors } from "../../../pages/Main/style";
import City from "../../../assets/cityCyber.png"

export default function QuartoBloco() {
    return (
        <Bloco $bg={colors.grey} $img={City}>
            <div>
                <BlocoTitulo>
                    VOLTA AO MUNDO
                </BlocoTitulo>
                <BlocoTexto>
                    Viaje pelos cinco continentes e descubra sua localização.
                </BlocoTexto>
            </div>
        </Bloco>
    );
}