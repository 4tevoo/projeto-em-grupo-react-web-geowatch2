import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./AuthContext";
import { pontuacaoService } from "../services/pontuacaoService";

const PartidaContext = createContext();

export const PartidaProvider = ({ children }) => {
    const { usuario } = useAuth();
    const [dadosPartidas, setDadosPartidas] = useState([]);
    const [loadingPartidas, setLoadingPartidas] = useState(true);

    useEffect(() => {
        const buscarDadosPartidas = async () => {
            if (!usuario?.id) return; 
            
            try {
                setLoadingPartidas(true);
                const dados = await pontuacaoService.listarPorUsuario(usuario.id);
                setDadosPartidas(dados.data);
            } catch (error) {
                console.error("Erro ao buscar partidas no contexto:", error);
            } finally {
                setLoadingPartidas(false);
            }
        };

        buscarDadosPartidas();
    }, [usuario?.id]); 


    const allDistancias = dadosPartidas.flatMap(p => p.distancias || []);
    const somaDistancias = allDistancias.reduce((acumulador, valorAtual) =>{
        return acumulador + valorAtual;
    }, 0);
    const maiorPrecisao = allDistancias.length ? Math.min(...allDistancias) : 0;

    const allPontos = dadosPartidas.flatMap(p => p.pontos || []);
    const recorde = allPontos.length ? Math.max(...allPontos) : 0;

    
    const mediaPrecisao = allDistancias.length > 0 
        ? (somaDistancias / allDistancias.length) : 0;
    

    const calcularElo = () => {
        if (mediaPrecisao === 0) return "Sem Elo";
        if (mediaPrecisao <= 200) return "Diamante";
        if (mediaPrecisao <= 1500) return "Ouro";
        if (mediaPrecisao <= 3000) return "Prata";
        return "Bronze";
    };

    const elo = calcularElo();

    return (
        <PartidaContext.Provider value={{ 
            dadosPartidas, 
            loadingPartidas, 
            recorde, 
            maiorPrecisao, 
            elo 
        }}>
            {children}
        </PartidaContext.Provider>
    );
};

export const usePartidas = () => useContext(PartidaContext);