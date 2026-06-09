import { Bloco, BlocoTitulo, BlocoTexto } from "../../pages/Main/style";
import { colors } from "../../pages/Main/style";

export default function SetimoBloco() {
    return (
        <Bloco $bg={colors.yellow}>
            <div>
                <BlocoTitulo>
                    Região 6
                </BlocoTitulo>
                <BlocoTexto>
                    Mini texto descrevendo região 6
                </BlocoTexto>
            </div>
        </Bloco>
    );
}