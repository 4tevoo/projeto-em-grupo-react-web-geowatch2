import { GameMap } from "./GameMap"
import { ButtonHud, HudContainer, Points } from "./style"

export const GameHUD = ({position, setPosition, handleClick, sumScore}) => {
  return (
    <>
      <HudContainer>
        {sumScore ? <Points>{sumScore}</Points> : <Points>0</Points>}
        <GameMap position={position} setPosition={setPosition}/>
        <ButtonHud onClick={handleClick} $isClicked={position ? true : false} disabled={position ? false : true}>Guess</ButtonHud>
      </HudContainer>
    </>
  )
}
