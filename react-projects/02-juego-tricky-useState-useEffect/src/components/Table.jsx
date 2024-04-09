import { useState } from "react";
import { WinnerModal } from "./WinnerModal";
import { Board } from "./Board";
import { Reset } from "./Reset";
import { Turns } from "./Turns";
import { TURNS } from "../constants";
import confetti from "canvas-confetti";
import { checkWinnerFrom, checkEndGame } from "../logic/board";


export function Table() {

  const [board, setBoard] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      // alert(`el ganador es ${newWinner}`)
      setWinner(newWinner);
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
}
    return(
        <main className="board">
        <h1>Tricky Game</h1>
        <Reset resetGame={resetGame} />
        <Board updateBoard={updateBoard} board={board} />
        <Turns turn={turn}/>
        <WinnerModal resetGame={resetGame} winner={winner} />
      </main>
    )

}