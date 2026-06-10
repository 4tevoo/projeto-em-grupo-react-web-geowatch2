import {Outlet} from "react-router/internal/react-server-client";
import { Header } from "../Header";

export const Layout = () => {
    return (
        <>
        <Header/>
        <Outlet/>
        
        </>
        
    )
}
