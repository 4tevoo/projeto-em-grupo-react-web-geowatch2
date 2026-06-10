import { BotaoHamburguer, DropdownItem, DropdownLinkItem, DropDownLogout, DropdownMenu, HeaderContainer, ImgLogo, Logo, MenuHeader, MobileNav, MobileSidebar, ProfileBotao, ProfileContainer, SetaDropDown, SidebarHeader, SidebarOverlay, TituloLogo, TituloUsuario } from "./style";
import LogoImg from "../../assets/logo.png"
import { Link } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useState } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useResult } from "../../context/ResultContext";

export const Header = () =>{
    const {usuario, loading, logout} = useAuth();
    const [dropAberto, setDropAberto] = useState(false);
    const [sidebarAberta, setSidebarAberta] = useState(false);
    const { setCountryCode } = useResult();

    return(
        <>
        <HeaderContainer>
            <Logo to="/">
                <ImgLogo src={LogoImg}/>
            </Logo>
        
            <MenuHeader>
                <Link to="/">Início</Link>
                <Link to="/ranking">Ranking</Link>
                <Link to="/geowatch2" onClick={ () => setCountryCode("") }>Jogar</Link>
            </MenuHeader>
        
        {usuario && (    
            <ProfileContainer>
                <ProfileBotao onClick={() => setDropAberto(!dropAberto)} >
                    <img src={usuario.avatarURL}/>
                    <TituloUsuario>{usuario.nome}</TituloUsuario>
                    <SetaDropDown aberto={dropAberto}><MdOutlineArrowDropDown size={25} /></SetaDropDown>
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
            <BotaoHamburguer onClick={() => setSidebarAberta(true)}>
                ☰
            </BotaoHamburguer>
        </HeaderContainer>
        <SidebarOverlay sidebarAberta={sidebarAberta} onClick={() => setSidebarAberta(false)}/>
            <MobileSidebar sidebarAberta={sidebarAberta}>
            
            {usuario && (<SidebarHeader>
                 <img src={usuario.avatarURL}/>
                <TituloUsuario>
                    {usuario.nome}
                </TituloUsuario>
            </SidebarHeader>)}
            
            <MobileNav>
                <Link to="/main" onClick={() => setSidebarAberta(false)}>Início</Link>
                <Link to="/ranking" onClick={() => setSidebarAberta(false)}>Ranking</Link>
                <Link to="/geowatch2" onClick={() => setSidebarAberta(false)}>Jogar</Link>

                {usuario &&(
                    <><Link to="/perfil" onClick={() => setSidebarAberta(false)}>perfil</Link>
                    <DropDownLogout onClick={logout}>
                            <RiLogoutBoxLine /> Sair
                    </DropDownLogout></>
                )}   
            </MobileNav>

            </MobileSidebar>
        </>
    )
}