//Inital: This was the code to randomize movements of knight on the chess board.
// export function observe(receive) {
//   const randPos = () => Math.floor(Math.random() * 8)
//   setInterval(() => receive([randPos(), randPos()]), 500)
// }

let knightPosition = [1, 7];
let observer = null;

function emitChange() {
  observer(knightPosition);
}

export function observe(o) {
  if (observer) {
    throw new Error("Multiple observers not implemented.");
  }
  observer = o;
  emitChange();
}

export function moveKnight(toX, toY) {
  knightPosition = [toX, toY];
  emitChange();
}

export function canMoveKnight(toX, toY) {
  //Position is coming from  Line 7
  //Destructured the arry, instead of arr[0] , we can destructre to just call it x or y.

  const [x, y] = knightPosition;
  const dx = toX - x;
  const dy = toY - y;
  console.log(Math.abs(dx), Math.abs(dy));

  //This checks L Shape for knight
  //Return true, if the number is either 2,1 or 1,2
  return (
    (Math.abs(dx) === 2 && Math.abs(dy) === 1) ||
    (Math.abs(dx) === 1 && Math.abs(dy) === 2)
  );
}
