import { Route, Routes } from "react-router";
import { RotaPrivada } from "../components/RotaPrivada/index.jsx";
import { Layout } from "../components/Layout/index.jsx";
import { Page404 } from "../pages/Page404/Index.jsx";
import { GoogleMap } from "../pages/GoogleMap/index.jsx";
import { Results } from "../pages/Results/index.jsx";
import { Login } from "../pages/Login/index.jsx";
import { Cadastro } from "../pages/Cadastro/index.jsx"
import { Main } from "../pages/Main/index.jsx"

export const Routers = () => {
    return (
        <Routes>
            {}
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/main" element={<Main />} />

            {/* Rotas Privadas pra testar por enquanto, colocar depois em volta do perfil*/}
            <Route element={<Layout />}>
                <Route path="/geowatch2" element={
                    <RotaPrivada>
                        <GoogleMap />
                    </RotaPrivada>
                }/>
                <Route path="/results" element={
                    <RotaPrivada>
                        <Results />
                    </RotaPrivada>
                }/>
            </Route>

            <Route path="*" element={<Page404 />}/>
        </Routes>
    )
}