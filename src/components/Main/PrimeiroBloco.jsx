import { Bloco, BlocoTitulo, BlocoTexto } from "../../pages/Main/style";

export default function PrimeiroBloco() {
    return (
        <Bloco $bg='#1a1a2e'>
            <div>
                <BlocoTitulo>
                    Introdução ao jogo
                </BlocoTitulo>
                <BlocoTexto>
                    Mini texto descrevendo o jogo
                </BlocoTexto>
            </div>
        </Bloco>
    );
}