import { useState } from "react";
import { colors } from "../../pages/Main/style";
import styled from "styled-components";

export const RodapeWrapper = styled.footer`
    background-color: #0d0d0d;
    color: ${colors.white};
    padding: 3rem 5%;
    display: flex;
    gap: 4rem;
    flex-wrap: wrap;
`;

export const RodapeInfo = styled.p`
    margin-top: 0.5rem;
    font-size: 0.85rem;
    color: #aaaaaa;
    line-height: 1.8;
`;

export const RodapeLabel = styled.span`
    font-size: 0.85rem;
    color: #aaaaaa;
    letter-spacing: 1px;
    font-weight: 700;
`;

export const RodapeLista = styled.ul`
    list-style: none;
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-size: 0.95rem;
    color: ${colors.white};
`;

export const ColunaFreq = styled.div`
    flex: 1;
    min-width: 300px;
`;

export const FreqItem = styled.div`
    border-bottom: 1px solid #333;
    padding: 1rem 0;
    cursor: pointer;
`;

export const FreqPergunta = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${colors.white};
    font-weight: 600;
    font-size: 0.95rem;
`;

export const FreqResposta = styled.p`
    margin-top: 0.75rem;
    color: #aaaaaa;
    font-size: 0.9rem;
    line-height: 1.6;
`;

export const freq = [
    {
        pergunta: "O que é GeoWatch?",
        resposta: "GeoWatch é um jogo de geografia em quem você é largado em algum lugar do mundo e sua missão é encontrar pistas e advinhar a sua localização no mapa."
    },
    {
        pergunta: "Dificuldade em entrar na minha conta.",
        resposta: "Se esqueceu sua senha, clique em 'Já tem uma conta?' e depois em 'Esqueceu sua senha?'. Insira o email associado e você receberá um link para redefinir."
    },
    {
        pergunta: "GeoWatch está disponível na App Store e Google Play?",
        resposta: "Sim, o GeoWatch está disponível para iOS e Android, e sua conta também permite que você jogue no aplicativo."
    },
    {
        pergunta: "Em quais idiomas o GeoWatch está disponível?",
        resposta: "GeoWatch está disponível em múltiplos idiomas. Você pode escolher o idioma nas configurações da conta."
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
                <strong style={{fontSize: '1.2rem'}}>GEOWATCH</strong>
                <RodapeInfo>
                    GeoWatch<br />
                    Info1<br />
                    Info2<br />
                    Info3<br /><br />
                    © 2026 GeoWatch
                </RodapeInfo>
            </div>

            <div>
                <RodapeLabel>EXPLORAR</RodapeLabel>
                <RodapeLista>
                    <li>Campeonato Mundial 2026</li>
                    <li>Empresa</li>
                    <li>Loja</li>
                    <li>Cartões-presente</li>
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