import styled from 'styled-components'
import { MapContainer } from 'react-leaflet/MapContainer'

export const MapWrapper = styled.div`
    position: absolute;
    width: 30vw;
    height: 30vh;
    bottom: 15%;
    right: 5%;
    border-radius: 25px;
    overflow: hidden
`;

export const StyledMapContainer = styled(MapContainer)`
    z-index: 10;
    width: 100%;
    height: 100%;
`;