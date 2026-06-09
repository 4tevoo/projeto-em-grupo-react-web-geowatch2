import { AvataresContainer, AvatarCard } from "./style"

const seedsAvatares = [
    "AV1", "AV2", "AV3", "AV4", "AV5", "AV6", "AV7", "AV8", "AV9", "AV10",
    "AV11", "AV12", "AV13", "AV14", "AV15", "AV16", "AV17", "AV18", "AV19", "AV20",
]

export const AvatarList = ({avatarSelecionado, setAvatarSelecionado}) => {
    return(
        <AvataresContainer>
            {seedsAvatares.map((seed, index) => {
            const urlAvatar = `https://api.dicebear.com/7.x/adventurer/svg?seed=${seed}`;
            const estaClicado = avatarSelecionado === urlAvatar;

                return (
                <AvatarCard
                    key={index}
                    src={urlAvatar}
                    alt={`Avatar ${seed}`}
                    $selecionado={estaClicado}
                    onClick={() => setAvatarSelecionado(urlAvatar)} 
                />
                );
            })}

        </AvataresContainer>
    )
}