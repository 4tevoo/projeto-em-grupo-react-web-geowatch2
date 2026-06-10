import styled from 'styled-components'
import { MapContainer } from 'react-leaflet/MapContainer'

export const MapWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 90vw;
    height: 25vh;
    border-radius: 25px;
    overflow: hidden;
    transition: 0.3s ease;

    @media (min-width: 992px) {
        width: 25vw;
        height: 25vh;
    }
`;

export const StyledMapContainer = styled(MapContainer)`
    z-index: 10;
    width: 80%;
    height: 100%;
    transition: 0.3s ease;
    
    @media (min-width: 992px) {
        width: 100%;
        opacity: 0.7;
    }
`;