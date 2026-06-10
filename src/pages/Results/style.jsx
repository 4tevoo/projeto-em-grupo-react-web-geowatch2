import styled from 'styled-components'
import { MapContainer } from 'react-leaflet/MapContainer'
import L from 'leaflet'

export const estilosCores = {

    '--base-color': '#4a2399',
    '--middle-color': '#572baf',
    '--light-color': '#7747d6',
    '--card-color': '#3b1585a6',
    '--data-color': '#260d5795',
    '--button-color': '#22d57f'


};

export const redMarker = new L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

export const StyledContainer = styled.div`

    background: linear-gradient(225deg, ${estilosCores['--base-color']} 20%, ${estilosCores['--middle-color']} 40%, ${estilosCores['--light-color']} 100%);
    display: flex;
    text-align: center;
    padding: 20px 0;
    flex-direction: column;
    gap: 40px;
    color: #fff;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    font-family: "Montserrat";
    overflow-y: auto;
    overflow-x: hidden;

    #nextRound,#finalRound{
        text-decoration: none;
        color: #fff;
        border: 1px solid #222;
        width: 90%;
        max-width: 800px;
        border-radius: 25px;
        background-color:${estilosCores['--button-color']};
        font-size: 1.7rem;
        font-weight: bolder;
        box-sizing: border-box;
        padding: 20px;
            
    }
    &::before {
        content: '';
        display: block;
        min-height: 40px;
        width: 100%;
        flex-shrink: 0;
    }
    &::after {
        content: '';
        display: block;
        min-height: 40px;
        width: 100%;
        flex-shrink: 0;
    }
`;
export const StyledCard = styled.div`
    
    border: 1px solid #222;
    width: 90%;
    max-width: 800px;
    border-radius: 25px;
    background-color:${estilosCores['--card-color']};
    box-sizing: border-box;
    flex-shrink: 0;
`

export const StyledResults = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-image: linear-gradient(rgba(74, 40, 153, 0.85), rgba(82, 43, 173, 0.85)), url(https://media.gettyimages.com/id/1385142384/pt/vetorial/outline-gradient-world-map-outline-background.jpg?s=612x612&w=0&k=20&c=EFkbBum2tFdQD5R29Om59UdVucWAgavTkJQmS2PgU-4=);
    border-radius: 25px;
    
`;
export const MapWrapper = styled.div`
    width: 90%;
    max-width: 800px;
    min-height: 400px;
    flex-shrink: 0;
    aspect-ratio: 16/9;
    border-radius: 25px;
    overflow: hidden;
    border: 1px solid #222;
`;

export const StyledMapContainer = styled(MapContainer)`
    width: 100%;
    height: 100%;
    
`;

export const StyledRestCountries = styled.div`
    padding: 20px;
    display: grid;
    font-size: 1.2rem;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
    'flag coat'
    'name capital'
    'language population'
    'region subregion';
    justify-content: stretch;
    align-items:center;
`;

export const StyledFlag = styled.img`
    max-height: 300px;
    aspect-ratio: 4/5;
    width: 90%;
    grid-area: ${props => props.area};
    justify-self: center;
`;
export const StyledData = styled.div`
    grid-area: ${props => props.area};
    border: 1px solid #222;
    padding: 10px;
    border-radius: 25px;
    background-color:${estilosCores['--data-color']} ;
`;

