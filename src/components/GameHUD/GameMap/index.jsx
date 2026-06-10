import { Marker, TileLayer, useMapEvents } from 'react-leaflet';
import { StyledMapContainer, MapWrapper } from './style'

export const GameMap = ({ position, setPosition }) => {

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
                    
                    url={`https://api.maptiler.com/maps/openstreetmap/{z}/{x}/{y}.jpg?key=${import.meta.env.VITE_MAPTILER_KEY}`}
                    attribution='&copy; <a href="https://www.maptiler.com/copyright/">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
                    tileSize={512}
                    zoomOffset={-1}
                />
                {position && (<Marker position={position}></Marker>)}
                <MapClickHandler />
            </StyledMapContainer>
        </MapWrapper>

    )
}
