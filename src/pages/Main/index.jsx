import CardLogin from "../../components/Main/CardLogin";
import OitavoBloco from "../../components/Main/OitavoBloco";
import PrimeiroBloco from "../../components/Main/PrimeiroBloco";
import QuartoBloco from "../../components/Main/QuartoBloco";
import QuintoBloco from "../../components/Main/QuintoBloco";
import SegundoBloco from "../../components/Main/SegundoBloco";
import SetimoBloco from "../../components/Main/SetimoBloco";
import SextoBloco from "../../components/Main/SextoBloco";
import TerceiroBloco from "../../components/Main/TerceiroBloco";
import { MainWrapper } from "./style";
import styled from "styled-components";

export function Main() {
    return(
        <MainWrapper>
            <PrimeiroBloco />
            <SegundoBloco />
            <TerceiroBloco />
            <QuartoBloco />
            <QuintoBloco />
            <SextoBloco />
            <SetimoBloco />
            <OitavoBloco />
            <CardLogin />
        </MainWrapper>
    );
}