
import { useState } from 'react';
import './App.css'


const TURNS = {
  X : 'x',
  O : 'o'
}

const Square = ({children, upgradeBoard, index}) => {
  return (
      <div className='square'>
        {children}
      </div>
  )
}
// const board = Array(9).fill(null)

function App() {

  const [board, setBoard] = useState(['x', 'x', 'x','x', 'x', 'x','o', 'x', 'x']);

  return (
    <main className='board'>
    <h1>juego</h1>
       <section  className='game'>
       {
        board.map((_, index) => {
          return (
          <Square key={index} index={index}>
            {board[index]}
          </Square>
          )
        })
       }

       </section>
    </main>
  )

}

export default App
