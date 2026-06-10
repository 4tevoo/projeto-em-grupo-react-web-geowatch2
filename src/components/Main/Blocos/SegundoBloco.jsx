import { Bloco, BlocoTexto, BlocoTitulo } from "../../../pages/Main/style";
import { colors } from "../../../pages/Main/style";
import FundoRj from "../../../assets/fundoRj.png"

export default function SegundoBloco() {
    return (
        <Bloco $bg={colors.yellow} $img={FundoRj}>
            <div>
                <BlocoTitulo>
                    ADVINHE E DESCUBRA
                </BlocoTitulo>
                <BlocoTexto>
                    Viaje por paisagens únicas e teste seus conhecimentos geográficos.
                </BlocoTexto>
            </div>
        </Bloco>
    );

}


    
    