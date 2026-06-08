import styled from 'styled-components'
import { MapContainer } from 'react-leaflet/MapContainer'

export const StyledMapContainer = styled(MapContainer)`
    width: 70%;
    height: 70%;
    border-radius: 25px;
    background-image: url("/image.webp");
    background-position: center;
    background-size: cover;
    
`
export const StyledContainer = styled.div`
    background-color: red;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    align-content: space-evenly;
`
export const StyledRestCountries = styled.div`
    width: 70%;
    background-color: blue;
    
`
export const StyledResults = styled.div`
    width: 70%;
    background-color: blue;
`
