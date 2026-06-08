import styled from 'styled-components'
import { MapContainer } from 'react-leaflet/MapContainer'

export const MapWrapper = styled.div`
    width: 25vw;
    height: 25vh;
    border-radius: 25px;
    overflow: hidden;
`;

export const StyledMapContainer = styled(MapContainer)`
    z-index: 10;
    width: 100%;
    height: 100%;
`;