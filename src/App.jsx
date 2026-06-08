import { GlobalStyle } from './GlobalStyle'
import 'leaflet/dist/leaflet.css';
import { Routers } from "./routes/Routers.jsx";

// by Gabriel: Quando o Header real estiver pronto Patrick, é só substituir aqui :D
const HeaderPlaceholder = () => (
  <div style={{
    width: '100%',
    height: '60px',
    background: 'rgba(255,255,255,0.05)',
    borderBottom: '2px dashed rgba(255,255,255,0.15)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'rgba(255,255,255,0.3)',
    fontSize: '13px',
    fontFamily: 'monospace',
    position: 'fixed',
    top: 0,
    zIndex: 999,
  }}>
    HEADER: aguardando implementação.
  </div>
);

function App() {
  return (
    <>
      <GlobalStyle />
      <HeaderPlaceholder />
      <Routers />
    </>
  );
}

export default App;