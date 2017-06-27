export default function checkBallOnCpuPaddle(cpuPaddleX, cpuPaddleY, paddleHeight, paddleWidth, ballX, ballY) {
  const top = cpuPaddleY;
  const bottom = cpuPaddleY + paddleHeight;
  const left = cpuPaddleX;
  const right = cpuPaddleX + paddleWidth;
  return (ballY - 3) >= top && (ballY + 3) <= bottom && (ballX - 3) >= left && (ballX + 3) <= right;
}
