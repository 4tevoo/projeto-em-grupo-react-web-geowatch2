import { Bloco, BlocoTitulo, BlocoTexto, LogoImg, TituloUm, InfoPlataformas, InfoTexto } from "../../../pages/Main/style";
import Fundo from "../../../assets/continentes.png"
import Logo from "../../../assets/logo.png"
import { colors } from "../../../pages/Main/style";
import CardLogin from "../CardLogin";

export default function PrimeiroBloco() {
    return (
        <Bloco $bg={colors.purple} $img={Fundo}>
            <div >
                <LogoImg src={Logo} alt="GeoWatch 2" style={{width: '180px', marginBottom: '-1rem'}}/>
                <TituloUm>
                    Explore o mundo!
                </TituloUm>
                <BlocoTexto>
                    Seja jogado em qualquer lugar, das praias do Rio à Floresta Amazônica. 
                    Descubra onde você está.. Junte-se a milhões de jogadores hoje!
                </BlocoTexto>

                <InfoPlataformas style={{marginTop: '0.8rem', gap: '1.5rem'}}>
                    <div>
                        <span style={{fontSize: '1.3rem'}}>
                            (colar svg ainda)
                        </span>
                        <InfoTexto style={{fontSize: '0.9rem'}}>
                            Jogue na Web, Steam, iOS e Android
                        </InfoTexto>
                    </div>
                    <div>
                        <span style={{fontSize:'1.3rem'}}>
                            (colar svg ainda)
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