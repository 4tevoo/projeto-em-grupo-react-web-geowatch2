import { GameMap } from "./GameMap"
import { ButtonHud } from "./style"

export const GameHUD = () => {
  return (
    <>
      <GameMap />
      <ButtonHud>Guess</ButtonHud>
    </>
  )
}
