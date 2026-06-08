import { TileLayer } from 'react-leaflet';
import { MapWrapper, StyledMapContainer, StyledContainer  } from './style.jsx';

const position = [-22.41, -42.97];

export const Results = () => {
    return (
        <>
    <MapWrapper>
        <StyledMapContainer center={position} zoom={6}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </StyledMapContainer>
    </MapWrapper>
        </>
    )
}
