import { GameMap } from "./GameMap"
import { ButtonHud, HudContainer } from "./style"

export const GameHUD = ({position, setPosition, handleClick}) => {
  return (
    <HudContainer>
      <GameMap position={position} setPosition={setPosition}/>
      <ButtonHud onClick={handleClick}>Guess</ButtonHud>
    </HudContainer>
  )
}
