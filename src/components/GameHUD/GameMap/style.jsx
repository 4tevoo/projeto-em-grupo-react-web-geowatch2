import styled from 'styled-components'
import { MapContainer } from 'react-leaflet/MapContainer'

export const MapWrapper = styled.div`
    width: 30vw;
    height: 30vh;
    border-radius: 25px;
    overflow: hidden;
    transition: 0.3s ease;
`;

export const StyledMapContainer = styled(MapContainer)`
    z-index: 10;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    transition: 0.3s ease;
`;