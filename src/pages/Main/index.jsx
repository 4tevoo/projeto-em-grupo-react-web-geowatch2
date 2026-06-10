import RodapeBloco from "../../components/Main/Blocos/RodapeBloco";
import PrimeiroBloco from "../../components/Main/Blocos/PrimeiroBloco";
import SegundoBloco from "../../components/Main/Blocos/SegundoBloco";
import TerceiroBloco from "../../components/Main/Blocos/TerceiroBloco";
import QuartoBloco from "../../components/Main/Blocos/QuartoBloco";
import { MainWrapper } from "./style";

export function Main() {
    return(
        <MainWrapper>
            <PrimeiroBloco />
            <SegundoBloco />
            <TerceiroBloco />
            <QuartoBloco />
            <RodapeBloco />
        </MainWrapper>        
    );
}