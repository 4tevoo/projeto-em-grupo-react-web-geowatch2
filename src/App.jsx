import { GlobalStyle } from './GlobalStyle';
import 'leaflet/dist/leaflet.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routers } from "./routes/Routers.jsx";
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Routers />
      <ToastContainer position="top-right" autoClose={3000} />
    </AuthProvider>
  );
}

export default App;