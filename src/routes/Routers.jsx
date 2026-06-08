import {Route, Routes} from "react-router";
import {Layout} from "../components/Layout/index.jsx";
import {Page404} from "../pages/Page404/Index.jsx";
import { GoogleMap } from "../pages/GoogleMap/index.jsx";
import {Results} from "../pages/Results/index.jsx";

export const Routers = () => {
    return (
        <Routes>
            <Route element={<Layout></Layout>}>
                <Route path="/" element={<GoogleMap/>}></Route>
                <Route path="/geowatch2" element={<GoogleMap />}/>
                <Route path="/results" element={<Results/>}/>
            </Route>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    )
}
