import { Bloco, BlocoTitulo, BlocoTexto } from "../../pages/Main/style";
import { colors } from "../../pages/Main/style";

export default function TerceiroBloco() {
    return (
        <Bloco $bg={colors.blue}>
            <div>
                <BlocoTitulo>
                    Região 2
                </BlocoTitulo>
                <BlocoTexto>
                    Mini texto descrevendo região 2
                </BlocoTexto>
            </div>
        </Bloco>
    );
}