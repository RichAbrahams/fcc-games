
function getBallIndex([ballCol, ballRow], columns) {
  return Math.floor(ballCol + (ballRow * columns));
}

function getActive(index, bricks) {
  return index < bricks.size && bricks.getIn([index, 'active']) === 1;
}

function getColRow(ballX, ballY, brickWidth, brickHeight) {
  const col = Math.floor(ballX / brickWidth);
  const row = Math.floor(ballY / brickHeight);
  return [col, row];
}

export default function checkBallOnBrick(brickWidth, brickHeight, ballX, ballY, ballSpeedX, ballSpeedY, bricks, columns) {
  const ballColRow = getColRow(ballX, ballY, brickWidth, brickHeight);
  const ballIndex = getBallIndex(ballColRow, columns);
  const previousBallColRow = getColRow(ballX - ballSpeedX, ballY - ballSpeedY, brickWidth, brickHeight);
  const previousBallIndex = getBallIndex(previousBallColRow, columns);
  if (getActive(ballIndex, bricks)) {
    let newBallSpeedX = ballSpeedX;
    let newBallSpeedY = ballSpeedY;
    let checkForCorner = true;
    if (ballColRow[0] !== previousBallColRow[0]) {
      const adjBrickSide = getBallIndex([previousBallColRow[0], ballColRow[1]]);
      if (!getActive(adjBrickSide, bricks)) {
        newBallSpeedX = ballSpeedX * -1;
        checkForCorner = false;
      }
    }
    if (ballColRow[1] !== previousBallColRow[1]) {
      const adjBrickTopBot = getBallIndex([ballColRow[0], previousBallColRow[1]]);
      if (!getActive(adjBrickTopBot, bricks)) {
        newBallSpeedY = ballSpeedY * -1;
        checkForCorner = false;
      }
    }
    if (checkForCorner) {
      newBallSpeedX = ballSpeedX * -1;
      newBallSpeedY = ballSpeedY * -1;
    }
    return [ballIndex, newBallSpeedX, newBallSpeedY];
  }
  return false;
}
