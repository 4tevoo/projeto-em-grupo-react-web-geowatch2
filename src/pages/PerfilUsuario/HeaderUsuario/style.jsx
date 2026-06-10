import styled from "styled-components"

export const HeaderUsuarioStyle = styled.div`
    background-image: 
    linear-gradient(rgba(74, 40, 153, 0.85), rgba(82, 43, 173, 0.85)), 
    url('https://media.gettyimages.com/id/1385142384/pt/vetorial/outline-gradient-world-map-outline-background.jpg?s=612x612&w=0&k=20&c=EFkbBum2tFdQD5R29Om59UdVucWAgavTkJQmS2PgU-4=');
    border-radius: 10px;
    height: auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    color: #FFFFFF;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
    margin-top: 70px;
    gap: 20px;
    
    
    @media (min-width: 768px) {
        width: 60%; /* Desktop: Volta para o tamanho original */
        height: 80px;
        flex-direction: row; /* Lado a lado no computador */
        padding: 20px 24px;
        margin-top: 0;
    }
`
export const InfosHeader = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    height: 100%;
`
export const AvatarHeaderUsuario = styled.img`
    border-radius: 50%;
    height: 100px;
    background-color: white;
    border: 4px solid #4a2399;

    @media (min-width: 768px) {
        height: 100%;
    }
`

export const ButtonsHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    @media (min-width: 768px) {
        padding-right: 16px;
        gap: 12px;
    }
`