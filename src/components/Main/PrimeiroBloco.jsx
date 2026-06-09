import { Bloco, BlocoTitulo, BlocoTexto } from "../../pages/Main/style";
import Terra from "../../assets/Terra.png"

export default function PrimeiroBloco() {
    return (
        <Bloco $bg='#1a1a2e' $img={Terra}>
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