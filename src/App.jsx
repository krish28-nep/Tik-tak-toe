import React, { useState, useEffect } from "react";
import Button from "./Button.jsx";
import RestartButton from "./RestartButton.jsx";

function App() {
  const [isPlayerOne, setIsPlayerOne] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (squares[index] || winner) return; // Ignore if the square is already filled or if there's a winner

    const newSquares = squares.slice();
    newSquares[index] = isPlayerOne ? "O" : "X";
    setSquares(newSquares);
    setIsPlayerOne(!isPlayerOne);
  };

  const checkWinner = (squares) => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < combinations.length; i++) {
      const [a, b, c] = combinations[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(squares[a]);
        return;
      }
    }

    if (!squares.includes(null)) {
      setWinner("Draw");
    }
  };

  useEffect(() => {
    checkWinner(squares);
  }, [squares]);


  return (
    <div className="container">
      <h1>Tik Tak Toe</h1>
      <div className="board">
        {squares.map((value, index) => (
          <Button key={index} value={value} index={index} handleClick={() => handleClick(index)} />
        ))}
      </div>
      {winner && (
        <div>
          {winner === "Draw" ? "It's a draw!" : `Player ${winner === "O" ? 1 : 2} wins!`}
          <RestartButton/>
        </div>
      )}
    
    </div>
  );
}

export default App;
