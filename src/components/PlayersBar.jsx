import Player from "./Player";
import { PLAYERS } from "../data/Methods";
export default function PlayersBar({ activePlayer, onChangeName }) {
  return (
    <div className="flex justify-center gap-10 w-full ">
      <Player
        name={PLAYERS.X}
        symbol="X"
        isActive={activePlayer.activePlayer == "X"}
        onChangeName={onChangeName}
      />
      <Player
        name={PLAYERS.O}
        symbol="O"
        isActive={activePlayer.activePlayer == "O"}
        onChangeName={onChangeName}
      />
    </div>
  );
}
