import { Bloco, BlocoTitulo, BlocoTexto } from "../../../pages/Main/style";
import { colors } from "../../../pages/Main/style";
import Russia from "../../../assets/russia.png"

export default function TerceiroBloco() {
    return (
        <Bloco $bg={colors.blue} $img={Russia}>
            <div>
                <BlocoTitulo>
                    PREPARADO PARA UM DESAFIO?
                </BlocoTitulo>
                <BlocoTexto>
                    Se aventure pelas ruas! Você consegue identificar?
                </BlocoTexto>
            </div>
        </Bloco>
    );
}