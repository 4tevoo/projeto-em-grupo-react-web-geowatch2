import { Bloco, BlocoTitulo, BlocoTexto } from "../../pages/Main/style";

export default function QuartoBloco() {
    return (
        <Bloco $bg='#0d0d1a'>
            <div>
                <BlocoTitulo>
                    Região 3
                </BlocoTitulo>
                <BlocoTexto>
                    Mini texto descrevendo região 3
                </BlocoTexto>
            </div>
        </Bloco>
    );
}