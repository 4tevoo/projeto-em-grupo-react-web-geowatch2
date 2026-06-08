import {GlobalStyle} from './GlobalStyle'
import 'leaflet/dist/leaflet.css';
import {Routers} from "./routes/Routers.jsx";

function App() {

    return (
        <>
            <GlobalStyle/>
            <Routers></Routers>
        </>
    )
}

export default App
