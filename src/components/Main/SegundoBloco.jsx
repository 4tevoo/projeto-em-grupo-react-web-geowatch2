import { Bloco, BlocoTexto, BlocoTitulo } from "../../pages/Main/style";
import { colors } from "../../pages/Main/style";

export default function SegundoBloco() {
    return (
        <Bloco bg={colors.green}>
            <div>
                <BlocoTitulo>
                    Teste segundo bloco
                </BlocoTitulo>
                <BlocoTexto>
                    Teste texto segundo bloco
                </BlocoTexto>
            </div>
        </Bloco>
    );

}


    
    