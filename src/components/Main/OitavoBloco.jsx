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

export default function OitavoBloco() {
    return (
        <RodapeWrapper>
            <div>
                <strong style={{fontSize: '1.2rem'}}>GEOWATCH</strong>
                <RodapeInfo>
                    GeoWatch<br />
                    Info1<br />
                    Info2<br />
                    Info3<br /><br />
                </RodapeInfo>
            </div>

            <div>
                <RodapeLabel>EXPLORAR</RodapeLabel>
            </div>
        </RodapeWrapper>
        
    );
}