import OitavoBloco from "../../components/Main/Blocos/OitavoBloco";
import PrimeiroBloco from "../../components/Main/Blocos/PrimeiroBloco";
import QuartoBloco from "../../components/Main/Blocos/QuartoBloco";
import QuintoBloco from "../../components/Main/Blocos/QuintoBloco";
import SegundoBloco from "../../components/Main/Blocos/SegundoBloco";
import SetimoBloco from "../../components/Main/Blocos/SetimoBloco";
import SextoBloco from "../../components/Main/Blocos/SextoBloco";
import TerceiroBloco from "../../components/Main/Blocos/TerceiroBloco";
import { MainWrapper } from "./style";

export function Main() {
    return(
        <MainWrapper>
            <PrimeiroBloco />
            <SegundoBloco />
            <TerceiroBloco />
            <QuartoBloco />
            <OitavoBloco />
        </MainWrapper>        
    );
}