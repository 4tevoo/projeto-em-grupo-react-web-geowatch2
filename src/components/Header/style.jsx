import styled from "styled-components";
import { Link } from "react-router";

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 60px;
    background-color: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(4px);
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: space-around;
    // padding-left: 20px;
    box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.3);
    font-family: "Montserrat";
`

export const Logo = styled.div`
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 2px;
    margin-top: 10px;
`
export const ImgLogo = styled.img`
    height: 100%;
`
export const TituloLogo = styled.span`
    color: #ffffff;
    font-weight: bold;
`

export const MenuHeader = styled.nav`
    display: flex;
    gap: 20px;
    font-size: 1rem;
    
    a{  
        text-decoration: none;
        color: #ffffff;
        text-transform: uppercase;
        transition: 0.3s ease-in-out;
        padding: 10px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover{
            background-color: rgba(255, 255, 255, 0.1);
        }
    }
`

export const ProfileContainer = styled.div`
    position: relative;
`

export const ProfileBotao = styled.button`
    display: flex;
    align-items: center;
    gap: 10px;
    background: transparent;
    border: none;
    color: #ffffff;
    cursor: pointer;
    padding: 8px 12px;
    border-radius: 8px;
    transition: background 0.2s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.05);
    }

    img {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #5b3ca4;
        background-color: white;
    }
`

export const TituloUsuario = styled.span`
    font-weight: 500;
    font-size: 0.95rem;
`

export const SetaDropDown = styled.span`
    font-size: 0.7rem;
    transition: transform 0.2s ease;
    transform: ${props => props.aberto ? 'rotate(180deg)' : 'rotate(0deg)'};
`

//menu dropdown
export const DropdownMenu = styled.ul`
    position: absolute;
    top: 100%; 
    right: 0;   
    margin-top: 8px; 
    background-color: #1e153d;
    border: 1px solid #372963;
    border-radius: 8px;
    min-width: 180px;
    padding: 6px 0;
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.5);
    list-style: none;
    z-index: 100; 
    animation: fadeIn 0.15s ease-out;
    overflow: hidden;

    @keyframes fadeIn {
        from {
        opacity: 0;
        transform: translateY(-5px);
        }
        to {
        opacity: 1;
        transform: translateY(0);
        }
}
`;

//itens menu dropdown
export const DropdownItem = styled.button`
    width: 100%;
    padding: 10px 16px;
    background: transparent;
    border: none;
    color: #ffffff;
    text-align: left;
    font-size: 0.9rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: background 0.2s, color 0.2s;
    gap: 5px;

    &:hover {
        background-color: #291d54;
        color: #ffffff;
        text-decoration: none;
    }

    &:disabled {
        opacity: 0.35;
        cursor: not-allowed;
        &:hover {
        background: transparent;
        }
    }
}
`
export const DropDownLogout = styled(DropdownItem)`
    color: #B71813;
    border-top: 1px solid #372963;
    margin-top: 4px;
    padding-top: 12px;
    font-size: 1rem;
    &:hover {
        background-color: rgba(255, 85, 85, 0.1);
        color: #B71813;
    }   
`
export const DropdownLinkItem = styled(Link)`
    width: 100%;
    padding: 10px 16px;
    background: transparent !important;
    background-color: transparent !important;
    border: none;
    display: flex;
    align-items: center;
    
    color: #ffffff !important;
    font-size: 0.9rem;
    font-family: inherit;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:link, &:visited, &:active, &:focus {
        text-decoration: none !important;
        background: transparent !important;
        background-color: transparent !important;
    }

    &:hover {
        background-color: #291d54 !important;
        color: #ffffff !important;
    }
`