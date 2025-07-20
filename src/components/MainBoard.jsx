import { useState } from "react";
import GameBoard from "./GameBoard";
import PlayersBar from "./PlayersBar";
import Log from "./Log";
import GameOver from "./GameOver";
import {
  deriveGameBoard,
  deriveWinner,
  deriveActivePlayer,
  PLAYERS,
} from "../data/Methods";

export default function MainBoard() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  const activePlayer = deriveActivePlayer(gameTurns);
  const Board = deriveGameBoard(gameTurns);
  const winner = deriveWinner(Board, players);
  const hasDraw = gameTurns.length === 9 && !winner;

  function handleSelectSquare(i, j) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);
      const updateTurns = [
        { square: { row: i, col: j }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTurns;
    });
  }
  function handleRestart() {
    setGameTurns([]);
  }
  function handelPlayersNameChange(symbol, newName) {
    setPlayers((prev) => {
      return { ...prev, [symbol]: newName };
    });
  }
  return (
    <div className="w-[700px] h-[700px] p-8 bg-gradient-to-b from-[#383624] to-[#282617] drop-shadow-2xl rounded-lg">
      <PlayersBar
        activePlayer={activePlayer}
        onChangeName={handelPlayersNameChange}
      />
      {(winner || hasDraw) && (
        <GameOver winner={winner} onRestart={handleRestart} />
      )}
      <GameBoard onSelectSquare={handleSelectSquare} Board={Board} />
      <Log turns={gameTurns} />
    </div>
  );
}
