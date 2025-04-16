import { WINNING_COMBINATIONS } from "./WinProbabilities";
export const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
export const PLAYERS = { X: "Player 1", O: "Player 2" };

export function deriveWinner(Board, players) {
  let winner = null;
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = Board[combination[0].row][combination[0].col];
    const secondSquareSymbol = Board[combination[1].row][combination[1].col];
    const thirdSquareSymbol = Board[combination[2].row][combination[2].col];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = players[firstSquareSymbol];
    }
  }
  return winner;
}

export function deriveGameBoard(gameTurns) {
  let Board = [...INITIAL_GAME_BOARD.map((row) => [...row])];
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    Board[row][col] = player;
  }
  return Board;
}

export function deriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
