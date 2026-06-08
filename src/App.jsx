import { GlobalStyle } from './GlobalStyle'
import 'leaflet/dist/leaflet.css';
import { Routers } from "./routes/Routers.jsx";
import { ResultProvider } from './context/ResultContext.jsx';

function App() {

    return (
        <>
            <ResultProvider>
                <GlobalStyle />
                <Routers></Routers>
            </ResultProvider>
        </>
    )
}

export default App
