import { Bloco, BlocoTexto, BlocoTitulo } from "../../pages/Main/style";
import { colors } from "../../pages/Main/style";

export default function SegundoBloco() {
    return (
        <Bloco $bg={colors.green}>
            <div>
                <BlocoTitulo>
                    Região 1
                </BlocoTitulo>
                <BlocoTexto>
                    Mini texto descrevendo região 1
                </BlocoTexto>
            </div>
        </Bloco>
    );

}


    
    