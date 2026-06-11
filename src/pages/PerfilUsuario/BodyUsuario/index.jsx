import { BodyUsuarioDadosCad, BodyUsuarioDadosGame, BodyUsuarioStyle, InfoCad, 
    UserEmail, InfosGame, Label, EmailTexto, 
    CardInfosGame, LabelInfosGame, ListHistorico, 
    ContainerLabelList, HistoricoItem, ColData, 
    ColOpcao, ColPontos, IconList, ContainerHistorico} from "./style"
import { useAuth } from "../../../context/AuthContext"
import { pontuacaoService } from "../../../services/pontuacaoService";
import { useEffect, useState } from "react";
import { TbCalendarCheck } from "react-icons/tb";
import { GoTrophy } from "react-icons/go";
import { PiTargetLight } from "react-icons/pi";
import { LuMapPinCheck } from "react-icons/lu";
import { FaMapPin } from "react-icons/fa";
import { GrMap } from "react-icons/gr";
import { usePartidas } from "../../../context/PartidasContext";


export const BodyUsuario = () => {
    const { usuario, loading } = useAuth();
    const {dadosPartidas, loadingPartidas, recorde, maiorPrecisao} = usePartidas();

    const formatarDataBR = (dataString) => {
        if (!dataString) return "--/--/----";
        const data = new Date(dataString);
        return new Intl.DateTimeFormat('pt-BR').format(data);
    };

    
    if (loading) {
        return <p>Carregando dados do jogador...</p>;
    }
    return(
    <BodyUsuarioStyle>
        <BodyUsuarioDadosGame>
            <h1>PAINEL DO JOGADOR</h1>
            <InfosGame>
                <CardInfosGame>
                    <GoTrophy size={50}/>
                    <div><LabelInfosGame>Recorde</LabelInfosGame>
                    <p>{recorde}</p></div>
                </CardInfosGame>
                <CardInfosGame>
                    <LuMapPinCheck size={55}/>
                    <div><LabelInfosGame>Partidas Jogadas</LabelInfosGame>
                    <p>{dadosPartidas.length}</p></div>
                </CardInfosGame>
                <CardInfosGame>
                    <PiTargetLight size={60}/>
                    <div><LabelInfosGame>Maior Precisão</LabelInfosGame>
                    <p>{maiorPrecisao}</p></div>
                </CardInfosGame>
                
            </InfosGame>
            
            <ContainerHistorico>
                <h1>Histórico de partidas</h1>
                <ListHistorico>
                    <ContainerLabelList>
                        <ColData>Data</ColData>
                        <ColOpcao>Opção</ColOpcao>
                        <ColPontos>Pontos</ColPontos>
                    </ContainerLabelList>
                    {dadosPartidas.map((partida) => {
                        return(
                        <HistoricoItem key={partida.id}>
                            <IconList><GrMap size={18} /></IconList>
                            <ColData>{formatarDataBR(partida.data)}</ColData>
                            <ColOpcao>{partida.opcao}</ColOpcao>
                            <ColPontos>{partida.pontos.reduce(
                                (acumulador, valorAtual) =>{
                                    return acumulador + valorAtual;
                                }, 0
                            )}</ColPontos>
                        </HistoricoItem>
                        );
                    })}
                    
                </ListHistorico>
                
            </ContainerHistorico>
        </BodyUsuarioDadosGame>
    </BodyUsuarioStyle>
)
}