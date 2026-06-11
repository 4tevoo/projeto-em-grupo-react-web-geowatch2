import { GlobalStyle } from './GlobalStyle';
import 'leaflet/dist/leaflet.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routers } from "./routes/Routers.jsx";
import { AuthProvider } from './context/AuthContext';
import { PartidaProvider } from './context/PartidasContext.jsx';

function App() {
  return (
    <AuthProvider>
      <PartidaProvider>
        <GlobalStyle />
        <Routers />
        <ToastContainer position="top-right" autoClose={3000} />
      </PartidaProvider>
    </AuthProvider>
  );
}

export default App;