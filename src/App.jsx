import { GlobalStyle } from './GlobalStyle'
import { GameHUD } from './components/GameHUD';
import { GoogleMap } from './pages/GoogleMap';
import 'leaflet/dist/leaflet.css';

function App() {

  return (
    <>
      <GlobalStyle />
      <GameHUD />
      <GoogleMap />
    </>
  )
}

export default App
