import { GameMap } from "./GameMap"
import { ButtonHud, HudContainer } from "./style"

export const GameHUD = () => {
  return (
    <HudContainer>
      <GameMap />
      <ButtonHud>Guess</ButtonHud>
    </HudContainer>
  )
}
