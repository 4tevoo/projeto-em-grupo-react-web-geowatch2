import { useState } from "react";
import { colors, RodapeWrapper, RodapeInfo, RodapeLabel, RodapeLista, ColunaFreq, FreqItem, FreqPergunta, FreqResposta } from "../../../pages/Main/style";
import styled from "styled-components";

export const freq = [
    {
        pergunta: "O que é o GeoWatch 2?",
        resposta: "GeoWatch 2 é um jogo de geografia em que você é largado em algum lugar do mundo e sua missão é encontrar pistas e advinhar a sua localização no mapa."
    },
    {
        pergunta: "Quem são os desenvolvedores deste jogo?",
        resposta: "Estêvão Viana Cunha, Gabriel Martins Chinelli Maia, Patrick Nunes Pires Melo de Souza, Mateus Tamaki Yoshisaki, Yuri Dos Santos Martins e Pedro Pinto Martins De Souza"
    },
    {
        pergunta: "Preciso ser bom em geografia para jogar?",
        resposta: "Nem um pouco! Alguns jogadores reconhecem países pela vegetação, outros chutam baseado na cor do asfalto. Todo mundo começa em algum lugar."
    },
    {
        pergunta: "Posso jogar com meus amigos?",
        resposta: "Claro! Crie desafios, compare pontuações e descubra qual de vocês realmente prestou atenção nas aulas de geografia."
    }
];

export default function OitavoBloco() {

    const [pergunta, setPergunta] = useState(null);

    function toggleFreq(index) {
        setPergunta(pergunta === index ? null : index);
    }

    return (
        <RodapeWrapper>
            <div>
                <RodapeLabel style={{ fontSize: '1.2rem'}}>GEOWATCH 2</RodapeLabel>
                <RodapeInfo>
                    GeoWatch2 S.A.<br />
                    R. Afrânio Melo Franco, 333 - 313 - Quitandinha,<br />
                    Petrópolis - RJ,<br />
                    25651-000<br /><br />
                    © 2026 GeoWatch 2
                </RodapeInfo>
            </div>

            <div>
                <RodapeLabel>EXPLORAR</RodapeLabel>
                <RodapeLista>
                    <li>Campeonato Serratec 2026.1</li>
                    <li>Sobre nós</li>
                    <li>Loja</li>
                    <li></li>
                </RodapeLista>
            </div>

            <ColunaFreq>
                <RodapeLabel>PERGUNTAS FREQUENTES</RodapeLabel>

                {freq.map((frequencia, index) => (
        <FreqItem key={index} onClick={() => toggleFreq(index)}>
            <FreqPergunta>
                {frequencia.pergunta}
                <span>{pergunta === index ? "-" : "+"}</span>
            </FreqPergunta>
            {pergunta === index && (
                <FreqResposta>{frequencia.resposta}</FreqResposta>
            )}

        </FreqItem>
    ))}
            </ColunaFreq>
        </RodapeWrapper>
        
    );
}