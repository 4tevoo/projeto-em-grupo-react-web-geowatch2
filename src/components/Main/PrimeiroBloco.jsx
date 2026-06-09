import { Bloco, BlocoTitulo, BlocoTexto } from "../../pages/Main/style";

export default function PrimeiroBloco() {
    return (
        <Bloco bg='#1a1a2e'>
            <div>
                <BlocoTitulo>
                    TESTANDO TITULO.
                </BlocoTitulo>
                <BlocoTexto>
                    Testando texto.
                </BlocoTexto>
            </div>
        </Bloco>
    );
}