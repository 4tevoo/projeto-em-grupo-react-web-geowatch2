import styled from "styled-components"

export const HeaderUsuarioStyle = styled.div`
    background-image: 
    linear-gradient(rgba(74, 40, 153, 0.85), rgba(82, 43, 173, 0.85)), 
    url('https://media.gettyimages.com/id/1385142384/pt/vetorial/outline-gradient-world-map-outline-background.jpg?s=612x612&w=0&k=20&c=EFkbBum2tFdQD5R29Om59UdVucWAgavTkJQmS2PgU-4=');
    border-radius: 10px;
    height: 80px;
    width: 60%;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #FFFFFF;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
`
export const InfosHeader = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    height: 100%;
`
export const AvatarHeaderUsuario = styled.img`
    border-radius: 50%;
    height: 100%;
    background-color: white;
    border: 4px solid #4a2399;
`

export const ButtonsHeader = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    gap: 12px;
`