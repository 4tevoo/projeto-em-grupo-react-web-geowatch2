import { GameMap } from "./GameMap"
import { ButtonHud, HudContainer } from "./style"

export const GameHUD = ({position, setPosition, handleClick, score}) => {
  return (
    <HudContainer>
      <GameMap position={position} setPosition={setPosition}/>
      <ButtonHud onClick={handleClick} $isClicked={position ? true : false}>Guess</ButtonHud>
    </HudContainer>
  )
}
