import Square from "./Square";
import Knight from "./Knight";
import { canMoveKnight, moveKnight } from "./Game";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BoardSquare from "./BoardSquare";

function renderSquare(i, knightPosition) {
  const x = i % 8;
  const y = Math.floor(i / 8);

  return (
    <div
      key={i}
      style={{ width: "12.5%", height: "12.5%" }}
      onClick={() => handleSquareClicked(x, y)}
    >
      <BoardSquare x={x} y={y}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  );
}

function renderPiece(x, y, [knightX, knightY]) {
  if (x === knightX && y === knightY) {
    return <Knight />;
  }
}

function handleSquareClicked(toX, toY) {
  // console.log(canMoveKnight(toX, toY));
  // moveKnight(toX, toY);

  //If move is true (2,1) or (1,2)
  //Move the knight
  if (canMoveKnight(toX, toY)) {
    moveKnight(toX, toY);
  }
}

export default function Board({ knightPosition }) {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(renderSquare(i, knightPosition));
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
}
