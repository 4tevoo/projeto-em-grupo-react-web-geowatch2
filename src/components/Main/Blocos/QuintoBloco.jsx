import { Bloco, BlocoTitulo, BlocoTexto } from "../../../pages/Main/style";
import { colors } from "../../../pages/Main/style";

export default function QuintoBloco() {
    return (
        <Bloco $bg={colors.purple}>
            <div>
                <BlocoTitulo>
                    Região 4
                </BlocoTitulo>
                <BlocoTexto>
                    Mini texto descrevendo região 4
                </BlocoTexto>
            </div>
        </Bloco>
    );
}