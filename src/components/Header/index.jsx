import { DropdownItem, DropdownLinkItem, DropDownLogout, DropdownMenu, HeaderContainer, ImgLogo, Logo, MenuHeader, ProfileBotao, ProfileContainer, SetaDropDown, TituloLogo, TituloUsuario } from "./style";
import LogoImg from "../../assets/logo.png"
import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";

export const Header = () =>{
    const {usuario, loading, logout} = useAuth();
    const [dropAberto, setDropAberto] = useState(false);

    return(
        <>
        <HeaderContainer>
            <Logo>
                <ImgLogo src={LogoImg}/>
            </Logo>
        
            <MenuHeader>
                <Link to="/main">Início</Link>
                <Link to="/ranking">Ranking</Link>
                <Link to="/geowatch2">Jogar</Link>
            </MenuHeader>
        
        {usuario && (    
            <ProfileContainer>
                <ProfileBotao onClick={() => setDropAberto(!dropAberto)} >
                    <img src={usuario.avatarURL}/>
                    <TituloUsuario>{usuario.nome}</TituloUsuario>
                    <SetaDropDown aberto={dropAberto}>▼</SetaDropDown>
                </ProfileBotao>
                {dropAberto && (
                    <DropdownMenu>
                        <li>
                        <DropdownLinkItem to="/perfil"> Perfil</DropdownLinkItem>
                        </li>
                        <li>
                        <DropdownItem disabled title="Em breve">
                            Configurações <IoSettingsOutline /> 
                        </DropdownItem>
                        </li>
                        <li>
                        <DropDownLogout onClick={logout}>
                            <RiLogoutBoxLine /> Sair
                        </DropDownLogout>
                        </li>
                    </DropdownMenu>
                    )}
            </ProfileContainer>
            )}
            {!usuario && (
                        <MenuHeader>
                            <Link to="/login">LOGIN</Link>
                        </MenuHeader>
            )}
            
        </HeaderContainer>
        </>
    )
}