import { Marker, TileLayer, useMapEvents } from 'react-leaflet';
import { StyledMapContainer, MapWrapper } from './style'

export const GameMap = ({position, setPosition}) => {
    
    function MapClickHandler() {
        useMapEvents({
            click(e) {
                setPosition([e.latlng.lat, e.latlng.lng])
            },
        });
    }

    return (
    <MapWrapper>
        <StyledMapContainer center={[0, 0]} zoom={1}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {position && (<Marker position={position}></Marker>)}
            <MapClickHandler />
        </StyledMapContainer>
    </MapWrapper>

    )
}
