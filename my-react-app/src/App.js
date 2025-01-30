import { useState } from "react";
import "./App.css";
import React from "react";
// import ChildComponent1 from "./components/ChildComponent/ChildComponent1";

function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const squares = history[currentMove];
  // let squares={currentSquares}
  // const onPlay={handlePlay}

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function Square({ value, onSquareClick }) {
    return (
      <button style={colStyle} className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }

  const newgame = () => window.location.reload();

  const h1Style = {
    textAlign: "center",
    fontSize: "2.5em",
    margin: "5px",
  };
  const h2Style = {
    textAlign: "center",
    padding: "10px",
    width: "400px",
    margin: "0 auto 10px",
  };
  const h3Style = {
    textAlign: "center",
    backgroundColor: "aliceblue",
    padding: "10px",
    width: "120px",
    margin: "0 auto 10px",
  };
  const rowStyle = {
    height: "600px",
    display: "flex",
    width: "600px",
    border: "1px solid black",
    flexWrap: "wrap",
    margin: "auto",
  };
  const colStyle = {
    width: "200px",
    height: "200px",
    backgroundColor: "rgb(239, 214, 181)",
    border: "1px solid black",
    fontSize: "8em",
    textAlign: "center",
    fontFamily: "cursive",
  };
  const classStyle = {
    textalign: "center",
    fontSize: "2em",
    margin: "30px auto 10px",
    backgroundColor: "brown",
    color: "white",
    width: "30%",
  };
  // constructor({ xIsNext, squares, onPlay }) {
  //   super({ xIsNext, squares, onPlay });

  //   this.state = {};
  // }

  // function Square({ value, onSquareClick }) {
  //   return (
  //     <button style={colStyle} className="square" onClick={onSquareClick}>
  //       {value}
  //     </button>
  //   );
  // }

  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    handlePlay(nextSquares);
  }
  const winner = calculateWinner(squares);
  const status = winner
    ? "Winner: " + winner
    : "Next player: " + (xIsNext ? "X" : "O");

  //   const addBorderStyle = (indexArray) => {
  //     indexArray.forEach(
  //       (index) =>
  //         (Square[index].style.cssText =
  //           "backgroundColor: rgba(247, 191, 129, 1)")
  //     );
  //   };

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        // addBorderStyle([a, b, c]);
        return squares[a];
      }
    }
    return null;
  }

  return (
    <div className="App">
      {/* <ChildComponent1
        xIsNext={xIsNext}
        squares={currentSquares}
        onPlay={handlePlay}
      /> */}

      <div className="container">
        <h1 style={h1Style}>Tic Tac Toe</h1>
        <h3 style={h3Style}>Player 1: X Player 2: O</h3>
        <h2 id="current-turn-text" style={{ h2Style }}>
          {status}
        </h2>
        <div className="row" style={rowStyle}>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />

          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />

          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />

          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />

          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />

          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />

          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />

          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />

          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
        <div
          className="class"
          type="button"
          style={classStyle}
          onClick={newgame}
        >
          New Game
        </div>
      </div>
    </div>
  );
}

export default App;
