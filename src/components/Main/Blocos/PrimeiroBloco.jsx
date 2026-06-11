import { Bloco, BlocoTitulo, BlocoTexto, LogoImg, TituloUm, InfoPlataformas, InfoTexto } from "../../../pages/Main/style";
import Fundo from "../../../assets/continentes.png"
import Logo from "../../../assets/logo.png"
import { colors } from "../../../pages/Main/style";
import CardLogin from "../CardLogin";
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import { FaSteam } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function PrimeiroBloco() {
    return (
        <Bloco $bg={colors.purple} $img={Fundo}>
            <div >
                <LogoImg src={Logo} alt="GeoWatch 2" style={{width: '180px', marginBottom: '-1rem'}}/>
                <TituloUm>
                    Explore o mundo!
                </TituloUm>
                <BlocoTexto>
                    Dispute o pódio jogando todas as 5 rodadas e entre para a história!
                    Seja jogado em qualquer lugar, das praias do Rio à Floresta Amazônica. 
                    Descubra onde você está... Junte-se a milhões de jogadores hoje!
                </BlocoTexto>

                <InfoPlataformas style={{marginTop: '0.8rem', gap: '1.5rem'}}>
                    <div>
                        <span style={{ fontSize: '1.7rem', color: colors.white, display: 'flex', gap: '0.3rem', marginBottom: '0.7rem', marginTop: '0.7rem'}}>
                            <AiOutlineGlobal />
                            <FaSteam />
                            <FaApple />
                            <DiAndroid />
                        </span>
                        <InfoTexto style={{fontSize: '0.9rem'}}>
                            Jogue na Web, Steam, iOS e Android
                        </InfoTexto>
                    </div>
                    <div>
                        <span style={{ fontSize: '1.7rem', color: colors.white, display: 'flex', gap: '0.3rem', marginBottom: '0.7rem', marginTop: '0.7rem'}}>
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </span>
                        <InfoTexto style={{fontSize: '0.9rem'}}>
                            Avaliação 4.5/5 na App Store
                        </InfoTexto>
                    </div>
                </InfoPlataformas>
            </div>
            <CardLogin />
        </Bloco>
    );
}