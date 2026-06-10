import { Route, Routes } from "react-router";
import { Layout } from "../components/Layout/index.jsx";
import { Page404 } from "../pages/Page404/Index.jsx";
import { GoogleMap } from "../pages/Game/index.jsx";
import { Results } from "../pages/Results/index.jsx";
import { Login } from "../pages/Login/index.jsx";
import { Cadastro } from "../pages/Cadastro/index.jsx"
import { Main } from "../pages/Main/index.jsx"
import { Perfil } from "../pages/PerfilUsuario/index.jsx";
import RankingPage from "../pages/Rank/index.jsx";

export const Routers = () => {
    return (
        <Routes>

            { }
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/geowatch2" element={
                    <GoogleMap />
                } />
            { }
            <Route element={<Layout />}>
                <Route path="/" element={<Main />} />
                <Route path="/results" element={
                    <Results />
                } />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/ranking" element={<RankingPage />} />
            <Route path="*" element={<Page404 />}/>
            </Route>
        </Routes>
    )
}