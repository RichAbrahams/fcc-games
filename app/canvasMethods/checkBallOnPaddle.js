export default function checkBallOnPaddle(canvasHeight, paddleDistanceFromBottom, paddleX, paddleWidth, paddleHeight, ballX, ballY) {
  const left = paddleX;
  const right = paddleX + paddleWidth;
  const top = canvasHeight - paddleDistanceFromBottom;
  const bottom = top + paddleHeight;
  return (ballY + 3) >= top && (ballY - 3) <= bottom && (ballX + 3) >= left && (ballX - 3) <= right;
}
