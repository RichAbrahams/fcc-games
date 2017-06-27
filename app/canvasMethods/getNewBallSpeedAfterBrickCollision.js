export default function (ballX, ballY, ballSpeedX, ballSpeedY, brickWidth, brickHeight) {
  const ballCol = Math.floor(ballX / brickWidth);
  const ballRow = Math.floor(ballY / brickHeight);
  const previousBallCol = Math.floor((ballX - ballSpeedX) / brickWidth);
  const previousBallRow = Math.floor((ballY - ballSpeedY) / brickHeight);
  let newBallSpeedX = ballSpeedX;
  let newBallSpeedY = ballSpeedY;
  if (ballCol !== previousBallCol) {
    newBallSpeedX = ballSpeedX * -1;
  }
  if (ballRow !== previousBallRow) {
    newBallSpeedY = ballSpeedY * -1;
  }
  return [newBallSpeedX, newBallSpeedY];
}
