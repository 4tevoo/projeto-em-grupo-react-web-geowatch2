import { Bloco, BlocoTitulo, BlocoTexto } from "../../pages/Main/style";
import { colors } from "../../pages/Main/style";

export default function SextoBloco() {
    return (
        <Bloco $bg={colors.red}>
            <div>
                <BlocoTitulo>
                    Região 5
                </BlocoTitulo>
                <BlocoTexto>
                    Mini texto descrevendo região 5
                </BlocoTexto>
            </div>
        </Bloco>
    );
}