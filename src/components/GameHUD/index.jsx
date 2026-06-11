import { GameMap } from "./GameMap"
import { ButtonHud, HudContainer, Points, Round } from "./style"

export const GameHUD = ({position, setPosition, handleClick, sumScore, round}) => {
  return (
    <>
      <HudContainer>
        {sumScore ? <Points>{sumScore}</Points> : <Points>0</Points>}
        <Round>{round} / 5</Round>
        <GameMap position={position} setPosition={setPosition}/>
        <ButtonHud onClick={handleClick} $isClicked={position ? true : false} disabled={position ? false : true}>Guess</ButtonHud>
      </HudContainer>
    </>
  )
}
